$('em').click(function(){
	$('#phone').val('').focus();
});
$('#pwd').focus(function(){
    $(this).val('');
});
//点击登录按钮
$('.submit').on('click',function(e){
	e.preventDefault();
    var err=1;
    if(err==1){
        $('.textArea').html('手机号或密码输入错误！<br>请重新输入');
        $('.mask,.popup').fadeIn();
    }
});
$('.closeBtn,.okBtn').on('click',function(){
    $('.mask,.popup').hide();
});
$('.reg').click(function(){
	$('.mask2,.popup2').fadeIn();
});
$('.closeBtn2').on('click',function(){
    $('.mask2,.popup2').hide();
});
//播放暂停背景音乐
var playing=1;
$('.musicBox').click(function(){
	if(playing==0){
		$(this).css({"background-position":"0 0"});
		if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger"){
			mySound.play();//微信里貌似不支持soundjs静音，只能播放停止
		}else{
			mySound.muted = false;
		}
		playing=1;
	}else{
		$(this).css({"background-position":"-49px 0"});
		if(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger"){
			mySound.stop();//微信里貌似不支持soundjs静音，只能播放停止
		}else{
			mySound.muted = true;
		}
		playing=0;
	}
});