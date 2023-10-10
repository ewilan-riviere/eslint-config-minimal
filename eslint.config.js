// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'src/scripts',
  ],
}, {
  rules: {
    'no-console': 'warn',
    'node/prefer-global/process': 'off',
  },
})
