import antfu from '@antfu/eslint-config'

export default antfu({

}, {
  rules: {
    'regexp/no-useless-assertions': 'off',
    'ts/no-unsafe-function-type': 'off'
  }
})
