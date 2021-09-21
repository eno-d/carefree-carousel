import { babel, getBabelOutputPlugin } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';
import strip from '@rollup/plugin-strip';

export default [
    {
        input: './src/index.js',
        external: ['react', 'react-dom', 'prop-types'],
        plugins: [
            postcss({
                plugins: [],
                minimize: true,
            }),
            nodeResolve({
                ignoreGlobal: false,
                include: ['node_modules/**'],
            }),
            image(),
            strip({
                include: ['./src/**/*.js'],
                functions: ['console.warn']
            }),
            babel({
                include: ['./src/**/*.js'],
                exclude: 'node_modules/**',
                presets: ["@babel/preset-env", ["@babel/preset-react", {
                    runtime: "automatic"
                }]]
                ,
            }),
            commonjs(),
            terser()
        ],
        output: [
            {
                file: 'dist/bundle.cjs.js',
                format: 'cjs',
            },
            {
                file: 'dist/bundle.es5.js',
                format: 'esm',
                plugins: [getBabelOutputPlugin({ presets: ['@babel/preset-env'] })]
            },
            {
                file: 'dist/bundle.es6.js',
                format: 'esm',
                exports: 'named',
            },
            {
                file: 'dist/bundle.min.js',
                format: 'iife',
                name: "Carousel",
            },
            {
                file: 'dist/bundle.js',
                format: 'umd',
                name: "Carousel",
            }
        ],
    }
];