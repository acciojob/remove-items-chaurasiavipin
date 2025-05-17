//your JS code here. If required.
const select=document.getElementById("coloSelect");
const buttm=document.getElementByTagName("input");
buttm.addEventListener("change", deletElement)
function deletElement() {
	let index=select.selectedIndex;
	if(index>=0){
		select.remove(index);
	}
		
}
	
}