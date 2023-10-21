/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  interface ImportMetaEnv {
    readonly RENDERER_VITE_APP_TITLE:string
  }
  interface ImportMeta {
    readonly env : ImportMetaEnv
  }
  const component: DefineComponent<{}, {}, any>
  export default component
}
