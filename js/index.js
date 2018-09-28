window.onload=function () {

     //轮播图
     let slideritem=document.querySelectorAll(".slider-item img");
     console.log(slideritem);
     let prev=document.querySelector(".btn-left");
     console.log(prev);
     let more=document.querySelector(".btn-right");
     console.log(more);
     let indicators=document.querySelectorAll(".slider-indicators span");
     console.log(indicators);
     let mainzhong1=document.querySelector(".mainzhong1");
     console.log(mainzhong1);
     slideritem[0].style.opacity=1;
     indicators[0].classList.add("active");
     let num=0;
     for(let i=0;i<slideritem.length;i++){
     	indicators[i].onmouseover=function(){
     		for(let j=0;j<indicators.length;j++){
     			slideritem[j].style.opacity=0;
     			indicators[j].classList.remove("active");
     		}
     		slideritem[i].style.opacity=1;
     		indicators[i].classList.add("active");
     		num=i;
     	}
     }
      let t=setInterval(move,3000);
      function move(){
      	num++;
      	if(num>slideritem.length-1){
      		num=0;
      	}
      	    for(let j=0;j<indicators.length;j++){
     			slideritem[j].style.opacity=0;
     			indicators[j].classList.remove("active");
     		}
     		slideritem[num].style.opacity=1;
     		indicators[num].classList.add("active");

      }
      mainzhong1.onmouseover=function(){
	      			clearInterval(t);
	  }
	  mainzhong1.onmouseout=function(){
	      			t=setInterval(move,3000);
	  }


      more.onclick=function(){
      	move();
      }
      function movel(){
      	num--;
      	if(num<0){
      		num=slideritem.length-1;
      	}
      	    for(let j=0;j<indicators.length;j++){
     			slideritem[j].style.opacity=0;
     			indicators[j].classList.remove("active");
     		}
     		slideritem[num].style.opacity=1;
     		indicators[num].classList.add("active");
      }
      prev.onclick=function(){
      	movel();
      }
      


      // 轮播图左面选项卡
      let site=document.querySelectorAll(".mainzuo li");
      console.log(site);
      let popCtn=document.querySelectorAll(".popCtn");
      console.log(popCtn);
      for(let i=0;i<site.length;i++){
        site[i].onmouseover=function(){
          for(let j=0;j<popCtn.length;j++){
            popCtn[j].style.display="none";
          }
          popCtn[i].style.display="block";
        }
        site[i].onmouseout=function(){
          popCtn[i].style.display="none";
        }
      }


      // 秒杀右面点击平移
      let sliderwrapper=document.querySelector(".slider-wrapper");
      console.log(sliderwrapper);
      let home=document.querySelector(".main2zhong");
      console.log(home);
      let btnprev=document.querySelector(".prev");
      console.log(btnprev);
      let btnnext=document.querySelector(".next");
      console.log(btnnext);
      let widths=parseInt(getComputedStyle(home,null).width);
      console.log(widths);
      let num2=0;
      sliderwrapper.style.left=0;
      btnnext.onclick=function(){
        num2++;
        if(num2>2){
          num2=2;
        }

        sliderwrapper.style.left=-widths*num2+"px";
      }
       btnprev.onclick=function(){
        num2--;
        if(num2<0){
          num2=0;
        }
        sliderwrapper.style.left=-widths*num2+"px";
      }


      // 秒杀部分右边轮播
      let main2youimg=document.querySelectorAll(".main2you a img");
      console.log(main2youimg);
      let dot=document.querySelectorAll(".dot");
      console.log(dot);
      let home2=document.querySelector(".main2you a");
      console.log(home2);
      let widths2=parseInt(getComputedStyle(home2,null).width);
      console.log(widths2);
      let str="active2";
      main2youimg[0].style.left=0;
      dot[0].classList.add("active2");
      roll(main2youimg,dot,widths2,2000,str);


      //会买专辑
      let dailyslider=document.querySelectorAll(".daily-slider");
      console.log(dailyslider);
      let dot2=document.querySelectorAll(".dot2");
      console.log(dot2);
      let widths3=parseInt(getComputedStyle(dailyslider[0],null).width); 
      console.log(widths3);
      let str2="active3";
      dailyslider[0].style.left=0;
      dot2[0].classList.add("active3");
      roll(dailyslider,dot2,widths3,3000,str2);


      //排行榜
    let b2=document.querySelectorAll(".b2 a");
    console.log(b2);
    let toplist=document.querySelectorAll(".top-list");
    console.log(toplist);
    for(let i=0;i<b2.length;i++){
      // console.log(li[i]);
      //鼠标移入子元素出现
      b2[i].onmouseover=function () {
        //重要的一步就是如果没有这个循环的话 移入到下一个的时候不消失就会被盖住
                for(let j=0;j<toplist.length;j++){
                  b2[j].style.borderColor="#f5f5f5";
                  b2[j].style.color="rgb(102,102,102)";
                  toplist[j].style.display="none";
                }
                //出现下拉list
                b2[i].style.color="#ff6700";
                b2[i].style.color="#e33333";
                toplist[i].style.display="block";
      }
      //鼠标移走。子元素不消失
      b2[i].onmouseout=function(){
        toplist[i].style.display="block";
      }
    }
      let toplist2=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(1) .top-list-main");
      console.log(toplist2);
      let dot3=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(1) .slider-indicators3 .dot3")
      console.log(dot3);
      let widths4=parseInt(getComputedStyle(toplist2[0],null).width); 
      console.log(widths4);
      roll2(toplist2,dot3,widths4,str2);
      
      let toplist3=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(2) .top-list-main");
      console.log(toplist3);
      let dot5=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(2) .slider-indicators3 .dot3")
      console.log(dot5);
      roll2(toplist3,dot5,widths4,str2);

      let toplist4=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(3) .top-list-main");
      console.log(toplist4);
      let dot6=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(3) .slider-indicators3 .dot3")
      console.log(dot6);
      roll2(toplist4,dot6,widths4,str2);

      let toplist5=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(4) .top-list-main");
      console.log(toplist4);
      let dot7=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(4) .slider-indicators3 .dot3")
      console.log(dot7);
      roll2(toplist5,dot7,widths4,str2);

      let toplist6=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(5) .top-list-main");
      console.log(toplist6);
      let dot8=document.querySelectorAll(".tab-boty-item>.top-list:nth-child(5) .slider-indicators3 .dot3")
      console.log(dot8);
      roll2(toplist6,dot8,widths4,str2);
      



      //领券中心
      let boxmain=document.querySelector(".box-bdmain")
      console.log(boxmain);
      let widths5=parseInt(getComputedStyle(boxmain,null).width)/2; 
      console.log(widths5);
      let dot4=document.querySelectorAll(".dot4");
      console.log(dot4);
      dot4[0].classList.add("active3");
      for(let i=0;i<dot4.length;i++){
        dot4[i].onmouseover=function(){
           for(let j=0;j<dot4.length;j++){
            dot4[j].classList.remove("active3");
           }
           dot4[i].classList.add("active3");
            boxmain.style.left=-widths5*i+"px";
        }
      }

      //觅
      let mimain=document.querySelectorAll(".mi-main a");
      console.log(mimain);
      let dot9=document.querySelectorAll(".dot9");
      console.log(dot9);
     
      
      mimain[0].style.left=0;
      dot9[0].classList.add("active3");
      roll(mimain,dot9,widths3,3000,str2);
      


      //滚动条
       let rotate1=document.querySelector(".roll");
       console.log(rotate1);
       //移动时上边搜索框
       let searchfix=document.querySelector(".search-fix")
       console.log(searchfix);
       let bodytop;
       console.log(bodytop);
       window.onscroll=function(){
        bodytop=document.body.scrollTop||document.documentElement.scrollTop;
            if(bodytop>100){
              rotate1.style.display="block";

            }
            if(bodytop>300){
              searchfix.style.height="50px";
              searchfix.style.borderColor="#f10214";
              searchfix.style.boxShadow="2px 2px 2px rgba(0,0,0,.2)";
            }else{
              searchfix.style.height="0";
              searchfix.style.borderColor="rgba(0,0,0,0)";
              searchfix.style.boxShadow="0 0 0 rgba(0,0,0,0)";
              
            }
           
       }
       let up=document.querySelector(".top")
       up.onclick=function () {
      // let res=document.body.scrollTop||document.documentElement.scrollTop;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});

    }

    //登录注册栏
    let a17=document.querySelectorAll(".a17 li");
    console.log(a17);
    a17[0].style.borderColor="#e01121";

    let iframe=document.querySelectorAll(".content-iframe");
    console.log(iframe);
    iframe[0].style.display="block";
    for(let i=0;i<a17.length;i++){
      a17[i].onmouseover=function(){
        for(let j=0;j<a17.length;j++){
          iframe[j].style.display="none";
          a17[j].style.borderColor="rgba(0,0,0,0)";
        }
        a17[i].style.borderColor="#e01121";
        iframe[i].style.display="block";

      }
    }

    //秒杀
    let cdday=document.querySelector(".cd-hour span");
    console.log(cdday);
    let cdhour=document.querySelector(".cd-minute span");
    let cdminute=document.querySelector(".cd-second span");
    // console.log(cdhour,cdminute,cdsecond)
    let future=new Date();
    future.setYear(2018);
    future.setMonth(9,30);
    future.setHours(18,0,0);
    // console.log(future);
    let futuretime=future.getTime();
    let t2=setInterval(function (){
        let nowday=new Date();
        let nowtime=nowday.getTime();
        let times=Math.round((futuretime-nowtime)/1000);
        // console.log(times);
        let day=Math.floor(times/60/60/24);
        cdday.innerHTML=day;
        // console.log(day);
        let hours=Math.floor(times/60/60%24);
        cdhour.innerHTML=hours;
        let min=Math.floor(times/60%60);
        cdminute.innerHTML=min;
        // let sec=Math.floor(times%60);
        // cdsecond.innerHTML=sec;
    },1000);



    


      





}