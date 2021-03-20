const roomMap = document.getElementById("roomMap")
const ctx = roomMap.getContext('2d');
roomMap.addEventListener('click',move)
var me = {x:window.innerWidth/2,y:window.innerHeight/2,theta:3*Math.PI/2};

function move(event){
    me.theta = Math.atan2(event.clientY-me.y,event.clientX-me.x);
    me.x = event.clientX;
    me.y = event.clientY;
}
function draw(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.beginPath();
    ctx.arc(me.x,me.y, 20, 0, 2*Math.PI,1);
    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(me.x,me.y,25,me.theta+Math.PI/2,me.theta-Math.PI/2,1);
    ctx.stroke();
    ctx.globalCompositeOperation='destination-over';
    ctx.fillStyle = "white";
    ctx.fillRect(0,0, ctx.canvas.width,ctx.canvas.height);

    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
