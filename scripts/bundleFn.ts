import { BuildOptions, buildSync } from 'esbuild';

export function bundle(): void {
    const options: BuildOptions = {
        color: true,
        entryPoints: ['./dist/bootstrap.js'],
        outfile: './dist/index.js',
        bundle: true,
        sourcemap: true,
        tsconfig: './tsconfig.json',
        platform: 'browser',
        logLevel: 'error',
    };

    buildSync(options);
}
