<?php

	include("const_db.inc"); 

	$updateUsername = $_POST["Username"];
	$newPassword = $_POST["Password"]; 
	
	$link = mysqli_connect($host, $username, $password, $dbname, $port);

	if (mysqli_connect_errno()) 
	{
		printf("Connect failed: %s\n", mysqli_connect_errno());
		exit();
	}
	 
	$queryString = "UPDATE User SET Password='".$newPassword."'WHERE UserName='".$updateUsername."'"; 
	
	$queryDeleteUser = mysqli_query($link, $queryString);   
		
	if(!$queryDeleteUser)
	{
		echo $queryString;  
	}
	else
	{
		echo "The username ".$updateUsername." has been updated successfully"; 
		echo "<p><a href='AdministratorView.php'>Return to Administrator Portal</a></p>"; 
	}
	
	mysqli_close($link);
	

?>