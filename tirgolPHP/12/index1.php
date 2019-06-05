<!DOCTYPE html>
<html>
    <head>
        <title>forms</title>
        <link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3
/css/bootstrap.min.css"
integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdE
fwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
    </head>
<body>
    <h1> Form Parameter List <br> </h1>
    <section>

    <table>
        <thead>
            <tr>

        <?php
        $colors = ["red","blue","yellow"];
        $grades = ["Math"=>90, "English"=>80, "Hebrew"=>100];

        //echo "<p> i love the colors " .$colors[0] . " and " . $colors[1] . ", but my sister likes the color " .$colors[2] . "</p";

       // echo " <br> <p> i have grades ". $grades["Math" ] . " and " . $grades["English"];

        // for ($i = 0; $i < count(grades); $i++)
        // {

        // }

        // foreach ($grades as $grade){
        //     echo "the grade is: ". $grade . "<br> <br>";
        // }

        $days =["Sundayyy", "Monday", "Tuesday", "Wednesday"];

        foreach($days as $day){
            echo "<th >" .$day . "</th>" ;
        }

        // function greatRS(){
        //     echo "Hi RS";
        // }

        // greatRS();

        //////////////////////////

        // $DeadsArr = array
        // (
        //     array("1","Cersei","https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/48/1543331466-1503283996-got2.jpg?crop=1xw:1xh;center,top&resize=980:*","https://www.digitalspy.com/tv/ustv/a27146839/game-of-thrones-fan-theory-cersei-pregnant-pregnancy/"),

        //     array("2", "Dani", "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/48/1543331466-1503283996-got2.jpg?crop=1xw:1xh;center,top&resize=980:*","https://www.digitalspy.com/tv/ustv/a27146839/game-of-thrones-fan-theory-cersei-pregnant-pregnancy/")
        // );

        // echo "<h1> SO DEAD </h1>";
        // echo "<ul>";    

        // for($row = 0 ; $row < count($DeadsArr); $row++)
        // {
        //     echo "<li><a href=" .$DeadsArr[$row][3] . " target='_blank'> <img id=" .$DeadsArr[$row][0] ." src=" .$DeadsArr[$row][2] ."> </a> </li>";
        // }
        // echo "</ul>";


        ?>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th> 1</th>
            <td> Mark </td>
            <td> otto </td>
            <td> @mdo </td>
        </tr> 
    </tbody>
    </table>   

    </section>
 
</body>
    </html>
