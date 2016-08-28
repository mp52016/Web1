var pos = new Array();
var posOri = new Array();
var num=4;
var t1=500;

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

   $("#img1").mouseleave(function(){
      funcStopR(1);
      funcStopL(1);
   }); 
   $("#img2").mouseleave(function(){
      funcStopR(2);
      funcStopL(2);
   });  
   $("#img3").mouseleave(function(){
      funcStopR(3);
      funcStopL(3);
   }); 
   $("#img4").mouseleave(function(){
      funcStopR(4);
      funcStopL(4);
   });   
	
    
});

function funcR(m){
 
    for(var i=m+1;i<=num;i++)
    {
       var char="#img"+i;      
       $(char).animate({"left":pos[i]},t1);
    }    
   
}

function funcL(m){    
    
       var char="#img"+m;      
       $(char).animate({"left":posOri[m]},t1);      
   
}

function funcOri(){
 
    for(var i=1;i<=num;i++)
    {
       var char="#img"+i;      
       $(char).animate({"left":posOri[i]},t1);
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

function funcStopR(m){
 
    for(var i=m+1;i<=num;i++)
    {
       var char="#img"+i;      
       $(char).stop();
    }    
   
}

function funcStopL(m){    
    
       var char="#img"+m;      
       $(char).stop();      
   
}