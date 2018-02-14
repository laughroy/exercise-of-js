//倒计时
function addInput(){
	var inputClick = document.createElement("input");
	inputClick.setAttribute("type","button");
	inputClick.setAttribute("value","点击倒计时");
	var inputTimes = document.createElement("input");
	inputTimes.setAttribute("type","text");
	inputTimes.setAttribute("id","text");
	inputTimes.setAttribute("value","33"); 
	document.body.append(inputClick);
	document.body.append(inputTimes);
	inputClick.onclick = function(){
		inputTimes.value = document.getElementById("text").value;
		setTimeout("countTimes()",1);
	}
}
addLoadEvent(addInput);

var times = document.getElementById("text").value;
function countTimes (){
	document.getElementById("text").value = times;
	if (times > 0){
	times = times - 1;
	}

	setTimeout("countTimes()",1000);
}