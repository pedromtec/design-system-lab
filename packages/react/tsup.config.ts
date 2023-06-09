import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'
import { defineConfig } from 'tsup'

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined /* suppress source map warning */,
  })

  return result.css
}

export default defineConfig({
  sourcemap: true,
  target: 'esnext',
  esbuildPlugins: [
    vanillaExtractPlugin({
      processCss,
    }),
  ],
})
