import type { PluginOption } from 'vite'
import process from 'node:process'
import { themePreprocessorPlugin } from '@pureadmin/theme'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import checker from 'vite-plugin-checker'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
import removeConsole from 'vite-plugin-remove-console'
import removeNoMatch from 'vite-plugin-router-warn'
import Inspector from 'vite-plugin-vue-inspector'
import svgLoader from 'vite-svg-loader'
import { genScssMultipleScopeVars } from '../src/layout/theme'
import { cdn } from './cdn'
import { configCompressPlugin } from './compress'
import { viteBuildInfo } from './info'
import { pathResolve } from './utils'

export function getPluginsList(
  VITE_CDN: boolean,
  VITE_COMPRESSION: ViteCompression,
): PluginOption[] {
  const lifecycle = process.env.npm_lifecycle_event
  return [
    vue(),
    // jsx、tsx语法支持
    vueJsx(),
    checker({
      typescript: true,
      vueTsc: true,
      eslint: {
        lintCommand: `eslint ${pathResolve(
          '../{src,mock,build}/**/*.{vue,js,ts,tsx}',
        )}`,
        useFlatConfig: true,
      },
      terminal: false,
      enableBuild: false,
    }),
    // 按下Command(⌘)+Shift(⇧)，然后点击页面元素会自动打开本地IDE并跳转到对应的代码位置
    Inspector(),
    viteBuildInfo(),
    /**
     * 开发环境下移除非必要的vue-router动态路由警告No match found for location with path
     * 非必要具体看 https://github.com/vuejs/router/issues/521 和 https://github.com/vuejs/router/issues/359
     * vite-plugin-router-warn只在开发环境下启用，只处理vue-router文件并且只在服务启动或重启时运行一次，性能消耗可忽略不计
     */
    removeNoMatch(),
    // mock支持
    vitePluginFakeServer({
      logger: false,
      include: 'mock',
      infixName: false,
      enableProd: true,
    }),
    // 自定义主题
    themePreprocessorPlugin({
      scss: {
        multipleScopeVars: genScssMultipleScopeVars(),
        extract: true,
      },
    }),
    // svg组件化支持
    svgLoader(),
    VITE_CDN ? cdn : null,
    configCompressPlugin(VITE_COMPRESSION),
    // 线上环境删除console
    removeConsole({ external: ['src/assets/iconfont/iconfont.js'] }),
    // 打包分析
    lifecycle === 'report'
      ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
      : (null as any),
  ]
}
