var page=1;
var num=3;

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

    funcPage();
    funcNum();

    $("#prev").click(function(){
 	    funcPrev();
 	    funcPage();
 	    funcNum();
    });
    $("#next").click(function(){
 		funcNext();
 		funcPage();
 		funcNum();
    });

    $("#content-0").mouseenter(function(){
    	$("div.swiper-button").css({"opacity":"0.2"}); 
    });
    $("#content-0").mouseleave(function(){
    	$("div.swiper-button").css({"opacity":"1"}); 
    });

    $("#swiper-span1").click(function(){
    	page=1;
    	funcPage();
    	funcNum();
    });
    $("#swiper-span2").click(function(){
    	page=2;
    	funcPage();
    	funcNum();
    });
    $("#swiper-span3").click(function(){
    	page=3;
    	funcPage();
    	funcNum();
    });
});

function funcScale0(char){
	$(char).css({"transform":"scale(0)"});
}
function funcScale1(char){
	$(char).css({"transform":"scale(1)"});
}
    	
function funcZ(m){
 
    for(var i=1;i<=num;i++)
    {
       var char="#swiper-"+i;
       $(char).css({"z-index":"0"});
    }

    var char1="#swiper-"+m;
    $(char1).css({"z-index":"1"});
   
}

function funcNext(){

    page+=1;
    if(page==4)
    {
    	page=1;
    }
}

function funcPrev(){

    page-=1;
    if(page==0)
    {
    	page=3;
    }
}

function funcPage(){

  switch(page)
  {
  	case 1:
  	  funcZ(1);
  	  break;
  	case 2:
  	  funcZ(2);
  	  break;
  	case 3:
  	  funcZ(3);
  	  break;
  	default:
  	  funcZ(1);
  	  break;
  } 
}        

function funcNum(){
	switch(page)
	{
		case 1:
			funcO(1);
			break;
        case 2:
			funcO(2);
			break;
		case 3:
			funcO(3);
			break;
		default:
			funcO(1);
			break;    
	}
}

function funcO(n){
 
    for(var i=1;i<=num;i++)
    {
       var char="#swiper-span"+i;
       $(char).css({"opacity":"1"});
    }

    var char1="#swiper-span"+n;
    $(char1).css({"opacity":"0.5"});
   
}



