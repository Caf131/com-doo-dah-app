<?php

	include("const_db.inc"); 
	
	$userName = $_POST["Username"]; 
	$oldPassword = $_POST["OldPassword"]; 
	$newPassword = $_POST["NewPassword"]; 
	
	$link = mysqli_connect($host, $username, $password, $dbname, $port);

	if (mysqli_connect_errno()) 
	{
		printf("Connect failed: %s\n", mysqli_connect_errno());
		exit();
	}
	 
	$queryString = "SELECT * FROM User WHERE UserName='".$userName."'AND Password='".$oldPassword."'"; 
	$queryUserAndPasswordMatch = mysqli_query($link, $queryString);   
		
	$numRows = mysqli_num_rows($queryUserAndPasswordMatch); 
		
	if($numRows == 0)
	{
		echo "Username and/or password is incorrect";  
		echo "<p><a href='ForgotPasswordView.php'>Try Again</a></p>";  
	}
	else
	{
		$queryUpdate = "UPDATE User SET Password='".$newPassword."'WHERE UserName='".$userName."'"; 
		$queryUpdatePassword = mysqli_query($link, $queryUpdate); 
		
		if($queryUpdatePassword)
		{
			echo "The username ".$userName." has been updated successfully"; 
			echo "<p><a href='HomeView.php'>Login</a></p>"; 
		}
		else
		{
			echo "Unable to update password"; 
		}
	}
	
	mysqli_close($link);
?>