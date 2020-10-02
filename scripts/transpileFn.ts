import { transformFileSync } from '@babel/core';
import fs from 'fs';

export function transpile(): void {
    const result = transformFileSync('src/index.tsx', {
        presets: ['@babel/preset-typescript', 'babel-preset-solid'],
        sourceMaps: 'both',
        comments: false,
    });
    fs.writeFileSync('dist/bootstrap.js', result.code);
}
