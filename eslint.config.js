// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'src/scripts/**/*',
    './src/scripts/**/*',
    'src/scripts/**.{js,ts}',
  ],
})
