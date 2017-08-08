<?php
	$messages = array(
		'我约',
		'你走开！',
		'我要开车',
		'上车！',
		'叔叔,我们不约,我们不约.',
		'秋名山上行人稀， 常有车手较高低。 如今车道依旧在， 不见当年老司机'
		);
	sleep(2);

	echo $messages[array_rand($messages)];

?>