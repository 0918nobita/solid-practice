import { watch } from 'chokidar';

import { bundle } from './bundle';

watch(['src/**/*']).on('change', async () => {
    const timerStart = Date.now();
    await bundle();
    const timerEnd = Date.now();
    console.info(`Built in ${timerEnd - timerStart}ms.`);
});
