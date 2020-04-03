const remote = require('electron').remote
const {app} = remote

const Store = require('electron-store')
const store = new Store()

const ul = document.querySelector('ul')

const welcome = [
	{msg:'Welcome!',marked:0},
	{msg:'Click on + button',marked:0},
	{msg:'Write in box',marked:0},
	{msg:'Press Enter',marked:0}
]


if(store.get('notes')){
	let notes = store.get('notes')
	let t;

	notes.forEach((note)=>{
		t = document.createElement('li')
		t.classList = ['note']
		t.innerHTML = `<span><i class="fa fa-trash" ></i> </span>${note.msg}</span>`
		ul.append(t)
	})
}else{
	console.log('not set')
	welcome.forEach((note)=>{
		t = document.createElement('li')
		t.innerHTML = `<span><i class="fa fa-trash"></i> </span>${note.msg}</span>`
		ul.append(t)
	})
}



var closeApp = document.querySelector('#closeApp')

closeApp.addEventListener('click',e =>{
	arr = []
	el = document.querySelectorAll('.note')
	el.forEach((obj)=>{
		arr.push({msg:obj.innerText,marked:0});
	})
	store.delete('notes')
	store.set('notes',arr)
    app.quit()
})