const roomMap = document.getElementById("roomMap")
const ctx = roomMap.getContext('2d');


function draw(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.beginPath();
    ctx.arc(window.innerWidth/2,window.innerHeight/2, 35, 0, 2*Math.PI,1);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fill();
    
    ctx.globalCompositeOperation='destination-over';
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0, ctx.canvas.width,ctx.canvas.height);

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
