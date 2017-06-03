$(window).load(function(){
  
    var $roll = $("#index-scroll-box");
    var $rollUl = $("#index-scroll-box ul");
    var $rollLi = $("#index-scroll-box li");
   
   /*$rollLi.each(function(){
       $(this).css("backgroundColor","rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
    } ) */
    
    $rollUl.css("left","0px"); 
       
    $rollUl.timer = setInterval(function(){
        
        if(parseInt($rollUl.css("left"))< -3000){
            $rollUl.css("left","0px");
        }
        
        var nowleft = parseInt($rollUl.css("left")) ;
        
        $rollUl.css("left",nowleft-3+"px");        
         
    },15); 
    
})