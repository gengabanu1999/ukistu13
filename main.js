SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
// jilla	
 SC.stream('/tracks/125240235',function(sound){ 

 $('#start0').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop0').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
		 
 });


// bigil
 SC.stream('/tracks/652012811',function(sound){ 

 $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
		 
 });




//Alaipayuthey -Snehithane	
 SC.stream('/tracks/497505642',function(sound){ 

 $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
		 
 });


//Kannodu Kanbathellam - Jeans
	
 SC.stream('/tracks/693696028',function(sound){ 

 $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
		 
 });


//Kuluvalile

	
 SC.stream('/tracks/693696028',function(sound){ 

 $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

$('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
		 
 });







}); 