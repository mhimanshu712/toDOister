const {app, BrowserWindow} = require('electron');

let mainWindow;

function createMainWindow(){
    mainWindow = new BrowserWindow({
        height:700,
        width:600,
        frame:false,
        webPreferences:{
            nodeIntegration:true
        }
    })

    mainWindow.loadFile(__dirname+'/public/home.html');

}

app.on('ready',()=>{
    createMainWindow();
})