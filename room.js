const roomMap = document.getElementById("roomMap")
const ctx = roomMap.getContext('2d');


window.addEventListener('resize',render)

function render(){
    ctx.canvas.width = window.innerwidth;
    ctx.canvas.height = window.innerHeight;
}

render();
