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
