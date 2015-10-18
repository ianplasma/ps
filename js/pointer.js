
var _x, _y

document.captureEvents(Event.MOUSEMOVE);
document.onmousemove = getMousePosition;

function getMousePosition(mp) {
	_x = mp.pageX;
	_y = mp.pageY;
	document.getElementById('cursor').style.top = (_y - 50)+ 'px';
	document.getElementById('cursor').style.left = (_x - 110)+ 'px';
	return true;
}

var a = true;

function mouseDown() {
	
	//hide intro text
	if (a) {
		document.getElementById('intro').style.opacity = '0';
		a = false;
	};
    
    //generate click text
	var div = document.createElement('div');
    var click = document.createTextNode('CLICK');
    div.appendChild(click);
    document.body.appendChild(div);

    //position click text div
	div.style.top = (_y - 150) + 'px';
	div.style.left = (_x - 190) + 'px';
	r = Math.floor(Math.random() * (10 + 11)) - 10;
	div.style.transform = 'rotate('+r+'deg)';
	div.style.webkitTransform = 'rotate('+r+'deg)';
}