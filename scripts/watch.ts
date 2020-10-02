import { watch } from 'chokidar';

import { bundle } from './bundleFn';
import { transpile } from './transpileFn';

watch(['src/**/*']).on('change', () => {
    const timerStart = Date.now();
    transpile();
    bundle();
    const timerEnd = Date.now();
    console.info(`Built in ${timerEnd - timerStart}ms.`);
});
