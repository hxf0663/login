var loader;
function init() {
	var manifest = [
		{id:"myPath_1", src:"images/logo.png"},
		{id:"myPath_2", src:"images/phone.png"},
		{id:"myPath_3", src:"images/lock.png"},
		{id:"myPath_4", src:"images/cross1.png"},
		{id:"myPath_5", src:"images/cross2.png"},
		{id:"myPath_6", src:"images/musicIcon.png"},
		//{id:"myPath_7", src:"images/music.mp3"},
		
	];

	loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("progress", handleFileProgress);
	loader.loadManifest(manifest);
	loader.loadFile({id:"bgmusic", src:"images/music.mp3"});
}

function handleFileProgress(event) {
	var percent = loader.progress*100|0;
	//console.log(percent+'% loaded.');
	//加载动画效果
	$('.loadingText').html('玩命加载中...('+percent+'%)');
}

function handleFileLoad(evt) {
	//console.log(evt);
}

var mySound;
function handleComplete() {
	$('.loadingMask, .loadingText').hide();//隐藏加载层
	$('.logo img').addClass('logoAni');
	$('.logoText').addClass('animated shake').addClass('logoTextAni');
	/**
	可以在动画完成后，把动画类移除，以便可以对元素再次进行同一个或其它动画
	setTimeout(function(){
		$('.logoText').removeClass('shake').removeClass('logoTextAni');
	},1500);//假设动画持续1秒+延时0.5秒
	//$('.logoText').addClass('shake');//再次执行动画
	*/
	$('.submit').addClass('animated bounceInUp').addClass('submitAni');
	/**
	当动画效果执行完成后还可以通过以下代码添加事件
	$('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);
	*/
	
	//var image1 = loader.getResult("myPath_1");
    //document.body.appendChild(image1);
	ppc = new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 1});
	mySound = createjs.Sound.play("bgmusic", ppc);//播放背景音乐
	
}

$(document).ready(function(){
	init();
});