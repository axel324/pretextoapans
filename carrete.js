<script>
	var i = 0; // Start point
	var images = [];
	var time = 3000;

	// Image List
	images[0] = 'multimedia/carrete/prete.png';
	images[1] = 'multimedia/carrete/preterose.jpg';
	images[2] = 'multimedia/carrete/preteb.jpg';
	images[3] = 'multimedia/carrete/pretew.jpg';
	images[4] = 'multimedia/carrete/pretebu.jpg';
	images[5] = 'multimedia/carrete/pretefu.jpg';
	images[6] = 'multimedia/carrete/preteh.jpg';
	images[7] = 'multimedia/carrete/pretef.png';

	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length - 1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;
</script>