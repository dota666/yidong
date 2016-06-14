$(function(){
	var box=$(".banner-middel")[0];
	var imgs=$(".imgs");
	var circles=$(".circle");
	var left=$(".img-left")[0];
	var right=$(".img-right")[0];
	var n=0;
    var t=setInterval(move,4000);
    function move(type){
    	var type=type||"r";
    	if(type=="r"){
    		n++;
    		if(n>=imgs.length){
    			n=0;
    		}
    	}else if (type=="l"){
    	    n--;
    		if (n<0) {
    		    n=imgs.length-1;
    		}
    	}
        for(var i=0;i<imgs.length;i++){
         	imgs[i].style.opacity=0;
         	circles[i].style.background="#CDD0CD";
        }
        animate(imgs[n],{opacity:1},500);
        circles[n].style.background="#E10D67";
    }
    box.onmouseover=function(){
        clearInterval(t);
        left.style.display="block";
        right.style.display="block";
    }
    box.onmouseout=function(){
        t=setInterval(move,4000);
        left.style.display="none";
        right.style.display="none";
    }
    for(var i=0;i<circles.length;i++){
        circles[i].index=i;
        circles[i].onclick=function(){
        	for(var j=0;j<circles.length;j++){
         	    imgs[j].style.opacity=0;
         	    circles[j].style.background="#CDD0CD";
            }
            animate(imgs[n],{opacity:1},500);
            circles[this.index].style.background="#E10D67";
            n=this.index;
       	}
    }
    right.onclick=function(){
        move("r");
    }
    left.onclick=function(){
      	move("l");
    }


    var box1=$(".lunbo")[0];
	var zuo=$(".left1")[0];
	var you=$(".right1")[0];
	var flag=true;
	var m=setInterval(dong,5000)
	function dong(){
		if(!flag){
			return;
		}
		flag=false;
		var img=getFirst(box1);
		animate(box1,{left:-294},200,function(){
			box1.appendChild(img);
			box1.style.left=0;
			flag=true;
		})
	}
	function dong1(){
		if(!flag){
			return;
		}
		flag=false;
		var img=getFirst(box1);
		var img1=getLast(box1);
		insertBefore(img1,img);
		box1.style.left=-294+"px";
		animate(box1,{left:0},200,function(){
			flag = true;
		})
	}
	$(".active")[0].onmouseover=function(){
		clearInterval(m);
		zuo.style.display="block";
 		you.style.display="block";
	}
	$(".active")[0].onmouseout=function(){
		m=setInterval(dong, 1500);
		zuo.style.display="none";
 		you.style.display="none";
	}
	zuo.onclick=function(){
		dong();
	}
	you.onclick=function(){
		dong1()
	}


	var navs=$(".nav-lis");
	var pulls=$(".pull");
	for(var i=0;i<navs.length;i++){
		navs[i].index=i;
		navs[i].onmouseover=function(){
			var pullbox=$(".nav-pull")[0];
			pullbox.style.display="block"
			for(var i=0;i<pulls.length;i++){
				pulls[i].style.display="none";
			}
			pulls[this.index].style.display="block"
		}
		navs[i].onmouseout=function(){
			var pullbox=$(".nav-pull")[0];
			pullbox.style.display="none"
		}
		pulls[i].onmouseover=function(){
			var pullbox=$(".nav-pull")[0];
			pullbox.style.display="block"
		}
		pulls[i].onmouseout=function(){
			var pullbox=$(".nav-pull")[0];
			pullbox.style.display="none"
		}
	}


	var hover=$(".hover");
	var hidden=$(".xlk");
	for (var i = 0; i < hover.length; i++) {
		hover[i].index=i;
		hover[i].onmouseover=function() {
			hover[this.index].style.background="#fff"
			hidden[this.index].style.display="block"
		}
		hover[i].onmouseout=function() {
			hover[this.index].style.background="#f6f6f6"
			hidden[this.index].style.display="none"
		}
	}
	for (var i = 0; i < hidden.length; i++) {
		hidden[i].index=i;
		hidden[i].onmouseover=function() {
			hover[this.index].style.background="#fff"
			hidden[this.index].style.display="block"
		}
		hidden[i].onmouseout=function() {
			hover[this.index].style.background="#f6f6f6"
			hidden[this.index].style.display="none"
		}
	}

})