
//动态创建标记
//innerHTML

// function test(){
// 	var test = document.getElementById("testdiv");
// 	test.innerHTML="<p>there was change</p>";
// }
// addLoadEvent(test); 测试函数

// function para() {
// 	var para = document.createElement("p");
// 	var info = "nodeName: "
// 	info += para.nodeName;
// 	info += " nodeType: ";
// 	info += para.nodeType;
// 	alert(info);
// }
// addLoadEvent(para); //测试createElement

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

addLoadEvent(addE);

 function addE(){
	var para = document.createElement("p");
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
	var text = document.createTextNode("hello_world")
	para.appendChild(text);
}
