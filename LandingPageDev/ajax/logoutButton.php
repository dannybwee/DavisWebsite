<?php
	if (isset($_SESSION['Id'])){
		echo "
			<form method='POST' action='./ajax/logout.php' class='pull-right'>
	      		<button type='submit' class='btn btn-default'>
	   	    		<span class='glyphicon glyphicon-log-out' aria-hidden='true'></span>
	      		</button>
	    	</form>
	    	<script>var mysessionvar = 1;</script>";;
	}
?>