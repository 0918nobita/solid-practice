import { transformFileSync } from '@babel/core';
import fs from 'fs';

/**
 * Transpile `src/index.tsx` for solid-js
 */
export function transpile(): void {
    const result = transformFileSync('src/index.tsx', {
        presets: ['@babel/preset-typescript', 'babel-preset-solid'],
        sourceMaps: 'both',
        comments: false,
    });
    fs.writeFileSync('dist/index.transpiled.js', result.code);
}
