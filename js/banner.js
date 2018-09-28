  function roll(banner,dot,widths,second,str){
                        // 鼠标移入
                        let next=0;
                        let now=0;
                         let t;
                        banner[0].style.left=0;
                        dot[0].classList.add(str);
                        for(let i=0;i<banner.length;i++){
                           dot[i].onmouseover=function(){
                                for(let j=0;j<dot.length;j++){
                                        banner[j].style.left=widths+"px";
                                        dot[j].classList.remove(str);
                                }
                                banner[i].style.left=0;
                                dot[i].classList.add(str);
                                now=i;
                                next=i;
                           }
                        }
                        //自动播放
                        t=setInterval(move,second);
                        function move(){
                                next++;
                                if(next==banner.length){
                                        next=0;
                                }
                                banner[now].style.left=0;
                                banner[next].style.left=widths+"px"
                                animate(banner[now],{left:-widths},function(){
                                        dot[now].classList.remove(str);
                                })
                                animate(banner[next],{left:0},function(){
                                        for(let j=0;j<dot.length;j++){
                                                dot[j].classList.remove(str);
                                        }
                                        dot[next].classList.add(str);
                                })
                                now=next;
                        }
                        
                          window.onblur=function(){
                        	clearInterval(t);
                        }
                        window.onfocus=function() {
                        	t=setInterval(move,second);
                        }

                    }



                     function roll2(banner,dot,widths,str){
                        // 鼠标移入
                        let next=0;
                        let now=0;
                         let t;
                        banner[0].style.left=0;
                        dot[0].classList.add(str);
                        for(let i=0;i<banner.length;i++){
                           dot[i].onmouseover=function(){
                                for(let j=0;j<dot.length;j++){
                                        banner[j].style.left=widths+"px";
                                        dot[j].classList.remove(str);
                                }
                                banner[i].style.left=0;
                                dot[i].classList.add(str);
                                now=i;
                                next=i;
                           }
                        }
                     
                       
                        
                      

                    }