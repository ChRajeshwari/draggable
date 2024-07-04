const btn=document.querySelector(".btn");
const bottom=document.querySelector(".bottom");
const sheet=document.querySelector(".sheet");
const icon=document.querySelector(".icon");
const content=document.querySelector(".content");

let isDragging=false,startY,startHeight;


btn.addEventListener("click",function(){
    bottom.classList.add("show");
    updateSheetHeight(50);
    
})

const updateSheetHeight=(height) =>{
    content.style.height=`${height}vh`;
    bottom.classList.togglt("fullscreen",height===100);
}
sheet.addEventListener("click", function(){
    bottom.classList.remove("show");
})
document.addEventListener("mousemove",function(e){
    if(!isDragging) return;
    const delta=startY-e.pageY;
    const newHeight=startHeight+delta/window.innerHeight*100;
    updateSheetHeight(newHeight);

})

icon.addEventListener("mousedown",function(e){
    isDragging=true;
    startY= e.pageY;
    startHeight=parseInt(content.style.height);
    bottom.classList.add("dragging");
})

document.addEventListener("mouseup", function(){
isDragging=false;
bottom.classList.add("dragging");
})
