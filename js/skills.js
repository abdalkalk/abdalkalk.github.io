$(document).ready(function(){
	$.getJSON('./skills.json',function(i){
		$.each(i.abd,function(d){
			$(`h2`).append("<li>"+i.abd[d]+"</li>")
		})
	})
})