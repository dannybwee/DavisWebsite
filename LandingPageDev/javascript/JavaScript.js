$(document).ready(function(){

	// Activate multiselect in add form
	$('#loc_recycle #loc_reuse').multiselect({
		nonSelectedText: 'Select expertise!',
		buttonWidth: 250,
		enableFiltering: true
	});

	var currentResultArray;
	var currentRelatedItemsArray;
	var currentRelatedLocationsArray;

	// When user clicks either "Search" button, changes #category value
	// and clears item/location detail div on change
	$("#searchItems, #searchLocations").click(function(){
		$("#itemTableBody").empty();
		$("#results").empty();
		if($(this).attr('id') === "searchItems"){
			$("#category").val("items");
		}
		else if($(this).attr('id') === "searchLocations"){
			$("#category").val("locations");
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
				data = "<h3>Item</h3><img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>";
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
				data = "<h3>Location</h3><img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>";
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
		currentResultArray = resultsArray;
		$("#itemTableBody").empty();
		for (var i = 0; i < resultsArray.length; i++) {
			var rowId = "item" + i;
			var resultString = "<tr class='itemRow' id='"+rowId+"'><td class='closeSidebar'>"+resultsArray[i].Name+"</td><td><div class='hidden'><span class='glyphicon glyphicon-cog'></span></div></td></tr>";
			$("#itemTableBody").append(resultString);
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
		$("#sidebar").animate( {left: '25%'}, 400, function() {
      		$("#expand").attr('class', 'col-sm-12');
      		$("#sidebar").hide();
        });
    });

    $("#edit-on").on("click", function() {
    	$("div.hidden").toggleClass("hidden");
    })
});
