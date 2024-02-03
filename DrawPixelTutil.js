
class PixelArt {
  constructor(content){
    this.canvas = document.getElementById(content);
    this.cxt = this.canvas.getContext("2d");
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.data = new Map();
    this.data.set("x", new Map());
    this.data.set("y", new Map());
   this.color = "back"
   this.size = 25;
   this.data.set("frame", {
     block : this.w / this.size,
     w : this.size,
     h : this.size
   });
   this.borrar = false;
  };
  
Draw(){
d(this.cxt,this.data);
this.OnTouch((ev)=>{
  g(this.cxt, this.data, {
    x : ev.x - this.data.get("frame"). block * 3,/**/
    y: ev.y - this.data.get("frame"). block,/**/
  }, this.color, this.borrar)
});
function g(cxt, data, pulsar, color, isb){
//  console.log(pulsar);
  let tal = {
    size :data.get("frame").block 
    
  }
  if(pulsar.x <= 0)
    tal.x = 0;
  if (pulsar.y <= 0)
     tal.y = 0;
  for(let x in [...data.get("x")]){
	if([...data.get("x")][x][1] > pulsar.x && [...data.get("x")][kk(x, pulsar.x)][1] < pulsar.x){
	  tal.x = [...data.get("x")][x][1];
	}
  }
		for(let y in [...data.get("y")]){
			if([...data.get("y")][y][1] > pulsar.y && [...data.get("y")][kk(y, pulsar.y)][1] < pulsar.y){
tal.y =  [...data.get("y")][y][1];
//console.log(tal.x, x)

			}
}
if(isb){
  cxt.clearRect(tal.x, tal.y, tal.size, tal.size);
 draw(cxt, tal)
}else{
dP(cxt,tal, color)
}
}
function kk(a, b){
  return b <= 0? a : a -1;
}
function dP(cxt, attrs, color){
cxt.beginPath();
cxt.fillStyle = color;
cxt.strokeStyle = "#827659";
cxt.fillRect(
  attrs.x,
  attrs.y, 
  attrs.size,
  attrs.size
);
cxt.strokeRect(
  attrs.x,
  attrs.y, 
  attrs.size,
  attrs.size
);
cxt.stroke();
}
function d(cxt, data){
 
  var frame = data.get("frame")
  for(let x = 0; x < frame.w; x++){
	for(let y = 0; y < frame.h; y++){
		if(!data.get("x").has(x))
			data.get("x").set(x, x * frame.block);
		if(!data.get("y").has(y))
		 data.get("y").set(y, y * frame.block);
		 
		 draw(cxt, {
		   x : x * frame.block,
		   y : y * frame.block,
		   size : frame.block
		 })
		}
}
}
function draw(cxt, attrs){
cxt.beginPath();
cxt.fillStyle = "#2B2E3C";
cxt.strokeStyle = "#827659";/*
cxt.fillRect(
attrs.x + iw * attrs.dimen, 
attrs.y + ih * attrs.dimen, 
attrs.dimen, attrs.dimen);/**/
cxt.strokeRect(
attrs.x , 
attrs.y, 
attrs.size, attrs.size);
cxt.stroke();/***/
};
}
OnTouch(callback){
this.canvas.ontouchmove = function(ev){
		ev.preventDefault();
		var th = ev.touches[0];
		var th2 = ev.touches[1];
		var mv  = {};
		var scal=false;
		if(!th2){
	mv	= {
			x : th.pageX ,//- bb.left,
			y : th.pageY// - bb.top
		}
		scal = false;
		}else{
		 scal = true;
		}
		callback(mv,scal);
		};
		this.canvas.onclick = function(e){
		var ev = {
			x : e.pageX ,
			y : e.pageY
			};
				callback(ev);
			}
}
}