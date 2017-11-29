
//Brings up the edit item form and fills in the values from the database
function cogWheel(id, name, info, notes, image) {

	$('#sel3').multiselect("destroy");
  $('#sel4').multiselect("destroy");

	var itemID = window.parent.document.getElementById('editItemID');
	itemID.value = id;
	var itemName = window.parent.document.getElementById('editItemName');
	itemName.value = name;
	var itemInfo = window.parent.document.getElementById('editGeneralInfo');
	itemInfo.value = info;
	var itemNotes = window.parent.document.getElementById('editAdditionalNotes');
	itemNotes.value = notes;
	var currentImage = window.parent.document.getElementById('currentImageFile');
	currentImage.value = image;

	window.parent.document.getElementById('originalItemName').value = name;


	getString = "ajax/itemRecycleLocations.php?key=" + id;
	$.get(getString, function(itemLocations) {
    itemLocations = JSON.parse(itemLocations);
    if(itemLocations.length > 0) {
      var x = window.parent.document.getElementById("sel3");
      var options = x.options;
      for(var i=0; i<x.length; i++) {
        for(var j=0; j<itemLocations.length; j++) {
          if(options[i].value == itemLocations[j].Name) {
            options[i].selected = true;
          }
        }
      }
      x.options = options;
      $('#sel3').multiselect({
        numberDisplayed: 1,
        maxHeight: 200
      });
    } else {
      $('#sel3 option:selected').each(function() {
        $(this).prop('selected', false);
      });
      $('#sel3').multiselect('refresh');
    }
	});

	getString = "ajax/itemReuseLocations.php?key=" + id;
	$.get(getString, function(itemLocations) {
    itemLocations = JSON.parse(itemLocations);
    if(itemLocations.length > 0) {
      var x = window.parent.document.getElementById("sel4");
      var options = x.options;
      for(var i=0; i<x.length; i++) {
        for(var j=0; j<itemLocations.length; j++) {
          if(options[i].value == itemLocations[j].Name) {
            options[i].selected = true;
          }
        }
      }
      x.options = options;
      $('#sel4').multiselect({
        numberDisplayed: 1,
        maxHeight: 200
      });
    } else {
      $('#sel4 option:selected').each(function() {
        $(this).prop('selected', false);
      });
      $('#sel4').multiselect('refresh');
    }
	});

	$("#delete").on('click', function() {
		var result = confirm("Are you sure you want to delete?");
		if(result) {
			var deleteItem = "";
			deleteItem = deleteItem + "ajax/delete_item.php?deleteItemID="+id;
			$.get(deleteItem, function(response) {
				response = JSON.parse(response);
				var message = "The following locations have no items:\n \n";
				for(var i=0; i<response.length; i++) {
					message += response[i].Name + "\n";
				}
				message += "\nItem successfully deleted";
				alert(message);
				window.location.reload();
	  	});
		}
  });
}

function deleteItem(id) {
	var result = confirm("Are you sure you want to delete?");
	if(result) {
		var deleteItem = "";
		deleteItem = deleteItem + "ajax/delete_item.php?deleteItemID="+id;
		$.get(deleteItem, function(response) {
			var message = "";
			if(response != "[]") {
				response = JSON.parse(response);
				message = "The following locations have no items:\n \n";
				for(var i=0; i<response.length; i++) {
					message += response[i].Name + "\n";
				}
			}
			message += "\nItem successfully deleted";
			alert(message);
			window.location.reload();
		});
	}
}

//Brings up the edit location form and fills out the values from the database
function cogWheelLocations(id, name, address, phone, website, city, state, zip, notes) {

	$('#sel7').multiselect("destroy");
  $('#sel8').multiselect("destroy");

	var locID = window.parent.document.getElementById('editLocationID');
	locID.value = id;
	var locName = window.parent.document.getElementById('editLocationName');
	locName.value = name;
	var locAddr = window.parent.document.getElementById('editLocationAddress');
	locAddr.value = address;
	var locPhone = window.parent.document.getElementById('editLocationPhone');
	locPhone.value = phone;
	var locWeb = window.parent.document.getElementById('editLocationWebsite');
	if(website != "null") {
		locWeb.value = website;
	} else {
    locWeb.value = "";
  }
	var locCity = window.parent.document.getElementById('editLocationCity');
	locCity.value = city;
	var locState = window.parent.document.getElementById('editLocationState');
	locState.value = state;
	var locZip = window.parent.document.getElementById('editLocationZip');
	locZip.value = zip;
	var locNotes = window.parent.document.getElementById('editLocationNotes');
	if(notes != "null") {
		locNotes.value = notes;
	} else {
    locNotes.value = "";
  }

	window.parent.document.getElementById('originalLocationName').value = name;


	getString = "ajax/itemsRecycledAtLocation.php?key=" + id;
	$.get(getString, function(itemsAtLocation) {
    itemsAtLocation = JSON.parse(itemsAtLocation);
    if(itemsAtLocation.length > 0) {
      var x = window.parent.document.getElementById("sel7");
      var options = x.options;
      for(var i=0; i<x.length; i++) {
        for(var j=0; j<itemsAtLocation.length; j++) {
          if(options[i].value == itemsAtLocation[j].Name) {
            options[i].selected = true;
          }
        }
      }
      x.options = options;
      $('#sel7').multiselect({
        numberDisplayed: 1,
        maxHeight: 200
      });
    } else {
      $('#sel7 option:selected').each(function() {
        $(this).prop('selected', false);
      });
      $('#sel7').multiselect('refresh');
    }
	});

	getString = "ajax/itemsReusedAtLocation.php?key=" + id;
	$.get(getString, function(itemsAtLocation) {
    itemsAtLocation = JSON.parse(itemsAtLocation);
    if(itemsAtLocation.length > 0) {
      var x = window.parent.document.getElementById("sel8");
      var options = x.options;
      for(var i=0; i<x.length; i++) {
        for(var j=0; j<itemsAtLocation.length; j++) {
          if(options[i].value == itemsAtLocation[j].Name) {
            options[i].selected = true;
          }
        }
      }
      x.options = options;
      $('#sel8').multiselect({
        numberDisplayed: 1,
        maxHeight: 200
      });
    } else {
      $('#sel8 option:selected').each(function() {
        $(this).prop('selected', false);
      });
      $('#sel8').multiselect('refresh');
    }
	});

	$("#deleteLocation").on('click', function() {
		var result = confirm("Are you sure you want to delete?");
		if(result) {
			var deleteLocation = "";
			deleteLocation = deleteLocation + "ajax/delete_location.php?deleteLocationID="+id;
	  	$.get(deleteLocation, function(e) {
				alert('Location deleted successfully');
				window.location.reload();
	  	});
		}
  });
}

function deleteLocation(id) {
	var result = confirm("Are you sure you want to delete?");
	if(result) {
		var deleteLocation = "";
		deleteLocation = deleteLocation + "ajax/delete_location.php?deleteLocationID="+id;
		$.get(deleteLocation, function(e) {
			alert('Location deleted successfully');
			window.location.reload();
		});
	}
}

//validates the add item form
function validateItemAdd(form) {
	var fileInput  = window.parent.document.getElementById("addItemUpload");
	var fileTesting = new RegExp(".jpg|.jpeg|.gif|.png");
	//checks if there is a file
	if(fileInput.files.length == 0) {
		alert('No image file selected \nItem successfully added');
		return true;
	}
	//checks to make sure file is a valid filetype
	if(!fileTesting.test(fileInput.files[0].name)) {
		alert('Sorry, only JPG, JPEG, PNG & GIF files are allowed.');
		return false;
	}
	//checks to make sure file is within the filesize limit
	if(fileInput.files[0].size > 1000000) {
		alert('Sorry, your file is too large. Please try to upload an image smaller than 1MB.');
		return false;
	}
	alert('Item successfully added');
	return true;
}

function validateItemEdit(form) {
	var fileInput  = window.parent.document.getElementById("editInputImage");
	var fileTesting = new RegExp(".jpg|.jpeg|.gif|.png");
	//checks if there is a file
	if(fileInput.files.length == 0) {
		alert('Item successfully edited');
		return true;
	}
	//checks to make sure file is a valid filetype
	if(!fileTesting.test(fileInput.files[0].name)) {
		alert('Sorry, only JPG, JPEG, PNG & GIF files are allowed.');
		return false;
	}
	//checks to make sure file is within the filesize limit
	if(fileInput.files[0].size > 1000000) {
		alert('Sorry, your file is too large. Please try to upload an image smaller than 1MB.');
		return false;
	}
	alert('Item successfully edited');
	return true;
}

//Checks to make sure the add location has items for either recycle or reuse
function validateLocationAdd(form) {
	var options = window.parent.document.getElementById("sel5").options;
	var recycleCount = 0;
	for(var i=0; i<options.length; i++) {
		if(options[i].selected) {
			recycleCount++;
		}
	}

	options = window.parent.document.getElementById("sel6").options;
	var reuseCount = 0;
	for(var i=0; i<options.length; i++) {
		if(options[i].selected) {
			reuseCount++;
		}
	}

	if(recycleCount > 0 || reuseCount > 0) {
		alert('Location added successfully');
		return true;
	} else {
		alert('Must have at least 1 item for recycle or 1 item for reuse');
		return false;
	}
}

//Checks to make sure the edit location has items for either recycle or reuse
function validateLocationEdit(form) {
	var options = window.parent.document.getElementById("sel7").options;
	var recycleCount = 0;
	for(var i=0; i<options.length; i++) {
		if(options[i].selected) {
			recycleCount++;
		}
	}

	options = window.parent.document.getElementById("sel8").options;
	var reuseCount = 0;
	for(var i=0; i<options.length; i++) {
		if(options[i].selected) {
			reuseCount++;
		}
	}

	if(recycleCount > 0 || reuseCount > 0) {
		alert('Location edited successfully');
		return true;
	} else {
		alert('Must have at least 1 item for recycle or 1 item for reuse');
		return false;
	}
}

function validateMassUpload(form) {
	var fileInput  = window.parent.document.getElementById("uploadDataFile");
	var fileTesting = new RegExp(".csv");
	//checks if there is a file selected
	if(fileInput.files.length == 0) {
		alert('No file selected');
		return false;
	}
	//checks to make sure file is a valid filetype
	if(!fileTesting.test(fileInput.files[0].name)) {
		alert('Sorry, only CSV files are allowed.');
		return false;
	}
	alert('Mass import file submitted successfully');
	return true;
}

$(document).ready(function(){
  var currentResultArray;
  var currentRelatedItemsArray;
  var currentRelatedLocationsArray;
  var sidebarArray;
  var sideString;
  var modalSideString;
  var loggedOn = false;
  var geocoder;
  var map;
  var infowindow;
  var marker;

  //When the page loads pull up all the items to display from the database
  var getItems = "ajax/pullAllItems.php?";
  $.get(getItems, function(response) {
    populateList(response);
  });

  //When the page loads populate the sidebar by pulling info from the database
  var getNotice = "ajax/pullNoticeInfo.php?";
  $.get(getNotice, function(response) {
    populateSidebar(response);
  });

  // Activate multiselect in add form
  $('#sel1, #sel2, #sel5, #sel6').multiselect({
    numberDisplayed: 1,
    maxHeight: 200
  });

  // When user clicks either "Search" button, changes #category value
  // and clears item/location detail div on change
  $("#searchItems, #searchLocations").click(function(){
    $("#itemTableBody").empty();
    $("#results").empty();
    $(this).parent().find('.letter').css('background-color','#ffffff');
    $(".letter").css('background-color','#ffffff');

    if($(this).attr('id') === "searchItems"){
      // $("#homeMap").hide();
      if ($(this).hasClass("active")) {
        //If this the search Items button is already active and is clicked, do nothing.
      }
      else {
        //Else, make the class active and make locations button inactive
        $(this).addClass("active");
        $("#searchLocations").removeClass("active");
      }
      $("#category").val("items");

      getString = "ajax/pullAllItems.php?";
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

      getString = "ajax/pullAllLocations.php?";
      $.get(getString, function(response) {
        populateList(response);
      });

      // CreateHomeGoogleMap("");
    }
  });

  $(".letter").click(function() {
    var getString = "";
    var letter = $(this).text();
    $(this).parent().find('.letter').css('background-color','#ffffff');
    $(this).css('background-color','#D3D3D3');
    if($('#category').val() == 'locations') {
        getString = "ajax/locationlettersearch.php?key=" + letter;
        //CreateHomeGoogleMap(letter);
    } else {
        getString = "ajax/itemlettersearch.php?key=" + letter;
    }
    $.get(getString, function(response) {
        populateList(response);

    });
  });

  $("#itemTableBody").on('click', 'td.closeSidebar', function() { //td.closeSidebar was tr.itemRow before
    var choice = $("#category").val();
    var data = "";
    $(".closeSidebar").css('background-color','#ffffff');
    $(this).css('background-color','#D3D3D3');
    $('html,body').animate({
        scrollTop: $(".second").offset().top },
        'slow');
    $("#results").empty();

    switch(choice){
      case 'items':
				var resultItem;
				for(var i=0; i<currentResultArray.length; i++) {
					if(currentResultArray[i].Name === $(this).text()) {
						resultItem = currentResultArray[i];
						CreateItemDetails(resultItem);
		        $.get("ajax/locationrelatedrecycle.php?key=" + resultItem.Id, function(response) {
		          if (response != "[]") {
		            data = "";
		            data += "<p>Locations To Recycle:</p>";
		            $("#results").append(data);
		            itemRelatedLocations(response);
		          }
		          $.get("ajax/locationrelatedreuse.php?key=" + resultItem.Id, function(response) {
		            if (response != "[]") {
		              data = "";
		              data += "<p>Locations To Reuse:</p>";
		              $("#results").append(data);
		              itemRelatedLocations(response);
		            }
		          });
		        });
					}
				}

        break;
      case 'locations':
				var resultLocation;
        //let resultLocation = currentResultArray.find(l => l.Id === $(this).closest('tr').attr('id')); //This was just $(this).attr('id')); before
				for(var i=0; i<currentResultArray.length; i++) {
					if(currentResultArray[i].Id === $(this).closest('tr').attr('id')) {
						resultLocation = currentResultArray[i];
						CreateLocationDetails(resultLocation);
		        $.get("ajax/relateditemsrecycle.php?key=" + resultLocation.Id, function(response) {
		          if(response != "[]") {
		            data = "";
		            data += "<p>Items To Recycle:</p>";
		            $("#results").append(data);
		            locationRelatedItems(response);
		          }
		          $.get("ajax/relateditemsreuse.php?key=" + resultLocation.Id, function(response) {
		            if(response != "[]") {
		              data = "";
		              data += "<p>Items To Reuse:</p>";
		              $("#results").append(data);
		              locationRelatedItems(response);
		            }
		          });
		        });
		        CreateGoogleMap(resultLocation);
					}
				}
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
          resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+resultsArray[i].Name+
            "</td><td><div><span class='glyphicon glyphicon-cog' id='cogWheel' name='cogWheel' onclick=\"cogWheel('"+resultsArray[i].Id+"','"+
            resultsArray[i].Name+"','"+resultsArray[i].General_Info+"','"+resultsArray[i].Notes+"','"+resultsArray[i].Image_Name+
            "')\" data-toggle='modal' data-target='#editModal'></span><span style='margin-left:5px;' onclick=\"deleteItem('"+
            resultsArray[i].Id+"')\" class='glyphicon glyphicon-remove'></span></div></td></tr>";
          $("#itemTableBody").append(resultString);
        }
      } else {
				emptyLocations = "";
				emptyLocations = emptyLocations + "ajax/empty_locations.php";
				$.get(emptyLocations, function(response) {
					response = JSON.parse(response);


        for (var i = 0; i < resultsArray.length; i++) {
					var textColor = "<font color='black'>";
					for(var j = 0; j < response.length; j++) {
						if(resultsArray[i].Name == response[j].Name) {
							textColor = "<font color='red'>";
						}
					}
          var resultString = "";
           if(!compare(resultsArray[i].Name, resultsArray)) {
              resultString = "<tr class='itemRow' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+textColor+resultsArray[i].Name+
              ", " + resultsArray[i].Address + "</td><td><div><span class='glyphicon glyphicon-cog' onclick=\"cogWheelLocations('"+
              resultsArray[i].Id+"','"+resultsArray[i].Name.replace(/'/g, "\\'")+"','"+resultsArray[i].Address+"','"+resultsArray[i].Phone+"','"+
              resultsArray[i].Website+"','"+resultsArray[i].City+"','"+resultsArray[i].State+"','"+resultsArray[i].Zip+"','"+resultsArray[i].Notes+"')\" data-toggle='modal' data-target='#editLocationModal'></span><span style='margin-left:5px;' onclick=\"deleteLocation('"+
              resultsArray[i].Id+"')\" class='glyphicon glyphicon-remove'></span></div></td></tr>";
             $("#itemTableBody").append(resultString);
           }
           else {
             resultString = "<tr class='itemRow' color='red' id='"+resultsArray[i].Id+"'><td class='closeSidebar'>"+textColor+resultsArray[i].Name+
             "</td><td><div><span class='glyphicon glyphicon-cog' onclick=\"cogWheelLocations('"+resultsArray[i].Id+"','"+
             resultsArray[i].Name.replace(/'/g, "\\'")+"','"+resultsArray[i].Address+"','"+resultsArray[i].Phone+"','"+resultsArray[i].Website+"','"+resultsArray[i].City+"','"+resultsArray[i].State+"','"+resultsArray[i].Zip+"','"+resultsArray[i].Notes+
             "')\" data-toggle='modal' data-target='#editLocationModal'></span><span style='margin-left:5px;' onclick=\"deleteLocation('"+
             resultsArray[i].Id+"')\" class='glyphicon glyphicon-remove'></span></div></td></tr>";
             $("#itemTableBody").append(resultString);
           }
        }
			});
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
      resultString +="<p></p><p></p>"; //To add extra spacing
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
 	      $("#searchItems").removeClass("active");
 	      $("#searchLocations").addClass("active");
   	    $.get(locationsString, function(response) {
   	      populateList(response);
   	      var tempArr = JSON.parse(response);
					var resultLocation;
   	      //let resultLocation = tempArr.find(l => l.Id == id);
					for(var i=0; i < tempArr.length; i++) {
						if(tempArr[i].Id === id) {
							resultLocation = tempArr[i];
							CreateLocationDetails(resultLocation);
								$.get("ajax/relateditemsrecycle.php?key=" + resultLocation.Id, function(response) {
								 if(response != "[]") {
									 data = "";
									 data += "<p>Items To Recycle:</p>";
									 $("#results").append(data);
									 locationRelatedItems(response);
								 }
								 $.get("ajax/relateditemsreuse.php?key=" + resultLocation.Id, function(response) {
									 if(response != "[]") {
										 data = "";
										 data += "<p>Items To Reuse:</p>";
										 $("#results").append(data);
										 locationRelatedItems(response);
									 }
								 });
								 });
							CreateGoogleMap(resultLocation);
						}
					}

   	    });
   	    $("#category").val("locations");
 	      break;
 	    case 'locations':
 	      var itemsString = "ajax/pullAllItems.php?";
 	      $("#searchItems").addClass("active");
 	      $("#searchLocations").removeClass("active");
   	    $.get(itemsString, function(response) {
   	      populateList(response);
   	      var tempArr = JSON.parse(response);
					var resultItem;
   	      //let resultItem = tempArr.find(i => i.Id == id);
					for(var i=0; i < tempArr.length; i++) {
						if(tempArr[i] === id) {
							resultItem = tempArr[i];
							CreateItemDetails(resultItem);
				      $.get("ajax/locationrelatedrecycle.php?key=" + resultItem.Id, function(response) {
				          if (response != "[]") {
				            data = "";
				            data += "<p>Locations To Recycle:</p>";
				            $("#results").append(data);
				            itemRelatedLocations(response);
				          }
				          $.get("ajax/locationrelatedreuse.php?key=" + resultItem.Id, function(response) {
				            if (response != "[]") {
				              data = "";
				              data += "<p>Locations To Reuse:</p>";
				              $("#results").append(data);
				              itemRelatedLocations(response);
				            }
				          });
				      });
						}
					}

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

       var t = "<?php if (isset($_SESSION['Id'])){ echo 'Hello';}";
       //Populates modal with notice information
       modalSideString = "<p class='blockquote'>" + sidebarArray[i].Info + " </p>";
       $("#modalBullets").append(modalSideString);
       sideString = "<li>"  + sidebarArray[i].Info + " </li>" + t;


       if(mysessionvar == 1) {
       //Populates modal with notice information
       modalSideString = "<p class='blockquote'>" + sidebarArray[i].Info + " </p>";
       $("#modalBullets").append(modalSideString);
       sideString =  "<li id='sidebar" + sidebarArray[i].Id + "' style='list-style:none'>" + "<span class='glyphicon glyphicon-cog editMe' id='" + sidebarArray[i].Id + "' data-toggle='modal' data-target='#editInfoModal'></span>" + sidebarArray[i].Info + " </li>";
        }
        $("#sidebarBullets").append(sideString);
         }
    }

  //If the notice is clicked while in admin mode, a modal appears to edit the description
    $("#sidebarBullets").on("click","span.glyphicon.glyphicon-cog.editMe", function() {

      var info = "";
      var updateData = "";

      id = $(this).attr('id');
      var param = "#sidebar" + id;
      info = $(param).text();
      $("#sidebarTextArea").val("");
      $("#sidebarTextArea").val(info);

    });

    $("#editDesBtn").on("click", function() {
        info = $("#sidebarTextArea").val();
        newData = "";
        newData = "key=" + id + "&key2=" + info;
        $.ajax ({
          url: "ajax/updateSidebarInfo.php",
          type : "POST",
          cache : false,
          data : newData,
          success: function(response) {
            alert(response);
            var getNotice2="";
            $("#sidebarBullets").html("");
            $("#modalBullets").html("");
            getNotice2 = getNotice2 + "ajax/pullNoticeInfo.php?";
            $.get(getNotice2, function(response) {
              populateSidebar(response);
            });
            // $("#editInfoModal").modal('toggle');
          }
        });
      })


    $("#delDesBtn").on("click", function() {
        newData = "";
        newData = "key=" + id;
        var result = confirm("Are you sure you want to delete?");
        if(result) {
	        $.ajax ({
	          url: "ajax/deleteSidebarInfo.php",
	          type : "POST",
	          cache : false,
	          data : newData,
	          success: function(response) {
	            alert(response);
	            var getNotice2="";
	            $("#sidebarBullets").html("");
	            $("#modalBullets").html("");
	            getNotice2 = getNotice2 + "ajax/pullNoticeInfo.php?";
	            $.get(getNotice2, function(response) {
	              populateSidebar(response);
	            });
	            // $("#editInfoModal").modal('toggle');
	          }
	        });
    	}
    })

		$("#itemName").keyup(function() {
			var x = $("#itemName").val();
			var query = "";
			query = query + "ajax/item_name_check.php?key=" + x;
			$.get(query, function(response) {
				console.log(x);
				if(response == 'match' || x == "") {
					document.getElementById("item_name_availability_result").style.color = "red";
					$('#item_name_availability_result').html("Item name not valid");
					document.getElementById("item_add_submit").disabled = true;
				} else {
					document.getElementById("item_name_availability_result").style.color = "green";
					$('#item_name_availability_result').html("Item name valid");
					document.getElementById("item_add_submit").disabled = false;
				}
			});
		});

		$("#editItemName").keyup(function() {
			var originalName = document.getElementById("originalItemName").value;
			var x = $("#editItemName").val();
			var query = "";
			query = query + "ajax/item_name_check.php?key=" + x;
			$.get(query, function(response) {
				if(response == 'match' && x != originalName || x == "") {
					document.getElementById("edit_item_name_availability_result").style.color = "red";
					$('#edit_item_name_availability_result').html("Item name not valid");
					document.getElementById("edit_item_submit").disabled = true;
				} else {
					document.getElementById("edit_item_name_availability_result").style.color = "green";
					$('#edit_item_name_availability_result').html("Item name valid");
					document.getElementById("edit_item_submit").disabled = false;
				}
			});
		});

		$("#locationName").keyup(function() {
			var x = $("#locationName").val();
			var query = "";
			query = query + "ajax/location_name_check.php?key=" + x;
			$.get(query, function(response) {
				if(response == 'match' || x == "") {
					document.getElementById("location_name_availability_result").style.color = "red";
					$('#location_name_availability_result').html("Location name not valid");
					document.getElementById("add_location_submit").disabled = true;
				} else {
					document.getElementById("location_name_availability_result").style.color = "green";
					$('#location_name_availability_result').html("Location name valid");
					document.getElementById("add_location_submit").disabled = false;
				}
			});
		});

		$("#editLocationName").keyup(function() {
			var originalName = document.getElementById("originalLocationName").value;
			var x = $("#editLocationName").val();
			var query = "";
			query = query + "ajax/location_name_check.php?key=" + x;
			$.get(query, function(response) {
				if(response == 'match' && x != originalName || x == "") {
					document.getElementById("edit_location_name_availability_result").style.color = "red";
					$('#edit_location_name_availability_result').html("Location name not valid");
					document.getElementById("edit_location_submit").disabled = true;
				} else {
					document.getElementById("edit_location_name_availability_result").style.color = "green";
					$('#edit_location_name_availability_result').html("Location name valid");
					document.getElementById("edit_location_submit").disabled = false;
				}
			});
		});

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
          var getNotice2="";
          $("#sidebarBullets").html("");
          $("#modalBullets").html("");
          getNotice2 = getNotice2 + "ajax/pullNoticeInfo.php?";
          $.get(getNotice2, function(response) {
            populateSidebar(response);
          });
        }
      });
    });
  });

  //When ANYTHING is clicked, the login button disappears
  $(document).click(function() {
    $('#loginButton').hide();
  });

  function CreateItemDetails(resultItem){
    var data = "<h3>"+resultItem.Name+"</h3>";
    if (resultItem.Image_Name)
      data += "<img src='ajax/uploads/"+resultItem.Image_Name+"' class='center-block' alt='Placeholder Image' height='300' width='500'>";
    else
      data += "<img src='ajax/uploads/placeholder.png' class='center-block' alt='Placeholder Image' height='300' width='500'>";
    if (resultItem.Name && resultItem.Name != "null")
      data += "<p><strong>Name:&nbsp;</strong>"+resultItem.Name+"</p>";
    if (resultItem.General_Info && resultItem.General_Info != "null")
      data += "<p><strong>General Info:&nbsp;</strong>"+resultItem.General_Info+"</p>";
    if (resultItem.Notes && resultItem.Notes != "null")
      data += "<p><strong>Notes:&nbsp;</strong>"+resultItem.Notes+"</p>";
    // data += "<hr><h3>Related Items/Locations</h3>";
    $("#results").append(data);
  }

  function CreateLocationDetails(resultLocation){
    var data = "<h3>"+resultLocation.Name+"</h3>";
    data += "<div id='map' style='height:400px;width:100%;'></div>";
    if (resultLocation.Name && resultLocation.Name != "null")
      data += "<p><strong>Name:&nbsp;</strong>"+resultLocation.Name+"</p>";
    if (resultLocation.Address && resultLocation.Address != "null")
      data += "<p><strong>Address:&nbsp;</strong>"+resultLocation.Address+"</p>";
    if (resultLocation.Phone && resultLocation.Phone != "null")
      data += "<p><strong>Contact Phone:&nbsp;</strong>"+resultLocation.Phone+"</p>";
    if (resultLocation.Website && resultLocation.Website != "null")
      data += "<p><strong>Website:&nbsp;</strong><a href='http://"+resultLocation.Website+"' target='_blank'>"+resultLocation.Website+"</a></p>";
    if (resultLocation.City && resultLocation.City != "null")
      data += "<p><strong>City:&nbsp;</strong>"+resultLocation.City+"</p>";
    if (resultLocation.State && resultLocation.State != "null")
      data += "<p><strong>State:&nbsp;</strong>"+resultLocation.State+"</p>";
    if (resultLocation.Zip && resultLocation.Zip != "null")
      data += "<p><strong>Zip Code:&nbsp;</strong>"+resultLocation.Zip+"</p>";
    if (resultLocation.Notes && resultLocation.Notes != "null")
      data += "<p><strong>Notes:&nbsp;</strong>"+resultLocation.Notes+"</p>";
    // data += "<hr><h3>Related Items/Locations</h3>";
    $("#results").append(data);
  }

  function CreateGoogleMap(resultLocation){
    $("#homeImage").hide();
    // $("#homeMap").hide();
    var addressString = "";
    if (resultLocation.Address == null || resultLocation.Address == "") {
      addressString += "Davis, CA";
    }
    else {
      addressString += resultLocation.Address+", "+resultLocation.City+", "+resultLocation.State+", "+resultLocation.Zip;
    }
    var contentString =
      '<div id="content">'+
        '<div id="siteNotice"></div>'+
        '<h1 id="firstHeading" class="firstHeading">'+resultLocation.Name+'</h1>'+
        '<div id="bodyContent">';
    if (resultLocation.Notes != null && resultLocation.Notes != "null" && resultLocation.Notes != "")
      contentString += '<p>'+resultLocation.Notes+'</p>';
    if (resultLocation.Phone != null && resultLocation.Phone != "null" && resultLocation.Phone != "")
      contentString += '<p>'+resultLocation.Phone+'</p>';
    if (resultLocation.Website != null && resultLocation.Website != "null" && resultLocation.Website != "")
      contentString += '<a href="http://'+resultLocation.Website+'">'+resultLocation.Website+'</a>';
    contentString += '</div></div>';

    infowindow = new google.maps.InfoWindow({ content: contentString });

    geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': addressString}, function(results, status) {
      if (status === 'OK') {
        var mapOptions = {
          zoom: 14,
          center: results[0].geometry.location
        }
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      } else if(status === 'ZERO_RESULTS') {
        var dLocation = new google.maps.LatLng(38.544907, -121.740517); // Davis, CA
        var mapOptions = {
          zoom: 13,
          center: dLocation
        }
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  // function CreateHomeGoogleMap(key){
  //   $("#homeImage").hide();
  //   $("#homeMap").show();
  //   var getLocations = "ajax/pullTopFiveLocations.php?key=" + key;
  //   $.get(getLocations, function(response) {
  //     resultLocations = JSON.parse(response);
  //     map = new google.maps.Map(document.getElementById('homeMap'), {
  //       zoom: 10,
  //       center: new google.maps.LatLng(38.544907, -121.740517),
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     });
  //     geocoder = new google.maps.Geocoder();

  //     for (i = 0; i < resultLocations.length; i++) {
  //       if (resultLocations[i].Address == null || resultLocations[i].City == null || resultLocations[i].State == null || resultLocations[i].Zip == null)
  //         continue;
  //       var addressString = resultLocations[i].Address+", "+resultLocations[i].City+", "+resultLocations[i].State+", "+resultLocations[i].Zip;
  //       console.log(addressString);
  //       // var contentString =
  //       //   '<div id="content">'+
  //       //     '<div id="siteNotice"></div>'+
  //       //     '<h1 id="firstHeading" class="firstHeading">'+resultLocations[i].Name+'</h1>'+
  //       //     '<div id="bodyContent">';
  //       // if (resultLocations[i].Notes != null)
  //       //   contentString += '<p>'+resultLocations[i].Notes+'</p>';
  //       // if (resultLocations[i].Notes != null)
  //       //   contentString += '<p>'+resultLocations[i].Phone+'</p>';
  //       // if (resultLocations[i].Notes != null)
  //       //   contentString += '<a href="'+resultLocations[i].Website+'">'+resultLocations[i].Website+'</a>';
  //       // contentString += '</div></div>';

  //       // console.log(addressString);
  //       // console.log(contentString);

  //       // infowindow = new google.maps.InfoWindow({ content: contentString });

  //       // console.log(infowindow);

  //       geocoder.geocode({'address': addressString}, function(results, status) {
  //         if (status === 'OK') {
  //           marker = new google.maps.Marker({
  //             map: map,
  //             position: results[0].geometry.location
  //           });

  //           // marker.addListener('click', function() {
  //           //   infowindow.open(map, marker);
  //           // });
  //         } else {
  //           alert('Geocode was not successful for the following reason: ' + status);
  //         }
  //       });
  //     }
  //   });
  // }

  function deleteItem(id) {
      var deleteItem = "ajax/delete_item.php?deleteItemID="+id;
      $.get(deleteItem, function(e) {
        window.location.reload();
      });
  }

  function deleteLocation(id) {
    var deleteLocation = "ajax/delete_location.php?deleteLocationID="+id;
    $.get(deleteLocation, function(e) {
      window.location.reload();
    });
  }

  // Disable ENTER key in search input
  $("#searchForm").keypress(function(e) {
    //Enter key
    if (e.which == 13) {
      return false;
    }
  });
});
