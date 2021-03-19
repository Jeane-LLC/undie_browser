const roomMap = document.getElementById("roomMap")
const ctx = roomMap.getContext('2d');

function draw(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;


    ctx.globalCompositeOperation='destination-over';
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0, ctx.canvas.width,ctx.canvas.height);

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
