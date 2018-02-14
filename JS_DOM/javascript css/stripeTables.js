//为奇数行和偶数行设定背景颜色，偶数行默认
function stripeTables(){
    if (!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows;
    for (var j = 0; j < tables.length; j++) {
        odd = false;
        rows = tables[j].getElementsByTagName("tr");
        for (var i = 0; i < rows.length; i++) {
            if(odd == true){
            addClass(rows[i],"odd");//这个odd和此函数的odd不是同一个东西，这个odd是添加要添加的类名
            odd = false;
        }else{
            odd = true;
        }   
        }
    }
}
addLoadEvent(stripeTables);

//鼠标选择时变粗体，移开时恢复
function highlightRows(){
    if (!document.getElementsByTagName) return false;
    var space = document.getElementsByTagName("td");
    for (var i = 0; i < space.length; i++) {
        space[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        }
        space[i].onmouseout = function(){
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(highlightRows);

//为元素追加css样式,调用此函数时要在css中修改创建一个类value
function addClass(element,value){
    if (!element.class){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        element.className = newClassName; 
    }
}

