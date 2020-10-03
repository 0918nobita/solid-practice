import { build, BuildOptions } from 'esbuild';

/**
 * Bundle JavaScript sources, then minify them if `NODE_ENV` environment variable is set to `production`
 */
export async function bundle(): Promise<void> {
    const baseOptions: BuildOptions = {
        color: true,
        bundle: true,
        sourcemap: true,
        tsconfig: './tsconfig.json',
        platform: 'browser',
        logLevel: 'error',
        minify: process.env.NODE_ENV === 'production',
    };

    await Promise.all([
        build({
            ...baseOptions,
            entryPoints: ['./dist/index.transpiled.js'],
            outfile: './dist/index.bundled.js',
        }),
        build({
            ...baseOptions,
            entryPoints: ['./src/impl.ts'],
            outfile: './dist/impl.js',
        }),
    ]);
}
