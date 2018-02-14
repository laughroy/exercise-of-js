// function ShowPic(WhichPic) {
// 	if (!document.getElementById) return false;
// 	//检测浏览器是否支持document.getElementById的语法   注意getElementsById 和getElementsByTagName 有s和无s。
//     var source               = WhichPic.getAttribute("href");
//     var placeholder          = document.getElementById("placeholder");
//     placeholder.setAttribute("src", source);
//     // 等价于document.getElementById("placeholder").setAttribute("src",WhichPic.getAttribute("href"));
//     // 等价于placeholder.src = source;
//     var text                 = WhichPic.getAttribute("title");
//     var description          = document.getElementById("description");
//     description.firstChild.nodeValue = text;

// }//递参WhichPic，获取href的地址，用placeholder变量创建src属性更改链接地址
// //description是p标签，但是p元素的nodeValue的值为null，文本是p标签的唯一一个子节点
function countBodyChildren() {
	if (!document.getElementsByTagName) return false;
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}//显示body元素的子节点数量

function ShowNodeType() {
	if (!document.getElementsByTagName) return false;
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}//展示body元素的节点类型

// function popUp(winURL){
	
// 	window.open (winURL,'newwindow','height=100,width=400,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
// }

// 	function prepareLinks() {
// 		if(!document.getElementsByTagName){ return false;};
// 		var links = document.getElementsByTagName("a");
// 			for(var i=0; i<links.length; i++){
// 				if(links[i].getAttribute("class") == "popup"){
// 					links[i].onclick = function(){
// 						popUP(this.getAttribute("href"));
// 						return false;
// 					}
// 				}
// 			}
			
// 	}

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
addLoadEvent(prepareGallery);

function prepareGallery(){
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById("placeholder")) return false;
	var gallery = document.getElementById("imagegallery");
	var links   = gallery.getElementsByTagName("a");
	for (var i = 0 ; i<links.length;i++){
		links[i].onclick = function(){
			return ShowPic(this) ? false : true;
		}
		links[i].onkeypress = links[i].onclick;//特别不推荐使用键盘设置，浏览器自带的都有良好的效果
	}

}

function ShowPic(WhichPic){
	if (!document.getElementById("placeholder")) return false;
	var source = WhichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName !="IMG") return false;
	placeholder.setAttribute("src",source);
	if (document.getElementById("description")) {
		if (WhichPic.getAttribute("title")) {
			var text = WhichPic.getAttribute("title");
			var description = document.getElementById("description");
			if (description.firstChild.nodeType ==3) {
				description.firstChild.nodeValue = text;
			}
		}else{
			var text = "";
		}//var text = WhichiPic.getAttribute("title") ? WhichPic.getAttribute("title") : "";与这个if语句等同 语法：variable=condition ? if true : if false;
	}
	return true;
}

