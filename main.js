let mainVideoEl = document.getElementById('mainVideoEl');
navigator.getUserMedia(
	{video: true, audio: true},
	(stream) => {
		mainVideoEl.srcObject = stream;
		mainVideoEl.onloadedmetadata = (e) => {
			mainVideoEl.play();
		}
	},
	(error) => {
		console.log(error);
	}
);
