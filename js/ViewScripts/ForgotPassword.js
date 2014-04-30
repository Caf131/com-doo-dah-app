$(document).ready(function () {

	var btnCancel = $("#btnCancel"); 
	
	var btnCancel_click = function ()
	{
		window.location = "HomeView.php"; 
	}; 
	
	btnCancel.click(btnCancel_click); 
}); 