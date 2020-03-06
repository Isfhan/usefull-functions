// I call this function when a delete ajax request succeuffly complete

function onDeleteCompleteReload()
{
	var proxied = window.XMLHttpRequest.prototype.send;
	window.XMLHttpRequest.prototype.send = function() {
		//console.log( arguments );
		//Here is where you can add any code to process the request. 
		//If you want to pass the Ajax request object, pass the 'pointer' below
		var pointer = this
		var intervalId = window.setInterval(function(){
				if(pointer.readyState != 4){
						return;
				}
				var url = pointer.responseURL;
				//console.log(url,url.includes("ajaxDeleteArticleCart"),"isf test");
				//console.log( pointer.responseText );
				if(url.includes("ajaxDeleteArticleCart") && pointer.status == 200)
				{
					location.reload();
				}
				
				//console.log(pointer,"this is pointer");
				//Here is where you can add any code to process the response.
				//If you want to pass the Ajax request object, pass the 'pointer' below
				clearInterval(intervalId);

		}, 1);//I found a delay of 1 to be sufficient, modify it as you need.
		return proxied.apply(this, [].slice.call(arguments));
	};
}
