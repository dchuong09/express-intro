console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	$.ajax({
	  method: 'GET',
	  url: 'http://localhost:3000/api/albums',
	  success: handleSuccess,
	  error: handleError
	});

	function handleSuccess(json) {
	  json.forEach(function(album) {
	  	console.log(album.title);
	  	$('.container').append(`<p>${album.title}</p>`)
	  })
	}

	function handleError(xhr, status, errorThrown) {
	  console.log('uh oh');
	}


	$.ajax({
	  method: 'GET',
	  url: 'http://localhost:3000/api/taquerias',
	  success: handleSuccesss,
	  error: handleError
	});

	function handleSuccesss(json) {
	  json.forEach(function(taqueria) {
	  	console.log(taqueria.name);
	  	$('.container').append(`<p>${taqueria.name}</p>`)
	  })
	}

	function handleError(xhr, status, errorThrown) {
	  console.log('uh oh');
	}
});
