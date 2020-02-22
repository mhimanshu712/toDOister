const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow,Menu} = electron;

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready',function(){
    //create new window
    mainWindow = new BrowserWindow({});
    //Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    //Quit Whole app when closed
    mainWindow.on('closed',()=>{
        app.quit();
    })

    //the text above basically passes file://dirname/mainWindow.html

    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
})

//Handle create add window
function creteAddWindow(){
    //create new window
    addWindow = new BrowserWindow({
        width:200,
        height: 300,
        title: 'Add Shopping List Item'
    });
    //Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname,'addWindow.html'),
        protocol: 'file',
        slashes: true
    }));

    //Grabage collection handle
    addWindow.on('close',function(){
        addWindow = null;
    })

}

//Create menu template
const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label: 'Add Item',
                click(){
                    creteAddWindow();
                }
            },
            {
                label: 'Clear Items',
            },
            {
                label:'Quit',
                accelerator: process.platform == 'darwin' ? 'command+Q':'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
]


//If not in production add Dev tools
if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Dev Tools',
        submenu:[
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin'?'Command+I':'Ctrl+I',
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools();
                    
                }
            }
        ]
    })
}