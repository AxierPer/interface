/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_CLOUDINARY_USERNAME: string;
}

export interface ImportMeta {
    env: ImportMetaEnv;
}