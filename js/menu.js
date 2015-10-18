function hamburger() {
var a = document.getElementById('drawer-toggle-label').innerHTML
if (a == '<img src="img/hamburger.png" class="hamburger" title="OPEN MENU">') {
	document.getElementById('drawer-toggle-label').innerHTML = '<img src="img/close.png" class="close" title="CLOSE MENU">';
} else {
	document.getElementById('drawer-toggle-label').innerHTML = '<img src="img/hamburger.png" class="hamburger" title="OPEN MENU">';
  }
}

function hamburgeretc() {
var a = document.getElementById('drawer-toggle-label').innerHTML
if (a == '<img src="../img/hamburger.png" class="hamburger" title="OPEN MENU">') {
	document.getElementById('drawer-toggle-label').innerHTML = '<img src="../img/close.png" class="close" title="CLOSE MENU">';
} else {
	document.getElementById('drawer-toggle-label').innerHTML = '<img src="../img/hamburger.png" class="hamburger" title="OPEN MENU">';
  }
}