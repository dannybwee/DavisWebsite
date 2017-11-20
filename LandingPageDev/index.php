<!DOCTYPE html>
<?php include './ajax/Header.php';?>
<html lang="en">
	<head>
    	<meta charset="UTF-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="./css/bootstrap.css" />

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="./css/bootstrap-multiselect.css" type="text/css">
		<link rel="stylesheet" href="css/styles.css">

		<title>Davis Recyclopedia</title>
	</head>
	<body>
		<nav class="navbar navbar-default">
			<div class="container-fluid" id="navbar">
				<div class="navbar-header">
					<button type = "button" class = "navbar-toggle" data-toggle = "modal" data-target= "#noticeModal">
						Notice
					</button>
					<a class="navbar-brand" href="http://www.cityofdavis.org">
						<img id="logo" src="./img/Davis_Logo.png">
					</a>
					<!-- NOTE!!! Change this link later -->
					<a href="http://localhost/teamFusion191_Recyclopedia-master/LandingPageDev/index.php?">
						<button class="btn btn-default pull-right">Recyclopedia Home</button>
					</a>
					<?php include './ajax/logoutButton.php';?>
					<?php include './ajax/changePwButton.php';?>
				</div><!--navbar-header-->

				<div class = "collapse navbar-collapse" id = "myNavbar">
					<ul class = "nav navbar-nav navbar-right" >
						<li><a href="#" class="visible-xs" data-toggle="modal" data-target="#noticeModal">Notice</a></li>
					</ul>
				</div>
			</div><!--container-fluid-->
		</nav><!--navbar navbar-default-->

		<div class="container-full"> <!--Main Content will be here-->
			<div class="col-xs-12 col-sm-9" id="expand">
				<div class="row content">
					<div class="panel panel-default">
						<div class="panel-body">
							<div class="btn-toolbar" role="group">
								<div class="btn-group">
									<button type="button" class="btn btn-default active" id="searchItems">Search Items</button>
				                	<button type="button" class="btn btn-default" id="searchLocations">Search Locations</button>
								</div>
								<?php include './ajax/Editbuttons.php';?>
							</div> <!--btn-group-->
						</div> <!--panel-body-->
					</div><!--panel panel-default-->

					<div class="col-xs-4">
						<form id="search-form" class="form-inline" role="form" method="post" action="//www.google.com/search" target="_blank">
							<div class="input-group">
								<input type="text" id="searchForm" class="form-control search-form" placeholder="Enter text here...">
								<span class="input-group-btn">
									<button id="searchBtn" type="button" class="btn btn-primary search-btn">
										<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
									</button>
								</span>
							</div>
						</form>

						<p></p>

						<strong>
							<ul class="list-inline">
								<li class="letter">A</li>
								<li class="letter">B</li>
								<li class="letter">C</li>
								<li class="letter">D</li>
								<li class="letter">E</li>
								<li class="letter">F</li>
								<li class="letter">G</li>
								<li class="letter">H</li>
								<li class="letter">I</li>
								<li class="letter">J</li>
								<li class="letter">K</li>
								<li class="letter">L</li>
								<li class="letter">M</li>
								<li class="letter">N</li>
								<li class="letter">O</li>
								<li class="letter">P</li>
								<li class="letter">Q</li>
								<li class="letter">R</li>
								<li class="letter">S</li>
								<li class="letter">T</li>
								<li class="letter">U</li>
								<li class="letter">V</li>
								<li class="letter">W</li>
								<li class="letter">X</li>
								<li class="letter">Y</li>
								<li class="letter">Z</li>
							</ul>
						</strong>

						<hr>

						<div class="itemsDiv">
							<div class ="pre-scrollable" id="itemList">
								<div> <!--here for spacing -->
									<table class="table" id="tab">
										<tbody id="itemTableBody"></tbody>
									</table>
								</div> <!-- spacing div -->
							</div> <!-- pre-scrollable -->
						</div> <!--row -->
					</div>
					<div class="col-xs-8">
						<img id="homeImage" class="img-responsive" src="./img/Davis_Home_Image.png" style="margin-left:auto;margin-right:auto;">
						<!-- <div id="homeMap" style="height:400px;width:100%;display:none;"></div> -->
						<div class="content">
							<input type="hidden" id="category" value="items" />
							<div id="results"></div> <!--pre-scrollable -->
						</div> <!-- col-md-6-->
					</div> <!--content -->
				</div> <!--row content -->
			</div> <!--/.col-xs-12.col-sm-9-->
		</div> <!--container-full -->
		<div class="col-xs-6 col-sm-3 hidden-xs sidenav" id="sidebar">
			<?php include './ajax/addNotification.php';?>
			<ul id = "sidebarBullets"></ul>
		</div><!--col-xs-6 col-sm-3 sidebar-offcanvas-->

		<div class="container">
			<div class="row">
				<div class="col-xs-12 text-center">
			    	<?php include './ajax/loginButton.php';?>
			    </div>
			</div>
		</div>

		<!-- Notice -->
		<div class="modal fade" id="noticeModal" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Notice</h4>
					</div>
					<div class="modal-body" id="modalBullets">

					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div> <!--modal-content-->
			</div> <!-- modal-dialog -->
    	</div> <!--modal fade -->

		<!-- Add Item Form -->
		<div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="addModalLabel">Add Item</h4>
					</div>
					<div class="modal-body">
						<form action="ajax/addItemForm.php" method="POST" id="add_item_form" onsubmit="return validateItemAdd(this)" enctype="multipart/form-data">
							<div class="form-group">
								<label for="itemName">Item Name</label>
								<input type="text" class="form-control" name="itemName" id="itemName" placeholder="Enter Item Name" required>
							</div>
							<div class="form-group">
								<label for="generalInfo">General Information</label>
								<textarea class="form-control" name="generalInfo" id="generalInfo" rows="3"></textarea>
							</div>
							<div class="form-group">
								<label for="additionalNotes">Additional Notes</label>
								<textarea class="form-control" name="additionalNotes" id="additionalNotes" rows="3"></textarea>
							</div>
							<div class="form-group">
								<label for="addItemUpload">Upload Image</label>
								<input type="file" name="addItemUpload" id="addItemUpload" accept=".gif, .png, .jpg, .jpeg">
							</div>
							<div class="row justify-content-around">
								<div class="col-md-6">
									<div class="form-group">
										<label for="sel1">Locations for Recycle:</label>
										<select class="form-control" name="loc_recycle[]" id="sel1" multiple="multiple">
											<?php include("./ajax/importLocRecycle.php");?>
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="sel2">Locations for Reuse:</label>
										<select class="form-control" name="loc_reuse[]" id="sel2" multiple="multiple">
											<?php include("./ajax/importLocReuse.php");?>
										</select>
									</div>
								</div>
							</div>
							<br/>
							<div class="col-md-12 text-center">
								<button type="submit" class="btn btn-primary">Submit</button>
							</div>
						</form>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>

      	<!-- Edit Item Form -->
	    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel">
	        <div class="modal-dialog" role="document">
	          	<div class="modal-content">
	              	<div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		                  	<span aria-hidden="true">&times;</span>
		                </button>
	                	<h4 class="modal-title" id="editModalLabel">Edit Item</h4>
	              	</div>
	            	<div class="modal-body">
						<form action="ajax/editItemForm.php" method="POST" onsubmit="return validateItemEdit(this)" enctype="multipart/form-data">
							<div hidden="true" class="form-group">
								<label for="editItemID">Item ID</label>
								<input type="text" class="form-control" id="editItemID" name="editItemID">
							</div>
			                <div class="form-group">
			                  	<label for="editItemName">Item Name</label>
			                  	<input type="text" class="form-control" id="editItemName" name="editItemName" required>
			                </div>
			                <div class="form-group">
			                  	<label for="editGeneralInfo">General Information</label>
			                  	<textarea class="form-control" id="editGeneralInfo" name="editGeneralInfo" rows="3"></textarea>
			                </div>
			                <div class="form-group">
			                    <label for="editAdditionalNotes">Additional Notes</label>
			                    <textarea class="form-control" id="editAdditionalNotes" name="editAdditionalNotes" rows="3"></textarea>
		                  	</div>
			                <div class="form-group">
													<label for="currentImageFile">Current Image</label>
													<input type="text" class="form-control" id="currentImageFile" name="currentImageFile" disabled=true>
											</div>
											<div>
			                  	<label for="editInputImage">Upload New Image</label>
			                  	<input type="file" id="editInputImage" name="editInputImage" accept=".gif, .png, .jpg, .jpeg">
			                </div>
			                <div class="row justify-content-around">
			                  	<div class="col-md-6">
				                    <div class="form-group">
				                      	<label for="sel3">Locations for Recycle:</label>
				                      	<select class="form-control" id="sel3" name="editLoc_recycle[]" multiple="multiple">
																	<?php include("./ajax/importLocRecycle.php");?>
																</select>
				                    </div>
			                  	</div>
			                  	<div class="col-md-6">
				                    <div class="form-group">
				                      	<label for="sel4">Locations for Reuse:</label>
				                      	<select class="form-control" id="sel4" name="editLoc_reuse[]" multiple="multiple">
																	<?php include("./ajax/importLocRecycle.php");?>
																</select>
				                    </div>
			                  	</div>
			                </div>
	                		<br>
			                <div class="col-md-12 text-center">
			                  	<button type="submit" class="btn btn-primary pull-left">Submit</button>
			                  	<button type="button" class="btn btn-danger pull-right" id="delete">Delete</button>
			                </div>
	              		</form>
	              		<div class="clearfix"></div>
	            	</div>
	          	</div>
	        </div>
	  	</div>

	  	<!-- Add to Sidebar Modal -->
	  	<div class="modal fade" id="editSidebarModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel">
	        <div class="modal-dialog" role="document">
	          	<div class="modal-content">
	              	<div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                  		<span aria-hidden="true">&times;</span>
		                </button>
	                	<h4 class="modal-title" id="editModalLabel">Edit Sidebar</h4>
	              	</div>
	            	<div class="modal-body">
	              		<form>
			                <div class="form-group">
			                  	<label for="addDescription">Add Description</label>
			                  	<textarea class="form-control" id="addNoticeDes" rows="6" placeholder="Enter New Description"></textarea>
			                </div>
	                		<br>
			                <div class="col-md-12 text-center">
			                  	<button type="button" id="addDesBtn" class="btn btn-primary pull-left">Submit</button>
			                </div>
	              		</form>
	              		<div class="clearfix"></div>
	            	</div>
	          	</div>
	        </div>
	  	</div>

	  	<!-- Edit Sidebar Description Modal -->
	  	<div class="modal fade" id="editInfoModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel">
	        <div class="modal-dialog" role="document">
	          	<div class="modal-content">
	              	<div class="modal-header">
		                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                  		<span aria-hidden="true">&times;</span>
		                </button>
	                	<h4 class="modal-title" id="editModalLabel">Edit Sidebar</h4>
	              	</div>
	            	<div class="modal-body">
	              		<form>
			                <div class="form-group">
			                  	<label for="addDescription">Edit Description</label>
			                  	<textarea class="form-control" id="sidebarTextArea" rows="6"></textarea>
			                </div>
	                		<br>
			                <div class="col-md-12 text-center">
			                  	<button type="button" id="editDesBtn" class="btn btn-primary pull-left">Submit</button>
			                  	<button type="button" id="delDesBtn"  class="btn btn-danger pull-right">Delete</button>
			                </div>
	              		</form>
	              		<div class="clearfix"></div>
	            	</div>
	          	</div>
	        </div>
	  	</div>
	  	
		<!-- Add Location Modal -->
	    <div class="modal fade" id="addLocationModal" tabindex="-1" role="dialog" aria-labelledby="LocationModalLabel">
	        <div class="modal-dialog" role="document">
	          	<div class="modal-content">
	              	<div class="modal-header">
	                	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                  		<span aria-hidden="true">&times;</span>
		                </button>
	                	<h4 class="modal-title" id="addLocationLabel">Add Location</h4>
	              	</div>
	            	<div class="modal-body">
	              		<form form action="ajax/addLocationsForm.php" method="POST" onsubmit="return validateLocationAdd(this)" enctype="multipart/form-data" >
			                <div class="form-group">
			                  	<label for="editItemName">Location Name</label>
			                  	<input type="text" class="form-control required" name="locationName" placeholder="Type Location Name" required />
			                </div>
							<div class="form-group">
			                  	<label for="editItemName">Address</label>
			                  	<input type="text" class="form-control" name="locationAddress" placeholder="Type Location Address" />
			                </div>
							<div class="form-group">
			                  	<label for="editItemName">Contact Phone</label>
			                  	<input type="tel" class="form-control" name="locationPhone" placeholder="1234567890" />
			                </div>
							<div class="form-group">
			                  	<label for="editItemName">Website</label>
			                  	<input type="url" class="form-control" name="locationWebsite" placeholder="www.website.com" />
		        			</div>
							<div class="form-group">
			                  	<label for="editItemName">City</label>
			                  	<input type="text" class="form-control" name="locationCity" placeholder="Davis" required />
		        			</div>
							<div class="form-group">
			                  	<label for="editItemName">State</label>
			                  	<input type="text" class="form-control" name="locationState" placeholder="CA" required />
		        			</div>
							<div class="form-group">
			                  	<label for="editItemName">ZIP Code</label>
			                  	<input type="number" class="form-control" name="locationZip" placeholder="95616" required />
		        			</div>
							<div class="form-group">
								<label for="additionalNotes">Additional Notes</label>
								<textarea class="form-control" name="locationNotes" rows="3"></textarea>
							</div>
							<div class="row justify-content-around">
								<div class="col-md-6">
									<div class="form-group">
											<label for="sel5">Items for Recycle:</label>
											<select class="form-control" name="item_recycle[]" id="sel5" multiple="multiple">
												<?php include("./ajax/importItems.php");?>
											</select>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label for="sel6">Items for Reuse:</label>
											<select class="form-control" name="item_reuse[]" id="sel6" multiple="multiple">
												<?php include("./ajax/importItems.php");?>
											</select>
										</div>
									</div>
								</div>
								<button type="submit" class="btn btn-primary">Submit</button>
							</div>
              			</form>
              			<div class="clearfix"></div>
            		</div>
          		</div>
        	</div>
  		</div>

		<!-- Edit Location Form -->
		<div class="modal fade" id="editLocationModal" tabindex="-1" role="dialog" aria-labelledby="editLocationModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="editLocationModalLabel">Edit Location</h4>
					</div>
					<div class="modal-body">
						<form action="ajax/editLocationForm.php" method="POST" onsubmit="return validateLocationEdit(this);">
							<div hidden="true" class="form-group">
								<label for="editLocationID">Item ID</label>
								<input type="text" class="form-control" id="editLocationID" name="editLocationID" />
							</div>
							<div class="form-group">
								<label for="editLocationName">Location Name</label>
								<input type="text" class="form-control" id="editLocationName" name="editLocationName" required />
							</div>
							<div class="form-group">
								<label for="editLocationAddress">Address</label>
								<input class="form-control" id="editLocationAddress" name="editLocationAddress" />
							</div>
							<div class="form-group">
								<label for="editLocationPhone">Phone Number</label>
								<input type="tel" class="form-control" id="editLocationPhone" name="editLocationPhone" />
							</div>
							<div class="form-group">
								<label for="editLocationWebsite">Website</label>
								<input type="url" class="form-control" id="editLocationWebsite" name="editLocationWebsite" />
							</div>
							<div class="form-group">
								<label for="editLocationCity">City</label>
								<input type="text" class="form-control" id="editLocationCity" name="editLocationCity" required />
							</div>
							<div class="form-group">
								<label for="editLocationState">State</label>
								<input type="text" class="form-control" id="editLocationState" name="editLocationState" required />
							</div>
							<div class="form-group">
								<label for="editLocationZip">ZIP Code</label>
								<input type="number" class="form-control" id="editLocationZip" name="editLocationZip" required />
							</div>
							<div class="form-group">
								<label for="editLocationNotes">Additional Notes</label>
								<textarea class="form-control" id="editLocationNotes" name="editLocationNotes" rows="3"></textarea>
							</div>
							<div class="row justify-content-around">
								<div class="col-md-6">
									<div class="form-group" id="edit_rec_items">
										<label for="sel7">Items for Recycle:</label>
										<select class="form-control" id="sel7" name="editItem_recycle[]" multiple="multiple">
											<?php include("./ajax/importItems.php");?>
										</select>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="sel8">Items for Reuse:</label>
										<select class="form-control" id="sel8" name="editItem_reuse[]" multiple="multiple">
											<?php include("./ajax/importItems.php");?>
										</select>
									</div>
								</div>
							</div>
							<br>
							<div class="col-md-12 text-center">
								<button type="submit" class="btn btn-primary pull-left">Submit</button>
								<button type="button" class="btn btn-danger pull-right" id="deleteLocation">Delete</button>
							</div>
						</form>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>

      	<!-- Login Modal -->
		<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel">
		  	<div class="modal-dialog" role="document">
				<div class="modal-content">
			  		<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title" id="loginModalLabel">Login</h4>
			  		</div>
			  		<div class="modal-body">
						<form name="form" action="./ajax/login.php" method="post">
							<div class="form-group">
					  			<label for="userName">Username</label>
									<input type="email" class="form-control" name="User" placeholder="Email" required>
							</div>
							<div class="form-group">
					  			<label for="password">Password</label>
									<input type="password" class="form-control" name="Password" placeholder="Password" required>
							</div>
							<a id="forgotPassword" href = "#" data-toggle="modal" data-target="#forgotPasswordModal">Forgot Password?</a>
							<br>
			  				<br>
							<button type="submit" name='my_form_submit_button' class="btn btn-default">Submit</button>
						</form>
			  		</div>
				</div>
		  	</div>
		</div>

		<!-- Forgot Password Modal -->
		<div class="modal fade" id="forgotPasswordModal" tabindex="-1" role="dialog" aria-labelledby="forgotPasswordModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="forgotPasswordModalLabel">Forgot Password</h4>
					</div>
					<div class="modal-body">
						<form name="form" action="forgotPassword.php" method="post">
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" name="User" id="user" placeholder="Email" required>
							</div>
							<br></br>
							<button type="submit" name="my_form_submit_button" class="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>

		<!-- Mass Upload Modal -->
		<div class="modal fade" id="massUploadModal" tabindex="-1" role="dialog" aria-labelledby="massUploadModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="massUploadModalLabel">Mass Upload</h4>
					</div>
					<div class="modal-body">
						<form action="./ajax/upload.php" method="POST" enctype="multipart/form-data" onsubmit="return validateMassUpload(this)">
							<div class="form-group">
								Download Template for Mass Upload <a href="./csv/item_template.xlsx" download>Here</a>
							</div>
							<div class="form-group">
								<input type="file" name="uploadDataFile" id="uploadDataFile" accept=".csv">
							</div>
							<br/>
							<div class="col-md-12 text-center">
								<button type="submit" class="btn btn-primary">Submit</button>
							</div>
						</form>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>

		<!-- Change Password Modal -->
		<div class="modal fade" id="changePwModal" tabindex="-1" role="dialog" aria-labelledby="changePwModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 class="modal-title" id="changePwModalLabel">Change Password</h4>
					</div>
					<div class="modal-body">
						<form name="form" action="./ajax/change.php" method="POST">
							<div class="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" class="form-control" name="changePwUser" id="changePwUser" placeholder="Email">
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" class="form-control" name="changePwPassword" id="changePwPassword" placeholder="Password">
							</div>
							<div class="form-group">
								<label for="newPass">New Password</label>
								<input type="password" class="form-control" name="newPassword" id="newPassword" placeholder="Password">
							</div>
							<div class="form-group">
								<label for="exampleInputPassword1">Confirm Password</label>
								<input type="password" class="form-control" name="newPasswordConfirm" id="newPasswordConfirm" placeholder="Password">
							</div>
							<br></br>
							<button type="submit" name="my_form_submit_button" class="btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    	<script type="text/javascript" src="./javascript/bootstrap.js"></script>
		<script type="text/javascript" src="./javascript/bootstrap-multiselect.js"></script>
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA1mxxfMHA4p19crtioRl8WPlRkrd4jZus"></script>
		<script type="text/javascript" src="./javascript/JavaScript.js"></script>
	</body>
</html>
