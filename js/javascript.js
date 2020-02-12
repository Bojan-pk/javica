
//alert('radi');
//document.write('text...: DOMString');
//document.getElementById('pisi').innerHTML='Hello';

function koren (x) {

	return Math.sqrt(x);

}


var x=prompt('Unesi x', 'mora biti broj');

document.getElementById('pisi').innerHTML=('Koren broja '+x+' je '+koren(x));
