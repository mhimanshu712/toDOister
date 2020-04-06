let mystore = window.localStorage;
window.onload = ()=>{
	if(mystore.getItem('notes')){
		let notes = mystore.getItem('notes');
		notes = JSON.parse(notes);
		console.log('Notes: ',notes)
		let ul = document.querySelector('ul');
		notes.forEach((note)=>{
			let n = document.createElement('li');
			n.classList = ['note'];
			if(note.checked) n.classList.add('completed')
			n.innerHTML = `<span><i class='fa fa-trash' ></i> </span> ${note.msg}`;
			ul.append(n);
		});
	}
}

$("ul").on('click','li',function(){
	$(this).toggleClass('completed');
	saveState();
});

//Remove Span elements
$("ul").on('click','span',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(200,()=>{
		$(this).parent().remove();
		saveState();
	});
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$('ul').append("<li class='note'><span><i class='fa fa-trash' ></i> </span>"+todoText+"</li>");
		$(this).val("");

		saveState();
	}
});

$('.fa-plus').click(function(){
	$('input[type="text"]').fadeToggle();
});


$('input[type="text"]').fadeToggle();

$('.fa').click(function(){
	$(this).toggleClass('fa-minus');
	$(this).toggleClass('fa-plus');
});

function saveState(){
	let notes = document.querySelectorAll('.note');
	let arr = [];

	notes.forEach((note)=>{
		let t = 0;
		if(note.classList[1] == "completed") t=1;
		let temp = {msg:note.innerText,checked:t};
		arr.push(temp);
	});
	arr = JSON.stringify(arr);
	mystore.removeItem('notes');
	mystore.setItem('notes',arr);
}

$('#closeApp').click(()=>{
	saveState();
	window.close();
});

