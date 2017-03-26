var url="https://api.github.com/users/abdalkalk/repos?sort=pushed&per_page=5"

     
$(document).ready(function(){
	$("#a").click(function(){
    $.get(url, function(data){
        $.each(data,function(key,v){

                 console.log(v.name)
        })
            });
});

})




