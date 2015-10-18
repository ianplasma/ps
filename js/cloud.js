var div = document.getElementById('cloud');
var pu_count = 0;
var pl_count = 0;
var plantTimer = 0;
var gone = 0;
var id_count = 0;

window.onload = addListeners();

function stepDiv(){
  if (gone == 0){
    var cur_left = div.style.left;
    var new_left = parseInt(cur_left, 10);
    new_left += 1;
    div.style.left = new_left + 'px';
  }
};

function addPuddle(){

  //still plants to water?
  if (pl_count < 30) {
  var pu_div = document.createElement('div');
  pu_div.setAttribute('id', pu_count);
  var puddle = document.createElement('img');
  puddle.setAttribute('class', 'puddle');
  puddle.src = '../img/puddle.png';
  pu_div.style.top = (parseInt(div.style.top, 10) - 75) + 'px';
  pu_div.style.left = parseInt(div.style.left, 10) + 'px';
  pu_div.appendChild(puddle);
  document.body.appendChild(pu_div);
  pu_count += 1;

    //add grass
    addGrass();

  } else {
    if (gone == 0){
      setTimeout(function(){
        document.getElementById('rain').setAttribute('class', 'not_raining');
        setTimeout(function(){document.getElementById('cloud').classList.add('fade');}, 3000);
        setTimeout(function(){document.getElementById('cloud').setAttribute('class', 'gone'); gone = 1;}, 9500);
        ;}, 2000);
    }
  }
  dryUp();
};

function dryUp() {
  if (pu_count > 100){
      var old_p = document.getElementById(id_count);
      if (pu_count > id_count){
        document.body.removeChild(old_p);
        id_count += 1;
      }
  }
}

function addGrass(){
  if ((pu_count % 3) == 0) {
    //add grass
    var g_div = document.createElement('div');
    var grass = document.createElement('img');
    grass.setAttribute('class', 'grass grow');
    grass.src = '../img/grass.png';
    var r = Math.floor((Math.random() * 20) - 20);
    g_div.style.top = (parseInt(div.style.top, 10) + r + 160) + 'px';
    g_div.style.left = parseInt(div.style.left, 10) + (r + 20) + 'px';

    setTimeout(function(){
      g_div.appendChild(grass);
      document.body.appendChild(g_div);
    }, 5000);
  }

  if ((pu_count % 2) == 0) {
    //add high grass
    var hg_div = document.createElement('div');
    var hi_grass = document.createElement('img');
    hi_grass.setAttribute('class', 'higrass higrow');
    hg_div.setAttribute('class', 'hipulse');
    var r = Math.floor((Math.random() * 20) - 20);
    hg_div.style.top = parseInt(div.style.top, 10) + (r*2) + 190 + 'px';
    hg_div.style.left = parseInt(div.style.left, 10) + (r + 30) + 'px';

    setTimeout(function(){
      hg_div.appendChild(hi_grass);
      document.body.appendChild(hg_div);
      hi_grass.src = '../img/hi_grass.gif';
    }, 10000);
  }
}

function addPlant(){
  if (pl_count < 30) {
    var plant = document.createElement('img');
    var pl_div = document.createElement('div');

    //flip some plants
    var bool = Math.floor(Math.random() * 2);
    var plant_class = "";
    if (bool == 0){plant_class = "flip plant";} else {plant_class = "plant";};

    //rotate the plant div
    var r = Math.floor((Math.random() * 30) - 30);
    pl_div.style.transform = 'rotate('+r+'deg)';
    pl_div.style.webkitTransform = 'rotate('+r+'deg)';
    pl_div.setAttribute('class', 'plant');

    plant.src = '../img/plants/plant'+pl_count+'.gif';
    plant.setAttribute('class', plant_class);
    pl_div.style.top = parseInt(div.style.top, 10) + r + 110 + 'px';
    pl_div.style.left = parseInt(div.style.left, 10) + 'px';

    setTimeout(function(){
      pl_div.appendChild(plant);
      document.body.appendChild(pl_div);
    }, 15000);

    pl_count += 1;
  }
}

setTimeout(function(){document.getElementById('rain').setAttribute('class', 'raining');}, 1000);
setInterval(function(){stepDiv();}, 50);

setTimeout(function(){
setInterval(function(){addPuddle();}, 500);
}, 1500);

setTimeout(function(){
(function loop() {
    var rand = Math.round(Math.random() * (5000 - 500)) + 500;
    setTimeout(function() {
            addPlant();
            loop();  
    }, rand);
}());
}, 2000);

function addListeners(){
    document.getElementById('cloud').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp(){
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
  div.style.left = (e.clientX - 160) +'px';
  div.style.top = (e.clientY - 90) + 'px';
}

function divMove(e){
  div.style.left = (e.clientX - 160) +'px';
  div.style.top = (e.clientY - 90) + 'px';
}


