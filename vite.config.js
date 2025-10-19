import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// Set `base` to your GitHub Pages repository name so asset paths are correct.
// Example: if your repo is `xhsyni/portfolio` and hosted at
// https://xhsyni.github.io/portfolio/ then base should be '/portfolio/'.
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    tailwindcss(),
  ],
})
