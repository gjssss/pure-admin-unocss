import process from 'node:process'
// @ts-check

/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    'autoprefixer': {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
