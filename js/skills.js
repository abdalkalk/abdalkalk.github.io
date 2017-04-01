$(document).ready(function(){
	$.getJSON('./skills.json',function(i){
		var str='<ul>';
		$.each(i.skills,function(d,skill){
			str+="<li><i class='"+skill.cssclass+"'></i>"  +skill.name + " :"+skill.description+"</li>"
		})
		str+='</ul>';

		$('#skills').append(str)
	})
})


//str+="<li><i class='"+skill.cssclass+"'>" + "<h4>" +skill.name + "</h4>" +"</li>"



