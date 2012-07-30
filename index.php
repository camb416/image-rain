<html>
<head>
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script> 
	<script type="text/javascript" src="js/POSTAPP.js"></script> 
</head>
<body>
	<div id="wrapper">

<?php
$actualNumber = 1;
if ($handle = opendir('img/sml')) {
 //   echo "Directory handle: $handle\n";
 //   echo "Entries:\n";
$prefix = '<img src="img/sml/';
$middle = '" class="';
$suffix = '" />';
    /* This is the correct way to loop over the directory. */
    while (false !== ($entry = readdir($handle))) {
       if($entry!="." && $entry!=".."){
if($actualNumber<26){
		$catClass = 'green';
	} else if($actualNumber<51){
		$catClass = 'yellow';
	} else if($actualNumber<76){
		$catClass = 'blue';
	} else {
		$catClass = 'red';
	}
	$catClass .= " postcard";
	 echo $prefix.$entry.$middle.$catClass.$suffix;
$actualNumber++;
}
    }

    /* This is the WRONG way to loop over the directory. */
//    while ($entry = readdir($handle)) {
 //       echo "$entry\n";
  //  }

    closedir($handle);
}
?>


<?php 


/*
$prefix = '<img src="img/img_sml';
$middle = '.jpg" class="';
$suffix = '" />';
for($i =0;$i<100;$i++){
	$actualNumber = $i+1;
	if($actualNumber<26){
		$catClass = 'green';
	} else if($actualNumber<51){
		$catClass = 'yellow';
	} else if($actualNumber<76){
		$catClass = 'blue';
	} else {
		$catClass = 'red';
	}
	$catClass .= " postcard";

	print $prefix.$actualNumber.$middle.$catClass.$suffix."\n\r";

}
*/
?>
</div>
<div id="ui">
<div class="bg">&nbsp;</div>
<div class="inner">FOOD POSTCARDS
<button id="reset-btn">reset</button>
<button id="randomize-btn">randomize</button>
<button id="gridify-btn">gridify</button>
<button id="greentoggle-btn">green</button>
<button id="yellowtoggle-btn">yellow</button>
<button id="redtoggle-btn">red</button>
<button id="bluetoggle-btn">blue</button>
<button id="scatter-btn">scatter</button>
<button id="absolute-btn">absolute</button>

<input type="checkbox" class="shadow-checkbox" /> shadows</input>
<input type="checkbox" class="bg-checkbox" checked="checked" /> background</input>
</div>
	</div>
</body>
</html>