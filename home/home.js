

$(document).ready(function(){ 

	$("#p-a1").mouseleave(function(){

		funcScale0("#p-span1");
	});	
	 
	$("#p-a1").mouseover(function(){

		funcScale1("#p-span1");
	});

	$("#p-a2").mouseleave(function(){

		funcScale0("#p-span2");
	});	
	 
	$("#p-a2").mouseover(function(){

		funcScale1("#p-span2");
	});

	$("#p-a3").mouseleave(function(){

		funcScale0("#p-span3");
	});	
	 
	$("#p-a3").mouseover(function(){

		funcScale1("#p-span3");
	});

	$("#p-a4").mouseleave(function(){

		funcScale0("#p-span4");
	});	
	 
	$("#p-a4").mouseover(function(){

		funcScale1("#p-span4");
	});
	
	
    $("div.img-1").animate({opacity:"1"},2000);  
    $("h1.des-h1").css({"transform":"rotateX(0)"});
    $("div.description").children("p.des-p2").animate({top:"-=100px"},2000);
    $("div.description").children("p.des-p3").animate({top:"-=100px"},2500);
   
});

function funcScale0(char){
	$(char).css({"transform":"scale(0)"});
}
function funcScale1(char){
	$(char).css({"transform":"scale(1)"});
}
    	
        
   


