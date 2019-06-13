<!DOCTYPE html>
<html>
    <head>
        <title>forms</title>
    </head>
<body>
    <h1> Form Parameter List <br> </h1>
    <section>
        <?php
        $fin = $_GET["first_prod_name"];
        $fia = $_GET["first_prod_amount"];

        $sn = $_GET["sec_prod_name"];
        $sa = $_GET["sec_prod_amount"];

        $tn = $_GET["third_prod_name"];
        $ta = $_GET["third_prod_amount"];

        $fon = $_GET["foured_prod_name"];
        $foa = $_GET["foured_prod_amount"];
        

        echo "<h3>First product name: " .$fin . "</h3>";
        echo "<h3>First product amount: " .$fia . "</h3>";

        echo  "<h3>Second product name: " .$sn . "</h3>";
        echo  "<h3>Second product amount: " .$sa . "</h3>";

        echo  "<h3>Thired product name: " .$tn . "</h3>";
        echo  "<h3>Thired product amount: " .$ta . "</h3>";

        echo  "<h3>Foured product name: " .$fon . "</h3>";
        echo  "<h3>Foured product amount: " .$foa . "</h3>";
        ?>
    </section>
 
</body>
    </html>
