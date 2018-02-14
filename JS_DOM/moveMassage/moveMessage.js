//setTimeout("function",interval)     写法  inerval是以毫秒为单位
// variable = setTimeout("function",interval); 一般为setTimeout 设置为一个变量;
function positionMessage(){
	//创建一个p 并添加文本 要注意变量名不用添加引号-在create等方法中
	if (!document.createTextNode) return false;
	if (!document.createElement) return false;
	para = document.createElement("p");
	para.setAttribute("id","message");
	txt = "Where";
	text = document.createTextNode(txt);
	para.appendChild(text);
	document.body.appendChild(para);

	// para.style.fontSize = "3em";  测试para是否能引用
	
	para.style.position = "absolute";
	para.style.left = "50px";
	para.style.top = "100px";
	moveElement("message",200,250,1);//5s后调用moveMessage

}
addLoadEvent(positionMessage);

//动画
// function moveMessage(){
// 	if (!document.getElementById) return false;
// 	if (!document.getElementById("message")) return false;
// 	var elem = document.getElementById("message");
// 	var xpos = parseInt(elem.style.left);//parseFloat 是转换为浮点数，parseInt是转换为整数  即50px——50
// 	var ypos = parseInt(elem.style.top);
// 	//判定是否当前位置为目的地
// 	if (xpos == 200 && ypos == 100) {
// 		return true
// 	}
// 	if(xpos<200){
// 		xpos++;
// 	}
// 	if(xpos>200){
// 		xpos--;
// 	}
// 	if(ypos<250){
// 		ypos++;
// 	}
// 	if(ypos>250){
// 		ypos--;
// 	}
// 	elem.style.left = xpos + "px";
// 	elem.style.top = ypos + "px";
// 	movement = setTimeout("moveMessage()",10);
// }

//x-y轴同步移动   抽象化
function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	var xpos = parseInt(elem.style.left);//parseFloat 是转换为浮点数，parseInt是转换为整数  即50px——50
	var ypos = parseInt(elem.style.top);
	//判定是否当前位置为目的地
	if (xpos == 200 && ypos == 100) {
		return true
	}
	if(xpos<final_x){
		xpos++;
	}
	if(xpos>final_x){
		xpos--;
	}
	if(ypos<final_y){
		ypos++;
	}
	if(ypos>final_y){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// clearTimeout("movement");return;//取消待执行的函数
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y+","+interval+")" 
	movement = setTimeout(repeat,interval);

}
