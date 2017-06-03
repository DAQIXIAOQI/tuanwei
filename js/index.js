window.onload = function () {

    //头部、尾部、时钟逻辑插入
    insertHeadTail();

    //autoplay、roll 函数调用
    //已用jquery函数自动插入
    autoplay();

    //导航栏函数插入
    nav();

    articleInput();
    
    
    //首页下面表格下载的函数
    var ul = document.getElementById("four-box-file").getElementsByTagName("ul")[0];
    var li = ul.getElementsByTagName("li");
    
    for(var i = 0 ; i < li.length ; i++) {
       
        
       li[i].onmouseover = function(){
            
            var bgdiv = getClassName("file-icon-box",this)[0];
            var header = this.getElementsByTagName("h5")[0];
               
            bgdiv.className += " hover" ;
            
            header.className += " hover" ; 
                    
        }
        li[i].onmouseout = function(){
            
          var bgdiv = getClassName("file-icon-box",this)[0];
            var header = this.getElementsByTagName("h5")[0];
            
            bgdiv.className =bgdiv.className.replace("hover","");
            
            header.className = header.className.replace("hover","");
            
        }
        
    }   
    
}
