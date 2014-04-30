<?php

?>

<!DOCTYPE html>
<html>
	<head>
		<title>Doo-Dah - Forgot Password</title>
		<script src="js/jquery-1.11.0.js"></script>
		<script src="js/ViewScripts/ForgotPassword.js"></script>
		<link rel="stylesheet" type="text/css" href="css/General.css"/>
		<link rel="stylesheet" type="text/css" href="css/ForgotPassword.css"/>
	</head>

	<body>
		<div class="page-content">
			<div id="welcome">
				<h1>Forgot your password?</h1>
					<div class="pnl-form-container">
						<form name='input' action='ForgotPassword.php' method='post'>
							<label class="reg-form-label">Username: <input type="text" name="Username" class="reg-form-input"/></label>
							<label class="reg-form-label">Old Password: <input type="password" name="OldPassword" class="reg-form-input"/></label>
							<label class="reg-form-label">New Password: <input type="password" name="NewPassword" class="reg-form-input"/></label>
							<input type="submit" value="Change Password"/>
						</form>	 
						<button id="btnCancel">Cancel</button>
					</div>		
			</div>
		</div>
		<div id="footer" class="footer">
			<p>Copyright &#169; 2014 Doo-Dah, LLC</p>
		</div>

	</body>

</html>