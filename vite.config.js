import { defineConfig } from "vite";

export default defineConfig((command, mode)=>{
  console.log(command);
  if (command === 'serve') {
    return {
    }
  } else {
    return {
      base:'/'
    }
  }
})