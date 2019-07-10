<?php
    // Create a mySQL DB connection
    include 'db.php';
    ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SQL+PHP</title>
</head>
<body>
    <?php
    echo '<h1>You are successfully connected to </h1>' . $dbname;
    mysqli_close($connection);
    ?>
</body>
</html>
