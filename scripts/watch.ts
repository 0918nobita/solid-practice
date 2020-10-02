import { watch } from 'chokidar';
import { build } from 'esbuild';

import { buildOptions } from './buildOptions';

watch(['src/**/*']).on('change', async () => {
    const timerStart = Date.now();
    await build(buildOptions);
    const timerEnd = Date.now();
    console.info(`Built in ${timerEnd - timerStart}ms.`);
});
