// import { app, BrowserWindow ,Menu ,ipcMain} from 'electron';
// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
// import  fs  from 'fs';
// import  resizeImg   from 'resize-img';
// import  os  from 'os';

// Get __dirname equivalent in ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const isDev = process.env.NODE_ENV !== 'production';
// const isMac = process.platform === 'darwin';

// let mainWindow;
// let aboutWindow;

// function createMainWin() {
//      mainWindow = new BrowserWindow({
//         title: "Image Resizer",
//         width: isDev? 1000: 500,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: true,
//             contextIsolation: true,
//             preload:join(__dirname,'preload.js')
//         }
//     });
//         //opne dev tools if in dev mode
//         if (isDev) {
//             mainWindow.webContents.openDevTools();
//         }
//     mainWindow.loadFile(join(__dirname, './renderer/index.html'));
// }

// function createAboutWindow() {
//      aboutWindow = new BrowserWindow({
//         title: "About Image Resizer",
//         width: 300,
//         height: 300,
//         webPreferences: {
//             nodeIntegration: true,
//             contextIsolation: false
//         }
//     });
//     aboutWindow.loadFile(join(__dirname, './renderer/about.html'));
// }


// app.on('ready',() => {
//     createMainWin();
    
    
//     //implem ent custom menu
//     const mainMenu = Menu.buildFromTemplate(menu);
//     Menu.setApplicationMenu(mainMenu);
    
//     //remove variable from mem
//     mainWindow.on('closed',() => {
//         (mainWindow = null)
//     });
// });
// // Menu template
// const menu = [
//     ...(isMac
//         ? [
//             {
//                 label: app.name,
//                 submenu: [
//                     {
//                         label: 'About',
//                         click: createAboutWindow,
//                     },
//                 ],
//             },
//         ]
//         : []),
//         {
//             role: 'fileMenu',
//         },
//         ...(!isMac
//             ? [
//                 {
//                     label: 'Help',
//                     submenu: [
//                         {
//                             label: 'About',
//                             click: createAboutWindow,
//                         },
//                     ],
//                 },
//             ]
//             : []),
//             // {
//                 //   label: 'File',
//                 //   submenu: [
//                     //     {
//                         //       label: 'Quit',
//                         //       click: () => app.quit(),
//                         //       accelerator: 'CmdOrCtrl+W',
//                         //     },
//                         //   ],
//                         // },
//                         ...(isDev
// ? [
//     {
//         label: 'Developer',
//         submenu: [
//             { role: 'reload' },
//             { role: 'forcereload' },
//             { type: 'separator' },
//             { role: 'toggledevtools' },
//         ],
//     },
// ]
// : []),
// ];


// //this responsd to the ipcRendere from renderer.js ofor 'image:resize' method

// ipcMain.on('image:resize',(e,options)=>{
//     console.log(options);
// });
// //resize the image
// // async function resizeImage({imgPath,width,height,dest}) {
// //     try {
// //         const newPath = await resizeImage(fs.readFileSync())
// //     } catch (error) {
// //         console.error("something wrong while resizeng : ",error.message)
// //     }
// // }


// // On macOS, re-create window when dock icon is clicked
// app.on('activate', () => {
//     if (BrowserWindow.getAllWindows().length === 0) {
//         createMainWin();
//     }
// });
// // Quit when all windows are closed (except on macOS)
// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit();
//     }
// });