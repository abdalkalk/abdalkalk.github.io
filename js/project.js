var url="https://api.github.com/users/abdalkalk/repos?sort=pushed&per_page=5"


$(document).ready(function(){
	$("#a").click(function(){
		$.get(url, function(data){
			$.each(data,function(key,v){
				var date=new Date(v.created_at);

				$(`h2`).append("<li>"+v.name+"</li>"+"<li>Created at: "+formatDate(date)+"</li><br>")



			})
		});
	});

})

function formatDate(date) {
	var monthNames = [
	"January", "February", "March",
	"April", "May", "June", "July",
	"August", "September", "October",
	"November", "December"
	];

	var day = date.getDate();
	var monthIndex = date.getMonth();
	var year = date.getFullYear();

	return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
