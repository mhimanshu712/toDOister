$("ul").on('click','li',function(){
	$(this).toggleClass('completed');
});

//Remove Span elements
$("ul").on('click','span',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(200,()=>{
		$(this).remove();
	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Grabbing new todo text
		var todoText = $(this).val();
		
		//Create a new list element
		$('ul').append("<li><span><i class='fa fa-trash' ></i> </span>"+todoText+"</li>");

		//Delete text
		$(this).val("");

		//Change key icon
	}
});

$('.fa-plus').click(function(){
	$('input[type="text"]').fadeToggle();
});


$('input[type="text"]').fadeToggle();

$('.fa').click(function(){
	$(this).toggleClass('fa-minus');
	$(this).toggleClass('fa-plus');
})