<?php
    $students = array(
        array('name'=>'小明','age'=>18,'score'=>89),
        array('name'=>'小东','age'=>16,'score'=>91),
        array('name'=>'小强','age'=>19,'score'=>85),
        array('name'=>'小清','age'=>17,'score'=>96)
    );
    echo(json_encode($students));
?>