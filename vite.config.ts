import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wonderful-editor/',           // ← ここ大事！（ユーザーページ名でない場合）
})
