$(document).ready(function(){
	var currentResultArray;

	// When user clickes "Search Items" button, changes #category value
	// Default value
	$('#searchItems').click(function() {
		$('#category').val('items');
		var stuff = $('#category').val();
	});

	// When user clicks "Search locations" button, changes #category value
	$('#searchLocations').click(function() {
		$('#category').val('locations');
	});

		$(".letterA").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=A", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=A", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterB").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=B", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=B", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterC").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=C", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=C", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterD").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=D", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=D", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterE").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=E", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=E", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterF").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=F", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=F", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterG").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=G", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=G", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterH").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=H", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=H", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterI").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=I", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=I", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterJ").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=J", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=J", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterK").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=K", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=K", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterL").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=L", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=L", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterM").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=M", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=M", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterN").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=N", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=N", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterO").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=O", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=O", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterP").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=P", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=P", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterQ").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=Q", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=Q", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterR").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=R", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=R", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterS").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=S", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=S", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterT").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=T", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=T", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterU").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=U", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=U", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterV").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=V", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=V", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterW").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=W", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=W", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterX").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=X", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=X", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterY").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=Y", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=Y", function(response) {
					populateList(response);
				});
			}
		});

		$(".letterZ").click(function() {
			if($('#category').val() == 'locations') {
				$.get("ajax/locationlettersearch.php?key=Z", function(response) {
					populateList(response);
				});
			} else {
				$.get("ajax/itemlettersearch.php?key=Z", function(response) {
					populateList(response);
				});
			}
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
				let resultLocation = locations.find(l => l.Name === $(this).text());
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
