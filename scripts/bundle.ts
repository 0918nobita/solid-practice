import { build, BuildOptions, BuildResult } from 'esbuild';

export function bundle(): Promise<BuildResult> {
    const options: BuildOptions = {
        color: true,
        entryPoints: ['./src/index.ts'],
        outfile: './dist/index.js',
        bundle: true,
        sourcemap: true,
        tsconfig: './tsconfig.json',
        platform: 'browser',
        logLevel: 'error',
    };

    return build(options);
}
