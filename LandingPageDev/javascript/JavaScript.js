function cogWheel(id, name, info, notes, image) {

	var itemID = window.parent.document.getElementById('editItemID');
	itemID.value = id;
	var itemName = window.parent.document.getElementById('editItemName');
	itemName.value = name;
	var itemInfo = window.parent.document.getElementById('editGeneralInfo');
	itemInfo.value = info;
	var itemNotes = window.parent.document.getElementById('editAdditionalNotes');
	itemNotes.value = notes;


	var getString = "ajax/editLocRecycle.php";
	$.get(getString, function(recycleLocations) {
		recycleLocations = JSON.parse(recycleLocations);
		getString = "ajax/itemRecycleLocations.php?key=" + id;
		$.get(getString, function(itemLocations) {
			itemLocations = JSON.parse(itemLocations);
			var x = window.parent.document.getElementById("editLoc_recycle");
			if(x.length > 0) {
				for(var i=x.length-1; i>=0; i--) {
					x.remove(i);
				}
			}
			for(var i=0; i<recycleLocations.length; i++) {
				//var x = window.parent.document.getElementById("editLoc_recycle");
				var opt = window.parent.document.createElement("option");
				opt.text = recycleLocations[i]['Name'];
				for(var j=0; j<itemLocations.length; j++) {
					if(recycleLocations[i]['Location_Id'] == itemLocations[j]['Location_Id']) {
						opt.selected = true;
					}
				}
				x.add(opt, x[i]);
			}
		});
	});

	var getString = "ajax/editLocReuse.php";
	$.get(getString, function(reuseLocations) {
		reuseLocations = JSON.parse(reuseLocations);
		getString = "ajax/itemReuseLocations.php?key=" + id;
		$.get(getString, function(itemLocations) {
			itemLocations = JSON.parse(itemLocations);
			var x = window.parent.document.getElementById("editLoc_reuse");
			if(x.length > 0) {
				for(var i=x.length-1; i>=0; i--) {
					x.remove(i);
				}
			}
			for(var i=0; i<reuseLocations.length; i++) {
				var opt = window.parent.document.createElement("option");
				opt.text = reuseLocations[i]['Name'];
				for(var j=0; j<itemLocations.length; j++) {
					if(reuseLocations[i]['Location_Id'] == itemLocations[j]['Location_Id']) {
						opt.selected = true;
					}
				}
				x.add(opt, x[i]);
			}
		});
	});

		$("#delete").on('click', function() {
			var deleteItem = "";
			deleteItem = deleteItem + "ajax/delete_item.php?deleteItemID="+id;
  		$.get(deleteItem, function(e) {
				window.location.reload();
  		});
  	});
}

function cogWheelLocations(id, name, address, phone, website, city, state, zip, notes) {
	var locID = window.parent.document.getElementById('editLocationID');
	locID.value = id;
	var locName = window.parent.document.getElementById('editLocationName');
	locName.value = name;
	var locAddr = window.parent.document.getElementById('editLocationAddress');
	locAddr.value = address;
	var locPhone = window.parent.document.getElementById('editLocationPhone');
	locPhone.value = phone;
	var locWeb = window.parent.document.getElementById('editLocationWebsite')
	locWeb.value = website;
	var locCity = window.parent.document.getElementById('editLocationCity')
	locCity.value = city;
	var locState = window.parent.document.getElementById('editLocationState')
	locState.value = state;
	var locZip = window.parent.document.getElementById('editLocationZip')
	locZip.value = zip;
	var locNotes = window.parent.document.getElementById('editLocationNotes')
	locNotes.value = notes;

	var getString = "ajax/editItemRecycleReuse.php";
	$.get(getString, function(items) {
		items = JSON.parse(items);
		getString = "ajax/itemsRecycledAtLocation.php?key=" + id;
		$.get(getString, function(itemsAtLocation) {
			itemsAtLocation = JSON.parse(itemsAtLocation);
			var x = window.parent.document.getElementById("editItem_recycle");
			if(x.length > 0) {
				for(var i=x.length-1; i>=0; i--) {
					x.remove(i);
				}
			}
			for(var i=0; i<items.length; i++) {
				var opt = window.parent.document.createElement("option");
				opt.text = items[i]['Name'];
				opt.selected = false;
				for(var j=0; j<itemsAtLocation.length; j++) {
					if(items[i]['Id'] == itemsAtLocation[j]['Item_Id']) {
						opt.selected = true;
					}
				}
				x.add(opt);
			}
		});
	});

	var getString = "ajax/editItemRecycleReuse.php";
	$.get(getString, function(items) {
		items = JSON.parse(items);
		getString = "ajax/itemsReusedAtLocation.php?key=" + id;
		$.get(getString, function(itemsAtLocation) {
			itemsAtLocation = JSON.parse(itemsAtLocation);
			var x = window.parent.document.getElementById("editItem_reuse");
			if(x.length > 0) {
				for(var i=x.length-1; i>=0; i--) {
					x.remove(i);
				}
			}
			for(var i=0; i<items.length; i++) {
				var opt = window.parent.document.createElement("option");
				opt.text = items[i]['Name'];
				opt.selected = false;
				for(var j=0; j<itemsAtLocation.length; j++) {
					if(items[i]['Id'] == itemsAtLocation[j]['Item_Id']) {
						opt.selected = true;
					}
				}
				x.add(opt, x[i]);
			}
		});
	});

	$("#deleteLocation").on('click', function() {
		var deleteLocation = "";
		deleteLocation = deleteLocation + "ajax/delete_location.php?deleteLocationID="+id;
  		$.get(deleteLocation, function(e) {
				window.location.reload();
  		});

  });
}

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
        data = "<h3>"+resultItem.Name+"</h3><img src='ajax/uploads/"+resultItem.Image_Name+"' class='center-block' alt='Placeholder Image' height='150' width='300'>";
        if (resultItem.Name)
          data += "<p><strong>Name:&nbsp;</strong>"+resultItem.Name+"</p>";
        if (resultItem.General_Info)
          data += "<p><strong>General Info:&nbsp;</strong>"+resultItem.General_Info+"</p>";
        if (resultItem.Notes)
          data += "<p><strong>Notes:&nbsp;</strong>"+resultItem.Notes+"</p>";
        data += "<hr><h3>Related Items/Locations</h3>";
        $("#results").append(data);
        $.get("ajax/locationrelatedrecycle.php?key=" + resultItem.Id, function(response) {
              if(response == "[]") {
                console.log("EMPTY");
              }
              else {
                data = "";
                data += "<p>Locations To Recycle:</p>";
                $("#results").append(data);
                itemRelatedLocations(response);
              }
              

               $.get("ajax/locationrelatedreuse.php?key=" + resultItem.Id, function(response) {
                  if(response == "[]") {

                  }
                  else {
                    data = "";
                    data += "<p>Locations To Reuse:</p>";
                    $("#results").append(data);
                    itemRelatedLocations(response);
                  }
              });
        });
        
        break;
      case 'locations':
        let resultLocation = currentResultArray.find(l => l.Id === $(this).attr('id'));

        // Collect data and append to HTML
        data = "<h3>"+resultLocation.Name+"</h3><img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>";
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

        $.get("ajax/relateditemsrecycle.php?key=" + resultLocation.Id, function(response) {
              if(response == "[]") {
                console.log("EMPTY");
              }
              else {
                data = "";
                data += "<p>Items To Recycle:</p>";
                $("#results").append(data);
                locationRelatedItems(response);
              }
              

               $.get("ajax/relateditemsreuse.php?key=" + result.Id, function(response) {
                  if(response == "[]") {

                  }
                  else {
                    data = "";
                    data += "<p>Items To Reuse:</p>";
                    $("#results").append(data);
                    locationRelatedItems(response);
                  }
              });
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
    var choice = $("#category").val();
    $("#itemTableBody").empty();
    if(mysessionvar == 0) {
      if(choice == "items") {
        for (var i = 0; i < resultsArray.length; i++) {
          var resultString = "";
          resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+resultsArray[i].Name;
          $("#itemTableBody").append(resultString);
        }
      } else {
        for (var i = 0; i < resultsArray.length; i++) {
          var resultString = "";
          //If true that there is only one location, populate it. Else, 
          if(compare(resultsArray[i].Name, resultsArray)) { 
            resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+resultsArray[i].Name;
            $("#itemTableBody").append(resultString);
          }
          else {
            resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+resultsArray[i].Name+", " + resultsArray[i].Address;
            $("#itemTableBody").append(resultString);
          }
        }
      }
    }
    else {
      if(choice == "items") {
        for (var i = 0; i < resultsArray.length; i++) {
          var resultString = "";
          resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+resultsArray[i].Name+"</td><td><div><span class='glyphicon glyphicon-cog' onclick=\"cogWheel('"+resultsArray[i].Id+"','"+resultsArray[i].Name+"','"+resultsArray[i].General_Info+"','"+resultsArray[i].Notes+"','"+resultsArray[i].Image+"')\" data-toggle='modal' data-target='#editModal'></span></div></td></tr>";
          $("#itemTableBody").append(resultString);
        }
      } else {
        for (var i = 0; i < resultsArray.length; i++) {
          var resultString = "";
           if(!compare(resultsArray[i].Name, resultsArray)) { 
              resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+resultsArray[i].Name+", " + resultsArray[i].Address + "</td><td><div><span class='glyphicon glyphicon-cog' onclick=\"cogWheelLocations('"+resultsArray[i].Id+"','"+resultsArray[i].Name+"','"+resultsArray[i].Address+"','"+resultsArray[i].Phone+"','"+resultsArray[i].Website+"')\" data-toggle='modal' data-target='#editLocationModal'></span></div></td></tr>";
             $("#itemTableBody").append(resultString);
           } 
           else {
             resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>" +resultsArray[i].Name+ "</td><td><div><span class='glyphicon glyphicon-cog' onclick=\"cogWheelLocations('"+resultsArray[i].Id+"','"+resultsArray[i].Name+"','"+resultsArray[i].Address+"','"+resultsArray[i].Phone+"','"+resultsArray[i].Website+"')\" data-toggle='modal' data-target='#editLocationModal'></span></div></td></tr>";
             $("#itemTableBody").append(resultString);
           }
          
        }
      }
    }
  }

  function compare(locName, locArray) {
    var sameLocNum = 0;
    var tempLocArr = [];
    for(var i = 0; i< locArray.length; i++) {
      if (locName == locArray[i].Name) {
        sameLocNum++;
      }
    }
    if(sameLocNum > 1) {
      return false;
    }
    else {
      return true;
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
        resultString += "<a href='#' class='relatedLink' id='"+resultsArray[i].Id+"'>"+resultsArray[i].Name+"</a>";
        if (i < resultsArray.length-1) {
          resultString += ", ";
        }
      }
      $("#results").append(resultString);
   }

   $("#results").on("click", "a.relatedLink", function(){
      var choice = $("#category").val();
      var data = "";
      var id = $(this).attr('id');

      $("#results").empty();

    switch(choice){
 	   case 'items':
 	     var locationsString = "ajax/pullAllLocations.php?";
   	   $.get(locationsString, function(response) {
   	     populateList(response);
   	     var tempArr = JSON.parse(response);

   	     let resultLocation = tempArr.find(l => l.Id == id);

     	   // Collect data and append to HTML
     	   data = "<h3>"+resultLocation.Name+"</h3><img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>";
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
   	   });

   	   $("#category").val("locations");

 	     break;
 	   case 'locations':
 	     var itemsString = "ajax/pullAllItems.php?";
   	   $.get(itemsString, function(response) {
   	     populateList(response);
   	     var tempArr = JSON.parse(response);

   	     let resultItem = tempArr.find(i => i.Id == id);

     	   // Collect data and append to HTML
     	   data = "<h3>"+resultItem.Name+"</h3><img src='ajax/uploads/"+resultItem.Image_Name+"' class='center-block' alt='Placeholder Image' height='150' width='300'>";
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
   	   });

   	   $("#category").val("items");

   	   break;
 	   default:
   	   break;
    }
  });



  $("#itemTableBody").on("click", "td.closeSidebar", function(){
    $("#homeImage").hide();
    $("#sidebar").animate( {left: '25%'}, 400, function() {
      $("#expand").attr('class', 'col-sm-12');
      $("#sidebar").hide();
    });
  });



  $("#itemTableBody").on("click", "span.glyphicon.glyphicon-cog", function(){
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
  });

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
  }

  //Autosearch function works by querying each letter when it is typed. Most likely will change by storing all data in a local array instead of querying each time
  $("#searchForm").keyup(function() {
    var x = $("#searchForm").val();
    var choice = $("#category").val();
    var query = "";
    if(choice == 'items') {
      query = query + "ajax/itemlettersearch.php?key=" + x;
    }
    else {
      query = query + "ajax/locationlettersearch.php?key=" + x;
    }
    $.get(query, function(response) {
      populateList(response);
    });
  });

  $("#searchBtn").on("click", function() {
    var x = $("#searchForm").val();
    var choice = $("#category").val();
    var query = "";
    if(choice == 'items') {
      query = query + "ajax/itemlettersearch.php?key=" + x;
    }
    else {
      query = query + "ajax/locationlettersearch.php?key=" + x;
    }
    $.get(query, function(response) {
      populateList(response);
    });
  })

  $("#addDesBtn").on("click", function() {
    var newData="";

    var getNotice="";
    getNotice = getNotice + "ajax/pullNoticeInfo.php?";
    $.get(getNotice, function(response) {
      getNotice = response;
      getNotice = JSON.parse(getNotice);
      newData = "key=" + getNotice.length + "&key2=" + $("#addNoticeDes").val();
      $.ajax ({
        url: "ajax/insertIntoSidebar.php",
        type : "POST",
        cache : false,
        data : newData,
        success: function(response) {
          alert(response);
        }
      });
    });
  });

  $("#forgotPassword").on("click", function() {
    $("#loginModal").modal('hide');
  });

  //When ANYTHING is clicked, the login button disappears
  $(document).click(function() {
    $('#loginButton').hide();
  });

});
