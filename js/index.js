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
	








window.onload = function(){

	// 作品战士效果
	productionShow();
	// 选择联系方式
	selectCode();
	// 关闭联系方式
	outTwoCode();
}