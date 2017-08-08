<?php
 $type = $_GET['type'];
 $songs = array(
    array('id'=>1,'type'=>1,'name'=>'鬼迷心窍','singer'=>'周华健'),
    array('id'=>2,'type'=>1,'name'=>'一个人生活','singer'=>'林育群'),
    array('id'=>3,'type'=>1,'name'=>'离开','singer'=>'郭静'),
    array('id'=>4,'type'=>1,'name'=>'烫心','singer'=>'羽泉'),
    array('id'=>5,'type'=>1,'name'=>'我的骄傲','singer'=>'容祖儿'),
    array('id'=>6,'type'=>1,'name'=>'记得我爱你','singer'=>'光良'),
    array('id'=>7,'type'=>1,'name'=>'凤凰花开的路口','singer'=>'林志炫'),
    array('id'=>8,'type'=>1,'name'=>'我曾经爱过一个人','singer'=>'彭佳慧'),

    array('id'=>9,'type'=>2,'name'=>'弹起我心爱的土琵琶','singer'=>'梦鸽'),
    array('id'=>10,'type'=>2,'name'=>'英雄赞歌','singer'=>'马玉涛'),
    array('id'=>11,'type'=>2,'name'=>'唱支山歌给党听','singer'=>'陈燕'),
    array('id'=>12,'type'=>2,'name'=>'映山红','singer'=>'陈燕'),
    array('id'=>13,'type'=>2,'name'=>'我的祖国','singer'=>'时翔云'),
    array('id'=>14,'type'=>2,'name'=>'十送红军','singer'=>'宋祖英'),
    array('id'=>15,'type'=>2,'name'=>'中国少年先锋队队歌','singer'=>'小蓓蕾组合'),
    array('id'=>16,'type'=>2,'name'=>'我爱北京天安门','singer'=>'小蓓蕾组合'),

    array('id'=>17,'type'=>3,'name'=>'往事只能回味','singer'=>'蔡琴'),
    array('id'=>18,'type'=>3,'name'=>'鸿雁','singer'=>'童彤'),
    array('id'=>19,'type'=>3,'name'=>'杨柳青','singer'=>'阿宝'),
    array('id'=>20,'type'=>3,'name'=>'走西口','singer'=>'阿宝'),
    array('id'=>21,'type'=>3,'name'=>'梦驼铃','singer'=>'费玉清'),
    array('id'=>22,'type'=>3,'name'=>'父亲的草原母亲的河','singer'=>'腾格尔'),
    array('id'=>23,'type'=>3,'name'=>'洪湖水浪打浪','singer'=>'宋祖英'),
    array('id'=>24,'type'=>3,'name'=>'黄河的水干了','singer'=>'腾格尔'),

    array('id'=>25,'type'=>4,'name'=>'灰姑娘','singer'=>'郑钧'),
    array('id'=>26,'type'=>4,'name'=>'真的爱你','singer'=>'Beyond'),
    array('id'=>27,'type'=>4,'name'=>'挪威的森林','singer'=>'伍佰'),
    array('id'=>28,'type'=>4,'name'=>'我不配','singer'=>'周杰伦'),
    array('id'=>29,'type'=>4,'name'=>'方向','singer'=>'许巍'),
    array('id'=>30,'type'=>4,'name'=>'私奔','singer'=>'郑钧'),
    array('id'=>31,'type'=>4,'name'=>'情人','singer'=>'许巍'),
    array('id'=>32,'type'=>4,'name'=>'Nothing','singer'=>'McFly'),
 );

 $tmp = array();
 foreach($songs as $key=>$value){
    if($type == $value['type']){
        $tmp[] = $value;
    }
 }

 echo json_encode($tmp);

?>