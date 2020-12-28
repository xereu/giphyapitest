$(function() {
	// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=nintendo&api_key=&limit=1");
	const apiKey = 'gdwjphWDU038gRbOZBeOX0oNWQZEdPGM'
	fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5`)
	  .then(response => response.json())
	  .then(json => {
	    json.data
	      .map(gif => gif.images.fixed_height.url)
	      .forEach(url => {
	        let img = document.createElement('img')
	        img.src = url
	        document.body.appendChild(img)
	      });
	  }).catch(error => document.body.appendChild = error);
});