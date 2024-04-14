<!doctype html>
<html>
	<head>
		<title>Submitted survey form</title>
		<script>
			var answers = <?php echo urldecode($_POST['answers']); ?>;
		
			console.log(answers);
		</script>
	</head>
	<body>
		<h1>Thank you for your submission!</h1>
		<p>Here are your responses: </p>
		<div id="response"></div>
	</body>