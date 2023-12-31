# eslint-config minimal

Reproduction for [Flat config] `ignores` conflict with `rules` issue.

## Steps to reproduce

1. Clone this repo

```bash
git clone https://github.com/ewilan-riviere/eslint-config-minimal
```

2. Install dependencies

```bash
pnpm install
```

3. Run eslint

```bash
pnpm lint
```

## Expected behavior

No errors.

## Actual behavior

```bash
> eslint-config-minimal@1.0.0 lint /Users/ewilan/Workspace/eslint-config-minimal
> eslint .


/path/to/eslint-config-minimal/src/scripts/build.ts
  1:1  error  Unexpected console statement  no-console

✖ 1 problem (1 error, 0 warnings)

 ELIFECYCLE  Command failed with exit code 1
```

## Origin

If `rules` entry is commented in `eslint.config.js`, no errors are reported. So it seems that the `rules` conflict with the `ignores` entry.

## Solution

Just set `ignores` and `rules` in two different configs. Thanks to [@Simon-He95](https://github.com/antfu/eslint-config/issues/280#issuecomment-1754623094).

```js
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
```