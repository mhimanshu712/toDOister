const {app, BrowserWindow} = require('electron');

let mainWindow;

function createMainWindow(){
    mainWindow = new BrowserWindow({
        height:800,
        width:600
    })

    mainWindow.loadFile(__dirname+'/public/home.html');

}


app.on('ready',()=>{
    createMainWindow();
})