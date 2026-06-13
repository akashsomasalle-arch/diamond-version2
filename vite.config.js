import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src-reference-2-ssr/', // Source files (where index.html is)

    publicDir: '../assets/', // Static assets

    server: {
        host: true, // Expose to local network
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
    },
    build: {
        outDir: '../dist', // Output folder
        emptyOutDir: true, // before build
        sourcemap: true
    }
})