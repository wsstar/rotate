/*
*rorate 
*by star 2017/12/18
*/

var original = {
	startBtn:".start",/*开始按钮*/
	el:'.pan-parts',/*旋转部分 */
	speed:4000,/*旋转速度，越小越快 */
	isBegining:false,/*是否开始旋转，旋转时关闭按钮事件*/
	round:0/*旋转的轮数，不需要配置*/

}
var myRotate = {
	init:function(options){
		this.options = $.extend(true,original,options);
		this.start();
	},
	start:function(){
		_this = this
		$(_this.options.startBtn).click(function(){
			if(!_this.options.isBegining){
				console.log("start")
				_this.options.round++
				$(_this.options.el).css({"transform":"rotate(0eg)","-webkit-transform":"rotate(0deg)"})
				_this.rotate();			
				_this.options.isBegining = true;
			}
			
		})
	},
	// 可自定义函数，获取中奖号码
	rotate:function(){
		_this = this;

		if(_this.options.rotate){
			_this.options.rotate.call(this);
		}else{
			var avg = 360/18;
			$(_this.options.el).css({"transform":"rotate(0eg)","-webkit-transform":"rotate(0deg)"})
			var ang = Math.ceil(Math.random()*9)
			var num = (2*ang-1)*avg + 3600*_this.options.round;
			$(_this.options.el).css({"transform":"rotate("+num+"deg)","-webkit-transform":"rotate("+num+"deg)"})
			setTimeout(function(){
				if (ang == 1) {
					alert("0.88");
				}else if(ang == 2){
					alert("18元红包");
				}else if(ang == 3){
					alert("8元红包");
				}else if(ang == 4){
					alert("5元红包");
				}else if(ang == 5){
					alert("88元现金");
				}else if(ang == 6){
					alert("18元现金");
				}else if(ang == 7){
					alert("8元现金");
				}else if(ang == 8){
					alert("5元现金");
				}else{
					alert("1元现金")
				}
				
				_this.options.isBegining = false;
			},_this.options.speed)
		}		
	}
}