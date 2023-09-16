import { contextBridge,ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
// 为渲染进程暴露的自定义API
const api = {
  createWinMy: (options: any) => {
    ipcRenderer.send('createWinMy', options)
  },
  createSign: (options: any) => {
    ipcRenderer.send('createSign', options)
  },
  createSignTips: (options: any) => {
    ipcRenderer.send('createSignTips', options)
  },
  closeWin: (page) => {
    ipcRenderer.send('closeWin',page)
  },
  hiddenWin: (page) => {
    ipcRenderer.send('hiddenWin',page)
  },
  maximizeWin: (page) => {
    ipcRenderer.send('maximizeWin',page)
    
  },
  createMyInfoWin: (options) => {
    ipcRenderer.send('createMyInfoWin', options)
  },
  createSongWin: (options) => {
    ipcRenderer.send('createSongWin',options)
    
  }
  }



// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}

