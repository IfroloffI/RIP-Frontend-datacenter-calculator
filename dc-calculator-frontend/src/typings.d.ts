declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.avif'
declare module '*.svg'

interface ImportMetaEnv {
  readonly VITE_TAURI?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}