function random_bg_color() {
	var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    
	var rgbColor = "rgb(" + x + "," + y + "," + z + ")";
	
	return rgbColor;
}

function solo_numeros() 
{
	if ((event.keyCode < 48)||(event.keyCode > 57)){
		event.returnValue=false;
		event.cancel = true;
		if (event.preventDefault) {
			event.preventDefault();
		}
	}
}

function fRectangulo(pcanvas){
	var ctx = pcanvas.getContext("2d");

	ctx.beginPath();
	ctx.rect(Math.floor(Math.random() * 400) + 10, Math.floor(Math.random() * 400) + 10, Math.floor(Math.random() * 400) + 10, Math.floor(Math.random() * 400) + 10);
	ctx.fillStyle=random_bg_color();
	ctx.fill();
	ctx.closePath();
}
