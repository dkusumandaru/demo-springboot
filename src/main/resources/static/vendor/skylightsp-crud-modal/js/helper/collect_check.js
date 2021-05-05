function collect(value){
	var results = [];

	$('#'+value+'-crud-content input').each(function(){
	    results.push({
	        id: this.id,
	        value: this.value
	    });
	});

	$('#'+value+'-crud-content select').each(function(){
	    results.push({
	        id: this.id,
	        value: this.value
	    });
	});

	$('#'+value+'-crud-content textarea').each(function(){
	    results.push({
	        id: this.id,
	        value: this.value
	    });
	});

	return results;
}