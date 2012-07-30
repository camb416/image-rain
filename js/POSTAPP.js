POSTAPP = {};

POSTAPP.init = function(){
	// initializing the application
	//alert($("#wrapper"));
	
	POSTAPP.seedVal = 0;
	$("#ui").show(500);
	$("#wrapper").click(function(){
	//alert("test");
//	POSTAPP.randomizeSizes();
});

	$("#randomize-btn").click(POSTAPP.randomizeSizes);
	$("#reset-btn").click(POSTAPP.resetSizes);
	$("#gridify-btn").click(POSTAPP.gridify);
	$("#greentoggle-btn").click(POSTAPP.toggleGreen);
	$("#yellowtoggle-btn").click(POSTAPP.toggleYellow);
	$("#bluetoggle-btn").click(POSTAPP.toggleBlue);
	$("#redtoggle-btn").click(POSTAPP.toggleRed);
	$("#scatter-btn").click(POSTAPP.scatter);
	$("#absolute-btn").click(POSTAPP.setAbsolute);


	$(".shadow-checkbox").click(POSTAPP.setShadows);
	$(".bg-checkbox").click(POSTAPP.setBackground);

	$("img.postcard").click(function(){
		alert($(this).position().left+","+$(this).position().top);
		// alert($(this));
	});
	//alert(myVar);
	//$('#wrapper').click(function(){ alert("hello world"); });
}

POSTAPP.setShadows = function(){
	var isShadows = $(".shadow-checkbox").attr("checked");

	if(!isShadows){
				$('img.postcard').css('box-shadow','none');

	} else {
		$('img.postcard').css('box-shadow','0px 0px 15px 3px #111');

	}

}
POSTAPP.setBackground = function(){
	var isBackground = $(".bg-checkbox").attr("checked");

	if(!isBackground){
				$('body').css('background','white');

	} else {
		$('body').css('background','url(img/tileable_wood_texture.png)');

	}

}

POSTAPP.scatter = function(){

	$('img.postcard').each(function(index){

		var screenW = $(window).width();
		var screenH = $(window).height();
		//alert(sineWave);
		var scale = Math.random();
		//sineWave = Math.sin(index/1000)*100+150);
		//alert(Math.sin(index/10)*100+200);
		//$(this).css('height',"222px");
		$(this).css('position','absolute');
		$(this).css('z-index', Math.floor(scale*1000));
		$(this).animate({
			left: Math.random()*screenW,
			top: Math.random()*screenH,
			width: scale*356,
			height: scale*222,
			opacity: scale
		}, 1000, function(){

	// animation complete
});
	});
}

POSTAPP.randomizeSizes = function(){
	$('img.postcard').each(function(index){

		var sineWave = Math.sin((index+POSTAPP.seedVal)/5)*100+120;
		var thisAlpha = Math.sin((index+POSTAPP.seedVal)/5)/4.0+0.75;
		//alert(sineWave);

		//sineWave = Math.sin(index/1000)*100+150);
//alert(Math.sin(index/10)*100+200);
	//	$(this).css('opacity',0.85);
	$(this).animate({
		width: sineWave,
		opacity: thisAlpha
	}, 1000, function(){

	// animation complete
});
});

	POSTAPP.seedVal+=10;
}

// toggles
POSTAPP.toggleGreen = function(){ $('img.green').toggle(500); }
POSTAPP.toggleYellow = function(){ $('img.yellow').toggle(500); }
POSTAPP.toggleBlue = function(){ $('img.blue').toggle(500); }
POSTAPP.toggleRed = function(){ $('img.red').toggle(500); }

POSTAPP.setAbsolute = function(){
	$('img.postcard').each(function(index){

		var destLeft = $(this).position().left;
		var destTop = $(this).position().top;
		console.log($(this).offsetParent());
		//$(this).css('position','absolute');
		$(this).css('top',destTop);
		$(this).css('left',destLeft);
		$(this).css('position','absolute');
	});
}


POSTAPP.gridify = function(){
		POSTAPP.setAbsolute();
	$('img.postcard').each(function(index){

		var row = Math.floor(index/10);
		var col = index%10;
		/*
		var destLeft = $(this).position().left;
		var destTop = $(this).position().top;
*/
		
		//alert(destLeft,destTop);
		$(this).animate({
			left: col*190,
			top: row*80
		}, 1000, function(){

	// animation complete
});
});
}

POSTAPP.resetSizes = function(){
	$('img.postcard').each(function(index){
		$(this).css('position','relative');
		$(this).css('top','');
$(this).css('opacity','1.0');
		$(this).css('left','');
		//alert(sineWave);

		//sineWave = Math.sin(index/1000)*100+150);
//alert(Math.sin(index/10)*100+200);
		//$(this).css('height',"222px");
		$(this).animate({
			width: '7%',
			height: '7%'
		}, 1000, function(){

	// animation complete
});
	});
}

//document.onReady = POSTAPP.init();

$(document).ready(function(){
	POSTAPP.init();
});