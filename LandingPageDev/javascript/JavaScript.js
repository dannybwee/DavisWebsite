$(document).ready(function(){
	var currentResultArray;
	var currentRelatedItemsArray;
	var currentRelatedLocationsArray;
	var sidebarArray;
	var sideString;
	var modalSideString;
	var loggedOn = false;


	//When the page loads pull up all the items to display from the database
	var getItems ="";
    getItems = getItems + "ajax/pullAllItems.php?";
    $.get(getItems, function(response) {
  		populateList(response);
 
    });
  
 	//When the page loads populate the sidebar by pulling info from the database
	//FOR CARSON Code starts here and then jumps to populate sidebar function
    var getNotice="";
    getNotice = getNotice + "ajax/pullNoticeInfo.php?";
    $.get(getNotice, function(response) {
		populateSidebar(response);
    });

    
	// Activate multiselect in add form
	$('#loc_recycle #loc_reuse #editLoc_recycle #editLoc_reuse').multiselect({
		nonSelectedText: 'Select expertise!',
		buttonWidth: 250,
		enableFiltering: true
	});

	// When user clicks either "Search" button, changes #category value
	// and clears item/location detail div on change
	$("#searchItems, #searchLocations").click(function(){
		$("#itemTableBody").empty();
		$("#results").empty();
		if($(this).attr('id') === "searchItems"){
			if ($(this).hasClass("active")) {
				//If this the search Items button is already active and is clicked, do nothing.
			}
			else {
				//Else, make the class active and make locations button inactive
				$(this).addClass("active");
				$("#searchLocations").removeClass("active");
			}
			$("#category").val("items");

			getString ="";
		    getString = getString + "ajax/pullAllItems.php?";
		    $.get(getString, function(response) {
		  		populateList(response);
		    });

		}
		else if($(this).attr('id') === "searchLocations"){
			if ($(this).hasClass("active")) {
				//If this the search Locations button is already active and is clicked, do nothing.
			}
			else {
				//Else, make the class active and make items button inactive
				$(this).addClass("active");
				$("#searchItems").removeClass("active");
			}
			$("#category").val("locations");

			getString ="";
			getString = getString + "ajax/pullAllLocations.php?";
		    $.get(getString, function(response) {
		  		populateList(response);
		    });
		}
	});

  	$(".letter").click(function() {
	    var getString = "";
	    if($('#category').val() == 'locations') {
	      	getString = getString + "ajax/locationlettersearch.php?key=" + $(this).text();
	    } else {
	      	getString = getString + "ajax/itemlettersearch.php?key=" + $(this).text();
	    }
	    $.get(getString, function(response) {
	      	populateList(response);
	    });
  	});

	$("#itemTableBody").on('click', 'tr.itemRow', function() {
		var choice = $("#category").val();
		var data = "";

		$("#results").empty();

		switch(choice){
			case 'items':
				let resultItem = currentResultArray.find(i => i.Name === $(this).text());

				// Collect data and append to HTML
				data = "<h3>"+resultItem.Name+"</h3><img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>";
				if (resultItem.Id)
					data += "<p><strong>Id:&nbsp;</strong>"+resultItem.Id+"</p>";
				if (resultItem.Name)
					data += "<p><strong>Name:&nbsp;</strong>"+resultItem.Name+"</p>";
				if (resultItem.General_Info)
					data += "<p><strong>General Info:&nbsp;</strong>"+resultItem.General_Info+"</p>";
				if (resultItem.Notes)
					data += "<p><strong>Notes:&nbsp;</strong>"+resultItem.Notes+"</p>";
				data += "<hr><h3>Related Items/Locations</h3>";
				$("#results").append(data);

				$.get("ajax/itemrelatedlocations.php?key=" + resultItem.Id, function(response) {
					itemRelatedLocations(response);
				});
				break;
			case 'locations':
				let resultLocation = currentResultArray.find(l => l.Name === $(this).text());

				// Collect data and append to HTML
				data = "<h3>"+resultLocation.Name+"</h3><img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>";
				if (resultLocation.Id)
					data += "<p><strong>Id:&nbsp;</strong>"+resultLocation.Id+"</p>";
				if (resultLocation.Name)
					data += "<p><strong>Name:&nbsp;</strong>"+resultLocation.Name+"</p>";
				if (resultLocation.Address)
					data += "<p><strong>Address:&nbsp;</strong>"+resultLocation.Address+"</p>";
				if (resultLocation.Phone)
					data += "<p><strong>Contact Phone:&nbsp;</strong>"+resultLocation.Phone+"</p>";
				if (resultLocation.Website)
					data += "<p><strong>Website:&nbsp;</strong>"+resultLocation.Website+"</p>";
				if (resultLocation.City)
					data += "<p><strong>City:&nbsp;</strong>"+resultLocation.City+"</p>";
				if (resultLocation.State)
					data += "<p><strong>State:&nbsp;</strong>"+resultLocation.State+"</p>";
				if (resultLocation.Zip)
					data += "<p><strong>Zip Code:&nbsp;</strong>"+resultLocation.Zip+"</p>";
				if (resultLocation.Notes)
					data += "<p><strong>Notes:&nbsp;</strong>"+resultLocation.Notes+"</p>";
				data += "<hr><h3>Related Items/Locations</h3>";
				$("#results").append(data);

				$.get("ajax/locationrelateditems.php?key=" + resultLocation.Id, function(response) {
					locationRelatedItems(response);
				});
				break;
			default:
				break;
		}
	});

	// Accepts an array of strings (the search result) to fill the list
	function populateList(resultsArray) {
		resultsArray = JSON.parse(resultsArray);
		getItems = resultsArray;
		currentResultArray = resultsArray;
		$("#itemTableBody").empty();
		if(loggedOn == false) {
			for (var i = 0; i < resultsArray.length; i++) {
				var rowId = "item" + i;
				var resultString = "<tr class='itemRow' id='"+rowId+"'><td class='closeSidebar'>"+resultsArray[i].Name+"</td><td><div class='hidden closeSidebar'><span class='glyphicon glyphicon-cog' data-toggle='modal' data-target='#editModal'></span></div></td></tr>";
				$("#itemTableBody").append(resultString);
			}
		}
		else {
			for (var i = 0; i < resultsArray.length; i++) {
				var rowId = "item" + i;
				var resultString = "<tr class='itemRow' id='"+rowId+"'><td class='closeSidebar'>"+resultsArray[i].Name+"</td><td><div class='closeSidebar'><span class='closeSidebar glyphicon glyphicon-cog' data-toggle='modal' data-target='#editModal'></span></div></td></tr>";
				$("#itemTableBody").append(resultString);
			}
		}
	}

	function locationRelatedItems(resultsArray) {
		resultsArray = JSON.parse(resultsArray);
		currentRelatedItemsArray = resultsArray;
		appendRelated(resultsArray);
	}

	function itemRelatedLocations(resultsArray) {
		resultsArray = JSON.parse(resultsArray);
		currentRelatedLocationsArray = resultsArray;
		appendRelated(resultsArray);
	}

	function appendRelated(resultsArray) {
		var resultString = "";
		for(var i = 0; i < resultsArray.length; i++) {
			resultString += resultsArray[i].Name;
			if (i < resultsArray.length-1) {
				resultString += ", ";
			}
		}
		$("#results").append(resultString);
	}


	$("#itemTableBody").on("click", "td.closeSidebar", function(){
		$("#homeImage").hide();
		$("#sidebar").animate( {left: '25%'}, 400, function() {
      		$("#expand").attr('class', 'col-sm-12');
      		$("#sidebar").hide();
        });

    });

    $("#itemTableBody").on("click", "div.closeSidebar", function(){
		$("#homeImage").hide();
		$("#sidebar").animate( {left: '25%'}, 400, function() {
      		$("#expand").attr('class', 'col-sm-12');
      		$("#sidebar").hide();
        });

    });

    $("#edit-on").on("click", function(e) {
    	e.preventDefault();

    	$('#loginUser').val('');
    	$('#loginPassword').val('');
    	$('#loginModal').modal('hide');
    	$("div.hidden").toggleClass("hidden");

    	//Testing admin mode here with loggedOn variable
    	loggedOn = true;
		$("#editItems").removeClass("hidden");
		$("#editSidebar").removeClass("hidden");
    })

    //Function to populate sidebar with notice information
    function populateSidebar(getNotice) {
    	getNotice = JSON.parse(getNotice);
    	sidebarArray = getNotice;

    	for (var i = 0; i < getNotice.length; i++) {
    		//Populates modal with notice information
    		modalSideString = "<p class='blockquote'>" + sidebarArray[i].Info + " </p>";
    		$("#modalBullets").append(modalSideString);

    		sideString = "<li class='blockquote'>" + sidebarArray[i].Info + " </li>";
	    	$("#sidebarBullets").append(sideString);
    	}

    	// if(loggedOn == false ) {
	    // 	for (var k = 0; k< getNotice.length; i++) {
	    // 		sideString = "<li class='blockquote'>" + sidebarArray[i].Info + " </li>";
	    // 		$("#sidebarBullets").append(sideString);
	    // 	}
	    // }
	    // else {
	    // 	for (var k = 0; k< getNotice.length; i++) {
	    // 		sideString = "<span class='glyphicon glyphicon-cog' style='list-style-type: none;'><li class='blockquote'>" + sidebarArray[i].Info + " </li></span>";
	    // 		$("#sidebarBullets").append(sideString);
	    // 	}
	    // }


    }
//Autosearch function works by querying each letter when it is typed. Most likely will change by storing all data in a local array instead of querying each time
    $("#searchForm").keyup(function() {
    	var x = $("#searchForm").val();
    	var choice = $("#category").val();
    	var query = "";
    	if(choice == 'items') {
    		// console.log()
    		query = query + "ajax/itemlettersearch.php?key=" + x;
    	} 
    	else {
    		query = query + "ajax/locationlettersearch.php?key=" + x;
    	}
    	$.get(query, function(response) {
	      	populateList(response);
	    });
    	
    });

    $("#addDesBtn").on("click", function() {
    	var newData="";

    	var getNotice="";
    	getNotice = getNotice + "ajax/pullNoticeInfo.php?";
    	$.get(getNotice, function(response) {
			getNotice = response;
			getNotice = JSON.parse(getNotice);
			newData = "key=" + getNotice.length + "&key2=" + $("#addNoticeDes").val();
		    $.ajax
			({
				url: "ajax/insertIntoSidebar.php",
				type : "POST",
				cache : false,
				data : newData,
				success: function(response)
				{
				  	alert(response);
				}
			});

   		});
    });


});
