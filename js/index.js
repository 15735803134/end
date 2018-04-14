	// 作品展示
	function productionShow(){
		var aa=new zturn({
			id:"zturn",
			opacity:0.9,
			width:382,
			Awidth:1024,
			scale:0.9
		})
		var ab=new zturn({
			id:"zturn2",
			opacity:0.8,
			width:382,
			Awidth:1024,
			scale:0.6
		})	
	}
	// 二维码
	function selectCode(){
		$('.copyright .copyright-content .copyright-icon a').on('click',function(){
			
			$('.copyright .copyright-content .twoCode').fadeIn();

			console.log($(this).index());  
			// 0为qq
			if($(this).index() == 0){
				$('.copyright .copyright-content .twoCode img').attr('src','img/qqcode.png');
			}
			// 1为微信
			else if($(this).index() == 1){
				$('.copyright .copyright-content .twoCode img').attr('src','img/weixincode.png');
			}
			// 2为微博
			else if($(this).index() == 2){
				$('.copyright .copyright-content .twoCode img').attr('src','img/weibocode.png');
			}
		})
	}
	// 点击影藏二维码
	function outTwoCode(){
		$('.copyright .copyright-content .twoCode a div i').on('click',function(){

			$('.copyright .copyright-content .twoCode').fadeOut();
		})
	}
	// 点击联系我
	function callme(){
		$('header .header-right a:last-child').on('click',function(){

			$('.copyright .copyright-content .twoCode').fadeIn();
		})
	}








window.onload = function(){

	// 作品展示效果
	productionShow();
	// 选择联系方式
	selectCode();
	// 关闭联系方式
	outTwoCode();
	// 点击联系我
	callme();


	// 头像切换
	var count = 0;

	setTimeout(function(){
		var t = setInterval(function(){
			if(count == 550)
				window.clearInterval(t); 
			$('#meinfo .person-photo2')[0].style.marginTop = count+'px';
			++count;
		},10);
	},1000);

}