function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);//在目标元素的下一个兄弟元素之前插入
	}
}

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

function countBodyChildren() {
	if (!document.getElementsByTagName) return false;
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    return false;
}//显示body元素的子节点数量

function ShowNodeType() {
	if (!document.getElementsByTagName) return false;
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
    return false;
}//展示body元素的节点类型

document.getElementById("example").onclick = function example(){
	if (!document.getElementById("example")) return false;
	var winURL = document.getElementById("example").getAttribute("href");
	win = window.open(winURL,"newwindow","height=300","width=400");
	return false;
}//单个事件绑定，取消浏览器默认行为打开新窗口并设置属性(但是这个方法只能绑定一个事件)

function preparePlaceholder(){
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","Image/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	placeholder.setAttribute("height","300");
	placeholder.setAttribute("width","400");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image!");
	description.appendChild(desctext);
	//document.getElenmentsByTagName("body")[0].appenChild(placeholder);
	//document.getElenmentsByTagName("body")[0].appendChild(description); //直接插入会在body的最后，这是通过DOM
	//document.body.appendChild(placeholder);
	//document.body.appendChild(description);  //这是通过HTML-DOM提供的属性  都是插入在最后。
	var gallery = document.getElementById("imagegallery");
	gallery.parentNode.insertBefore(placeholder,gallery);
	gallery.parentNode.insertBefore(description,gallery);
	// insertAfter(placeholder,gallery);
	// insertAfter(description,placeholder);
}

function prepareGallery(){
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i<links.length;i++){
		links[i].onclick = function(){
			return showPic(this);
		}
		links[i].onkeypress = links[i].onclick;
	}
	var button_1 = document.getElementById("ShowNodeType");
	button_1.onclick = function(){
		return ShowNodeType(this);
	}
	var button_2 = document.getElementById("countChildNodes");
	button_2.onclick = function(){
		return countBodyChildren(this);
	}
}

function showPic(whichPic){
	if (!document.getElementById("placeholder")) return false;//return true 和false在这的区别？
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	if (!document.getElementById("description")) return false;
	if (whichPic.getAttribute("title")){
		var text = whichPic.getAttribute("title");
	}else{
		var text = " ";
	}
	var description = document.getElementById("description");
	if (description.firstChild.nodeType==3){
		description.firstChild.nodeValue = text;
	}return false;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);



