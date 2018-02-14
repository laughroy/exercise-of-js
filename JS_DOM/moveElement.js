//x-y轴同步移动   抽象化
function moveElement(elementID,final_x,final_y,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	
	var elem = document.getElementById(elementID);
	if (elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left = "0";
	}
	if(!elem.style.top){
		elem.style.top = "0";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist = 0;
	if(xpos == final_x && ypos == final_y){
		return true;
	}
	if(xpos < final_x){
		dist = Math.ceil((final_x-xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x){
		dist = Math.ceil((final_x-xpos)/10);
		xpos = xpos - dist;
	}
	
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	// clearTimeout("movement");return;//取消待执行的函数
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y+","+interval+")" 
	elem.movement = setTimeout(repeat,interval);

}