//your JS code here. If required.
const select=document.getElementById("coloSelect");
select.addEventListener("change",deletElement)
function deletElement() {
	let index=select.selectedIndex;
	if(index>=0){
		select.remove(index)
	}
	
		
	
	
}