<?php include './ajax/Header.php';?>
<!DOCTYPE html>
<html lang="en">
	<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type="text/css" href="./css/bootstrap.css" />

		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link rel="stylesheet" href="./css/bootstrap-multiselect.css" type="text/css">
		<link rel="stylesheet" href="css/styles.css">

		<!-- Latest compiled JavaScript -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

		<!-- Latest compiled JavaScript -->
    <script type="text/javascript" src="./javascript/bootstrap.js"></script>

		<script type="text/javascript" src="./javascript/bootstrap-multiselect.js"></script>

		<title>Davis Recyclopedia</title>
	</head>
	<body>
		<nav class="navbar navbar-default">
			<div class="container-fluid" id="navbar">
				<div class="navbar-header">
					<button type = "button" class = "navbar-toggle" data-toggle = "modal" data-target= "#myModal">
						Notice
					</button>
					<a class="navbar-brand" href="http://www.cityofdavis.org">
						<img id="logo" src="./img/Davis_Logo.png">
					</a>
					<!-- NOTE!!! Change this link later -->
					<a href="http://localhost/teamFusion191_Recyclopedia-master/LandingPageDev/index.php?">
						<button class="btn btn-default pull-right">Home</button>
					</a>
				</div><!--navbar-header-->

				<div class = "collapse navbar-collapse" id = "myNavbar">
					<ul class = "nav navbar-nav navbar-right" >
						<li><a href="#" class="visible-xs" data-toggle="modal" data-target="#myModal"> Notice</a></li>
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
									<button type="submit" class="btn btn-primary search-btn" data-target="#search-form" name="q">
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
							<!-- <h3>Items</h3> -->
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
						<img id="homeImage" class="img-responsive" src="./img/Davis_Home_Image.png">
						<div class="content">
							<input type="hidden" id="category" value="items" />
							<div id="results">

							</div> <!--pre-scrollable -->
						</div> <!-- col-md-6-->
					</div> <!--content -->
				</div> <!--row content -->
			</div> <!--/.col-xs-12.col-sm-9-->
		</div> <!--container-full -->

		<div class="col-xs-6 col-sm-3 hidden-xs sidenav" id="sidebar">
			<button class="btn-xs btn-primary" id="editSidebar" data-toggle = "modal" data-target= "#editSidebarModal">Add</button>
			<ul id="sidebarBullets">
				
			</ul>
		</div><!--col-xs-6 col-sm-3 sidebar-offcanvas-->

		<div class="container">
			<div class="row">
				<div class="col-xs-5"></div>
			    <div class="col-xs-4"><?php include './ajax/loginButton.php';?></div>
			    <div class="col-xs-3"></div>
			</div>
		</div>

		<!--Modal Goes Here -->
		<div class="modal fade" id="myModal" role="dialog">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Notice</h4>
					</div>
					<div class="modal-body">
						<p class="blockquote" id="demo">
							The organizations listed on these pages will be happy to accept donations of clean, working, undamaged items. Donated items that do not meet these criteria will have to be hauled to the county landfill at the expense of the organization. The cost for this additional trash takes away money that non-profits need to provide services for the community.
						</p>
						<p class="blockquote">
							Before you deliver donations, please call to confirm hours and needs.
						</p>
						<p class="blockquote">
							Please do not drop off items when facilities are closed.
						</p>
						<p class="blockquote">
							Please wrap breakable items in newspaper or other padding material. Broken items cannot be reused or sold and may injure volunteers.
						</p>
						<p class="blockquote">
							If any non-profit, charitable organization or business that accepts material for reuse or recycling has been inadvertantly left off this list, please notify the City Recycling Program by email pwweb@cityofdavis.org. Please include contact information as well as what materials are accepted for reuse or recycling. Please note that business listings should not be construed as a recommendation or endorsement by the City of Davis. The City Recycling Program reserves the right to post information on this site at their discretion.
						</p>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					</div>
				</div> <!--modal-content-->
			</div> <!-- modal-dialog -->
    	</div> <!--modal fade -->

    <!-- Add Form -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          	<div class="modal-content">
              	<div class="modal-header">
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                  <span aria-hidden="true">&times;</span>
	                </button>
                <h4 class="modal-title" id="myModalLabel">Add Item</h4>
              </div>
            <div class="modal-body">
              <form action="ajax/addItemForm.php" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="itemName">Item Name</label>
                  <input type="text" class="form-control" name="itemName" placeholder="Enter Item Name">
                </div>
                <div class="form-group">
                  <label for="generalInfo">General Information</label>
                  <textarea class="form-control" name="generalInfo" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="additionalNotes">Additional Notes</label>
                    <textarea class="form-control" name="additionalNotes" rows="3"></textarea>
                  </div>
                <div class="form-group">
                  <label for="exampleInputFile">Upload Image</label>
                  <input type="file" name="imageLocation" id="imageLocation">
                </div>
                <div class="row justify-content-around">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="sel1">Locations for Recycle:</label>
                      <select class="form-control" name="loc_recycle[]" multiple="multiple">
												<?php include("ajax\importLocRecycle.php");?>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="sel1">Locations for Reuse:</label>
                      <select class="form-control" name="loc_reuse[]" multiple="multiple">
                        <?php include("ajax\importLocReuse.php");?>
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

      <!-- Edit Form -->
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
								<form action="ajax/editItemForm.php" method="POST">
									<div hidden="true" class="form-group">
										<label for="editItemID">Item ID</label>
										<input type="text" class="form-control" id="editItemID" name="editItemID">
									</div>
		                <div class="form-group">
		                  	<label for="editItemName">Item Name</label>
		                  	<input type="text" class="form-control" id="editItemName" name="editItemName">
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
		                  	<label for="editInputImage">Upload Image</label>
		                  	<input type="file" id="editInputImage" name="editInputImage">
		                </div>
		                <div class="row justify-content-around">
		                  	<div class="col-md-6">
			                    <div class="form-group">
			                      	<label for="sel1">Locations for Recycle:</label>
			                      	<select class="form-control" id="editLoc_recycle" name="editLoc_recycle[]" multiple="multiple">
			                      	</select>
			                    </div>
		                  	</div>
		                  	<div class="col-md-6">
			                    <div class="form-group">
			                      	<label for="sel1">Locations for Reuse:</label>
			                      	<select class="form-control" id="editLoc_reuse" name="editLoc_reuse[]" multiple="multiple">
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
		                  	<button type="submit" id="addDesBtn" class="btn btn-primary pull-left">Submit</button>
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
              		<form form action="ajax/addLocationsForm.php" method="POST" enctype="multipart/form-data">
		                <div class="form-group">
		                  	<label for="editItemName">Location Name</label>
		                  	<input type="text" class="form-control required" name="locationName" placeholder="Type Location Name">
		                </div>
						<div class="form-group">
		                  	<label for="editItemName">Address</label>
		                  	<input type="text" class="form-control" name="locationAddress" placeholder="Type Location Address">
		                </div>
						<div class="form-group">
		                  	<label for="editItemName">Contact Phone</label>
		                  	<input type="text" class="form-control" name="locationPhone" placeholder="123-456-7890">
		                </div>
						<div class="form-group">
		                  	<label for="editItemName">Website</label>
		                  	<input type="text" class="form-control" name="locationWebsite" placeholder="www.website.com">
		                </div>
						<div class="col-l6">
			                    <div class="form-group">
			                      	<label for="sel1">Items for Recycling:</label>
			                      	<select class="form-control" id="Items_Recycle" multiple="multiple">
				                        <option>Select Related Items</option>
				                        <option>Option Placeholder</option>

			                      	</select>
			                    </div>
		                  	</div>
                		<br>
		                <div class="col-md-12 text-center">
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
							<form action="ajax/editLocationForm.php" method="POST">
								<div hidden="true" class="form-group">
									<label for="editLocationID">Item ID</label>
									<input type="text" class="form-control" id="editLocationID" name="editLocationID">
								</div>
									<div class="form-group">
											<label for="editLocationName">Item Name</label>
											<input type="text" class="form-control" id="editLocationName" name="editLocationName">
									</div>
									<div class="form-group">
											<label for="editLocationAddress">Address</label>
											<input class="form-control" id="editLocationAddress" name="editLocationAddress">
									</div>
									<div class="form-group">
											<label for="editLocationPhone">Phone Number</label>
											<input class="form-control" id="editLocationPhone" name="editLocationPhone">
										</div>
									<div class="form-group">
											<label for="editLocationWebsite">Website</label>
											<input class="form-control" id="editLocationWebsite" name="editLocationWebsite">
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
						<!--<form name="form" action="#" method="post">-->
							<div class="form-group">
					  			<label for="userName">Username</label>
									<input type="text" class="form-control" name="User" placeholder="Email">
							</div>
							<div class="form-group">
					  			<label for="password">Password</label>
									<input type="password" class="form-control" name="Password" placeholder="Password">
							</div>
								<a id="forgotPassword" href = "#" data-toggle="modal" data-target="#forgotPasswordModal">Forgot Password?</a>
								<br>
				  			<br>
								<button type="submit" name='my_form_submit_button' class="btn btn-default">Submit</button>				  		</form>
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
									<input type="email" class="form-control" name="User" id="user" placeholder="Email">
								</div>

							<br></br>

								<button type="submit" name="my_form_submit_button" class="btn btn-default">Submit</button>
							</form>
						</form>
					</div>
					<!--<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary">Save changes</button>
					</div>-->
				</div>
			</div>
		</div>

		<!-- This script needs to stay at the bottom. Cannot be referenced until after all objects are created -->
		<script type="text/javascript" src="./javascript/JavaScript.js"></script>
	</body>

</html>