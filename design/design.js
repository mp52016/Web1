var pos = new Array();
var posOri = new Array();
var num=4;

$(document).ready(function(){ 

	 funcPos();

   $("#img1").mouseenter(function(){
      funcR(1);
      funcL(1);
   });
   $("#img2").mouseenter(function(){
      funcR(2);
      funcL(2);
   });
   $("#img3").mouseenter(function(){
      funcR(3);
      funcL(3);
   });
   $("#img4").mouseenter(function(){
      
      funcL(4);
   });

   $("#poker").mouseleave(function(){
      funcOri();
   });  
    
   
	
    
});

function funcR(m){
 
    for(var i=m+1;i<=num;i++)
    {
       var char="#img"+i;      
       $(char).animate({"left":pos[i]},500);
    }    
   
}

function funcL(m){    
    
       var char="#img"+m;      
       $(char).animate({"left":posOri[m]},500);      
   
}

function funcOri(){
 
    for(var i=1;i<=num;i++)
    {
       var char="#img"+i;      
       $(char).animate({"left":posOri[i]},500);
    }    
   
}

function funcPos(){

    for(var i=1;i<=num;i++)
    {
       var char="#img"+i;       
       var char1=$(char).css("left");
       posOri[i]=char1;
       var int1=parseInt(char1);
       var int2=int1+250;
       var char2= int2+"px";       
       pos[i]= char2;       
    }   
}



