import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['flex-c', 'flex justify-center items-center'],
    ['flex-center', 'flex justify-center items-center'],
    ['flex-ac', 'flex justify-around items-center'],
    ['flex-bc', 'flex justify-between items-center'],
    ['navbar-bg-hover', 'dark:text-white dark:hover:!bg-[#242424]'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // 2. 设置 UnoCSS 的扫描范围
  content: {
    filesystem: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  theme: {
    colors: {
      bg_color: 'var(--el-bg-color)',
      primary: 'var(--el-color-primary)',
      text_color_primary: 'var(--el-text-color-primary)',
      text_color_regular: 'var(--el-text-color-regular)',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
