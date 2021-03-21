const clickLayer = document.getElementById("clickLayer")
const ctx = clickLayer.getContext('2d');
clickLayer.addEventListener('click',move);
var regl = createREGL({extensions:["ANGLE_instanced_arrays"]});

function Player(x,y,theta){
    this.x = x
    this.y = y
    this.theta = theta
    this.position = [x,y,0.0]
}


var me = new Player(0,0,2*Math.PI);
var players = [me];

function move(event){
    me.theta = Math.atan2(event.clientY-me.y,event.clientX-me.x);
    me.x = event.clientX/ctx.canvas.width - 1.0;
    me.y = event.clientY/ctx.canvas.height -1.0;
}
function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    
    window.requestAnimationFrame(resize);
}

window.requestAnimationFrame(resize);

const NUM_POINTS = 1;
const VERT_SIZE = 4 * (4 + 4 + 3)

const pointBuffer = regl.buffer(Array(NUM_POINTS).fill().map(function () {
    const color = [255,128,255];
  return [
    // freq
    1,
    1,
    1,
    1,
    // phase
    2.0 * Math.PI * Math.random(),
    2.0 * Math.PI * Math.random(),
    2.0 * Math.PI * Math.random(),
    2.0 * Math.PI * Math.random(),
    // color
    color[0] / 255, color[1] / 255, color[2] / 255
  ]
}))

Player.prototype.draw = regl({
  vert: `
  precision mediump float;
  attribute vec4 freq, phase;
  attribute vec3 color;
  attribute vec3 position;
  uniform float time;
  varying vec3 fragColor;
  void main() {
    gl_PointSize = 44.0;
    gl_Position = vec4(position, 0);
    fragColor = color;
  }`,

  frag: `
  precision lowp float;
  varying vec3 fragColor;
  void main() {
    if (length(gl_PointCoord.xy - 0.5) > 0.5) {
      discard;
    }
    gl_FragColor = vec4(fragColor, 1);
  }`,

  attributes: {
    freq: {
      buffer: pointBuffer,
      stride: VERT_SIZE,
      offset: 0
    },
    phase: {
      buffer: pointBuffer,
      stride: VERT_SIZE,
      offset: 16
    },
    color: {
      buffer: pointBuffer,
      stride: VERT_SIZE,
      offset: 32
    },
      position: function(context,props){
	  return [[props.x,1],[props.y,1],[0.0,1]]
      },
  },

  uniforms: {
    view: ({tick}) => {
      const t = 0.01 * tick
	return [0,0,0,0];
    },
    projection: ({viewportWidth, viewportHeight}) =>
      [0,0,0,0],
    time: ({tick}) => tick * 0.001
  },

  count: NUM_POINTS,

  primitive: 'points'
})


regl.frame(function () {
  regl.clear({
      color: [0, 0, 0, 1],
      
  });
    for(const player of players){
	player.draw({
	    x:1.0,
	    y:0.0,
	    theta:Math.PI
	});
    }
})

