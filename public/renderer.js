const remote = require('electron').remote
const {app} = remote

var closeApp = document.querySelector('#closeApp')

closeApp.addEventListener('click',e =>{
    app.quit()
})