<?php header('cache-control: no-cache'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <script src="main.js" defer></script>
    <title>ClearTheaters</title>
</head>

<body>
    <div class="container">

        <form action="" id="getTheaters">
            <div id="data">
                <input inputmode="numeric" pattern="[0-9]*" type="number" placeholder="# of Theaters" id="numberOfTheaters" value="">
                <button type="submit">GET THEATERS</button>
            </div>
        </form>

        <div id="theaters" class="col"></div>
    </div>
    
</body>
</html>