(function(){
  var canvas = document.getElementById('canvas');
  var btn = document.getElementsByTagName('button')[0];
  var json = {}, num = 0;;

  window.addEventListener('load', setup, false);
  window.addEventListener('resize', setup, false);
  canvas.addEventListener('click', capture, false);
  canvas.addEventListener('click', capture, false);

  function setup(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function capture(e){
  	console.log(e.offsetX + ':' + e.offsetY);
  	json[num] = {x: e.offsetX, y: e.offsetY};
  	num++;
  }

})();