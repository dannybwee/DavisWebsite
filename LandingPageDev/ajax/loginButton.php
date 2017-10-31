<?php
							if (isset($_SESSION['Id'])){
					        echo
                                "<form method = 'POST' action='./ajax/logout.php'>
                                    <button type='submit' class='btn btn-default btn-sm pull-right'>
					  	            Logout
					               </button>
                                </form>";
                            } else {
                                echo "<button type='button' class='btn btn-default btn-sm pull-right' data-toggle='modal' data-target='#loginModal'>
					  	Login
					</button>";
                                    
                            }
                        ?>