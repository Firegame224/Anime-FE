/* eslint-disable @typescript-eslint/no-explicit-any */
// plugins/lucide.ts
import { defineNuxtPlugin } from '#app'
import * as icons from 'lucide-vue-next'

export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(icons).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component as any)
  })
})
