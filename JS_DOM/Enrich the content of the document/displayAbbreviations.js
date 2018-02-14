//取得abbr属性并在下方添加列表
function displayAbbreviations(){
	if (!document.getElementsByTagName || !document.createTextNode || !document.createElement) return false;
	//取得所有注释
	var abbreviations = document.getElementsByTagName("abbr");
	if (abbreviations.length<1) return false;
	var defs = new Array();
	//遍历缩略词
	for (var i = 0;i<abbreviations.length;i++){
		var current_abbr = abbreviations[i]
		if (current_abbr.childNodes.length<1) continue;//为了保证在ie低版本运行；否则浏览器报错 返回0
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key]= definition;
	}
	//创建定义列表
	var dlist = document.createElement("dl");
	//遍历定义
	for (key in defs){
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把标题和描述插入列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length<1) return false;
	//创建定义列表名称
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);	// document.getElementsByTagName("body")[0]  这两种方式都能引用body元素一个是DOM，下面的是HTML-DOM 
	//document.body

	//把标题和列表插入到html文档
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskey);

//取得cite属性并插入
function displayCitations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//取得所有引用
	var quotes = document.getElementsByTagName("blockquote");
	//遍历引用
	for (var i = 0; i < quotes.length; i++) {
		//如果没有cite属性继续循环
		if (!quotes[i].getAttribute("cite")) continue;
		//保存cite属性
		var url = quotes[i].getAttribute("cite");
		//取得所有引用中的元素节点
		var quoteChildren = quotes[i].getElementsByTagName("*");
		//如果没有元素节点，继续循环
		if(quoteChildren.length<1)continue;
		//取得引用的最后一个元素节点
		var elem = quoteChildren[quoteChildren.length-1];
		//创建标记
		var link = document.createElement("a");
		link.setAttribute("id","soc");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		//将标记添加到引用中的组后一个元素节点后面
		elem.appendChild(superscript);
		var Links = document.getElementsByTagName("a");	
		//取得所有a元素，设定在新窗口中打开
		for (var i = 0; i < Links.length; i++) {
				Links[i].onclick = function(){
					return outLink(this);
				}
			Links[i].onkeypress = Links.onclick;
			}
	}
}

//新建窗口打开链接
function outLink(URL){
	window.open(URL,"height=300","width=400");
	return false;
}

//设置快捷键及添加快捷键列表
function displayAccesskey(){
	var links = document.getElementsByTagName("a");
	var akeys = new Array();
	for (var i = 0; i < links.length; i++) {
		var current_link = links[i];
		if (!current_link.getAttribute("accesskey")) continue;
		var key = current_link.getAttribute("accesskey");
		var text = current_link.lastChild.nodeValue;
		akeys[key] = text;
	}
	var list = document.createElement("ul");
	for (key in akeys){
		var text = akeys[key];
		var str = "快捷键访问链接" + "alt" + "+" + key +":"+ text;
		var item = document.createElement("li");
		var item_text = document.createTextNode(str);
		item.appendChild(item_text);
		list.appendChild(item);
	}
	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	document.body.appendChild(header);
	document.body.appendChild(list);
}

