//元素的下一个兄弟元素添加theclass类
function styleElementSiblings(tag,theclass){
	if (!document.getElementsByTagName) return false;
	var elems = document.getElementsByTagName(tag);
	var elem;
	for (var i = 0; i < elem.length; i++) {
		elem = document.getNextElement(elem[i].nextSibling);
		addClass(elem,theclass);
	}
}