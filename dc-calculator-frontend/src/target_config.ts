export const IS_TAURI = import.meta.env.VITE_TAURI === 'true';

export const BACKEND_IP = '192.168.1.42';

export const API_BASE = IS_TAURI
  ? `http://${BACKEND_IP}:8080`
  : '/api';

export const MINIO_BASE = IS_TAURI
  ? `http://${BACKEND_IP}:8050`
  : 'http://localhost:8050';

export const BASENAME = IS_TAURI ? '' : '/dc-calculator-frontend';