<?php
    $errorMsg = '';

    if(isset($_POST['password']) AND isset($_POST['userEmail'])) {
        $userEmail = $_POST['userEmail'];
        $password = $_POST['password'];

        include 'db.php';

        $query = 'SELECT id FROM tb_users_200 WHERE email = "' . $userEmail . '" AND password = "' . $password . '";';

        // DEBUG:
        // echo $query;

        $result = mysqli_query($connection, $query);
        if(!$result->num_rows) {
            $errorMsg = 'Invalid username or password';
        } else {
            mysqli_free_result($result);
            mysqli_close($connection);
            header('Location: index.php');
        }
    }

    ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"


          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SQL+PHP</title>

    <form action="index3.php" method="post">
        <label for="userEmail">Email:</label><input type="email" value="" id="userEmail" name="userEmail"> <br> <br>
        <label for="password">Password:</label><input type="password" value="" id="password" name="password"> <br> <br>
        <div class="error"><? echo $errorMsg ?></div>
        <input type="submit" value="LOGIN">
    </form>


</head>
<body>

</body>
</html>
