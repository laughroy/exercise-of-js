//在目标元素后插入的函数，insertBefore方法是在之前插入
function insertAffter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);//在目标元素的下一个兄弟元素之前插入
	}

}

//加载多个函数在页面加载时
function addLoadEvent(func){//运用此函数可以在页面加载时同时加载需要的函数
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
addLoadEvent(func);//要加载的函数，调用addLoadEvent函数
