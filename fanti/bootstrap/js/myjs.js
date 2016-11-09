
$(function(){
/*最开始的版面*/
	//选择哪一种语言进入之后
$('.sureEnter').on('click',function(){
	//进入通道消失
	$('.Chinese').css('display','none');
	$('.English').css('display','none');
	//遮挡层出现
	$('.dis').css('display','block');
});

//声明阅读完之后，进入公司主页
$('.sureRead').click(function(){
	window.location.href = 'file:///E:/demo/jianti/index.html';
});


/*首页开始*/
	//关注我们之后图标变了
$('#focus').click(function(){
	$(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
});

});