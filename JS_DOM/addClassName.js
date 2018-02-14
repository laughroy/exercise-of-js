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

//为下一个兄弟元素添加类名，通过theclass的类追加样式
function styleElementSiblings(tag,theclass){
	if (!document.getElementsByTagName) return false;
	var elems = document.getElementsByTagName(tag);
	var elem;
	for (var i = 0; i < elem.length; i++) {
		elem = document.getNextElement(elem[i].nextSibling);
		addClass(elem,theclass);
	}
}
//调用方式如下
// addLoadEvent(function(){
// 	styleElementSiblings("h1","intro");
// })