import { app, BrowserWindow ,Menu} from 'electron';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const isDev = process.env.NODE_ENV !== 'production';

function createMainWin() {
    const mainWindow = new BrowserWindow({
        title: "Image Resizer",
        width: isDev? 1000: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
        //opne dev tools if in dev mode
        if (isDev) {
            mainWindow.webContents.openDevTools();
        }
    mainWindow.loadFile(join(__dirname, './renderer/index.html'));
}

app.whenReady().then(() => {
    createMainWin();
    
    
    //implem ent menu
    const mainMenu = Menu.buildFromTemplate(menu);

    // On macOS, re-create window when dock icon is clicked
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWin();
        }
    });

});

//mneu template
const menu = [
   {
       label:'File',
       subMenu:{
           label:'Quit',
           click:()=> app.quit(),
           accelerator:'Ctrl+w'
       }
   }

]
// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});