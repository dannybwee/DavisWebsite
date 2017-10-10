$(document).ready(function(){

  // Activate multiselect in add form
  $('#loc_recycle #loc_reuse').multiselect({
    nonSelectedText: 'Select expertise!',
    buttonWidth: 250,
    enableFiltering: true
  });

	var currentResultArray;

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

		$("#results").empty();

		switch(choice){
			case 'items':
				let resultItem = currentResultArray.find(i => i.Name === $(this).text());
				$("#results").append("<h3>Item</h3>");
				$("#results").append("<img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>");
				if (resultItem.Id != "") {
					idRow = "<p><strong>Id:&nbsp;</strong>"+resultItem.Id+"</p>";
					$("#results").append(idRow);
				}
				if (resultItem.Name != "") {
					nameRow = "<p><strong>Name:&nbsp;</strong>"+resultItem.Name+"</p>";
					$("#results").append(nameRow);
				}
				if (resultItem.General_Info != "") {
					general_infoRow = "<p><strong>General Info:&nbsp;</strong>"+resultItem.General_Info+"</p>";
					$("#results").append(general_infoRow);
				}
				if (resultItem.Notes != "") {
					notesRow = "<p><strong>Notes:&nbsp;</strong>"+resultItem.Notes+"</p>";
					$("#results").append(notesRow);
				}
				break;
			case 'locations':
				let resultLocation = currentResultArray.find(l => l.Name === $(this).text());
				$("#results").append("<h3>Location</h3>");
				$("#results").append("<img src='img/placeholder.png' class='center-block' alt='Placeholder Image' height='150' width='300'>");
				if (resultLocation.Id != "") {
					idRow = "<p><strong>Id:&nbsp;</strong>"+resultLocation.Id+"</p>";
					$("#results").append(idRow);
				}
				if (resultLocation.Name != "") {
					nameRow = "<p><strong>Name:&nbsp;</strong>"+resultLocation.Name+"</p>";
					$("#results").append(nameRow);
				}
				if (resultLocation.Address != "") {
					addrRow = "<p><strong>Address:&nbsp;</strong>"+resultLocation.Address+"</p>";
					$("#results").append(addrRow);
				}
				if (resultLocation.Phone != "") {
					phoneRow = "<p><strong>Contact Phone:&nbsp;</strong>"+resultLocation.Phone+"</p>";
					$("#results").append(phoneRow);
				}
				if (resultLocation.Website != "") {
					webRow = "<p><strong>Website:&nbsp;</strong>"+resultLocation.Website+"</p>";
					$("#results").append(webRow);
				}
				if (resultLocation.City != "") {
					cityRow = "<p><strong>City:&nbsp;</strong>"+resultLocation.City+"</p>";
					$("#results").append(cityRow);
				}
				if (resultLocation.State != "") {
					stateRow = "<p><strong>State:&nbsp;</strong>"+resultLocation.State+"</p>";
					$("#results").append(stateRow);
				}
				if (resultLocation.Zip != "") {
					zipRow = "<p><strong>Zip Code:&nbsp;</strong>"+resultLocation.Zip+"</p>";
					$("#results").append(zipRow);
				}
				if (resultLocation.Notes != "") {
					notesRow = "<p><strong>Notes:&nbsp;</strong>"+resultLocation.Notes+"</p>";
					$("#results").append(notesRow);
				}
				break;
			default:
				break;
		}
		$("#results").append("<hr><h3>Related Items/Locations</h3>");
	});

	// Accepts an array of strings (the search result) to fill the list
	function populateList(resultsArray) {
		var resultsArray = JSON.parse(resultsArray);
		currentResultArray = resultsArray;
		$("#itemTableBody").empty();
		for (var i = 0; i < resultsArray.length; i++) {
			var rowId = "item" + i;
			var resultString = "<tr class='itemRow' id='"+rowId+"'><td>"+resultsArray[i].Name+"</td></tr>";
			$("#itemTableBody").append(resultString);
		}
	}

	$("#closeSidebar").click(function() {
		$("#sidebar").hide();
		$("#expand").attr('class', 'col-sm-12');
	});
});
