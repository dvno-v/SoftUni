<ul>
    <?php
        for ($i = 1; $i <= 20; $i++) {
            if ($i % 2 == 1) {
                echo "<li><span style='color:blue'>" . $i . "</span></li>";
            } else {
                echo "<li><span style='color:green'>" . $i . "</span></li>";
            }
        }
    ?>
</ul>

<!--Second solution:-->
<!--<ul>-->
<!--    --><?php
//    for ($i = 1; $i <= 20; $i++) {
//        if ($i % 2 == 0)
//            $color = 'green';
//        else $color ='blue';
//        echo "\t<li><span style='color:$color'> $i</span></li>\n";
//    } ?>
<!--</ul>-->



