<?php

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Doo-Dah - Mood Selection</title>
        <script src="./js/jquery-1.11.0.js"></script>
        <script src="./js/jquery-ui-1.10.4/ui/jquery-ui.js"></script>
        <script type="text/javascript" src="./js/HomeView.js"></script>
        <link rel="stylesheet" type="text/css" href="./css/General.css"/>
        <link rel="stylesheet" type="text/css" href="./css/HomeView.css"/>
        <link rel="stylesheet" type="text/css" href="./css/EmotionSelectionView.css"/>
    </head>

    <body>
        <div id="container">
			<div id="top-navigation">
				<div id="navigation">
					<div id="nav-list">
						<ul>
							<li class="top-level"><a href="./HomeView.php" id="home">Home</a></li>
							<li class="top-level"><a href="#" id="how" title="Take the tutorial if you are a newcomer or view help documentation.">How it works?</a></li>
							<li class="top-level"><a href="./EmotionSelection.php" id="emotions" title="Pick your current emotion to view new activities.">Emotions</a></li>
							<li class="top-level"><a href="./ActivityView.php" id="activities" title="View your recent, favorite, or trending activities.">Activities</a></li>
							<li class="top-level"><a href="#" id="account">My Account</a>
								<ul id="sub-menu">
									<li class="sub-level"><a href="./LoginView.php" id="login" title="Log in if you already have an account.">Login</a></li>
									<li class="sub-level"><a href="./RegistrationView.php" id="new-user" title="New users, register here">Sign up</a></li>
									<li class="sub-level"><a href="#" id="forgot-password" title="Forgot your password?">Forgot my password</a></li>

								</ul>
							</li>		
						</ul
					</div>
				</div>
			</div>
        </div>

        <!-- mood buttons -->
        <div class="page-content">
        	<div id="welcome-mood">
        		<h1 id="header-text">What mood are you in?</h1>
					<table>
						<tr>
							<td><div id="mbutton-confident"></div></td>
							<td><div id="mbutton-happy"></div></td>
							<td><div id="mbutton-anxious"></div></td>
						</tr>
						<tr>
							<td><div id="mbutton-afraid"></div></td>
							<td><div id="mbutton-angry"></div></td>
							<td><div id="mbutton-dread"></div></td>
						<tr>           
							<td><div id="mbutton-lonely"></div></td>
							<td><div id="mbutton-regret"></div></td>
							<td><div id="mbutton-sad"></div></td>
						</tr>
					</table>   
			</div> 
        </div>      

        <div id="footer"></div>

    </body>

</html>