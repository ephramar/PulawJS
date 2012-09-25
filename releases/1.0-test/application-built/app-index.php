<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>
			Bazaar Mobile Application
		</title>
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.1.0/jquery.mobile-1.1.0.min.css" />
		<link rel="stylesheet" href="/wp-content/themes/bazaar/mobile/public/css/style.css" />
		<script data-main="/wp-content/themes/bazaar/mobile/bootstrap/main.js" src="/wp-content/themes/bazaar/mobile/bootstrap/require.js"></script>
	</head>
	<body>
		<div class="firstloadpreloader">
			<span class="preloader"></span>
			<h1>Tracking your location</h1>
			<h3>Please Wait</h3>
		</div>
		<div id="errorLocationMsg" style="display:none;">
			<div class="ui-body ui-body-e">
				<h2>Cannot to get your location this time.</h2>
				<p>
					<a data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="e" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-hover-e ui-btn-up-e"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Set my Location</span></span></a>
					<a href="http://bazaar.me" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="e" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-hover-e ui-btn-up-e"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Try Again</span></span></a>
					<a href="about:blank" data-role="button" data-corners="true" data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="e" class="ui-btn ui-shadow ui-btn-corner-all ui-btn-hover-e ui-btn-up-e"><span class="ui-btn-inner ui-btn-corner-all"><span class="ui-btn-text">Quit</span></span></a>
				</p>
			</div>
		</div>
	</body>
</html>