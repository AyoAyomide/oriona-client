import { defineConfig } from "vite";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig((command, mode) => {
  console.log(command);
  if (command === 'serve') {
    return {
    }
  } else {
    return {
      base: '/vr-animation/',
      assetsInclude: ['**/*.glb'],
      plugins: [
        viteStaticCopy({
          targets: [
            {
              src: 'src/gltf/*.glb',
              dest: 'src/gltf'
            },
            {
              src: 'src/sounds/*',
              dest: 'src/sounds'
            },
          ]
        })
      ]
    }
  }
})