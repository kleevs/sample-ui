const { Worker, workerData } = require('worker_threads');

(async () => {
if (!workerData) {
    const waitWorker = (worker) => {
        return new Promise(resolve => {
            worker.on('exit', () => resolve());
        });
    }

    let watchMode = false;
    let webpackMode = false;

    for (var i in process.argv) {
        if (process.argv[i] === "-w")
            watchMode = true; 
        if (process.argv[i] === "-webpack")
            webpackMode = true;
    }

    if (watchMode) {
        console.log("watch mode\n")
        // const wswc = new Worker(__filename, { argv: ['--copy-files', '--out-dir', 'dist', '-w', './src'], workerData: 'swc' });
        const wtsc = new Worker(__filename, { argv: ['-w', '--preserveWatchOutput'], workerData: 'tsc' });
        const wtsca = new Worker(__filename, { argv: ['-w'], workerData: 'tsca' });
        await Promise.all([waitWorker(wtsc), waitWorker(wtsca)]);
    } else {
        // const wswc = new Worker(__filename, { argv: ['--copy-files', '--out-dir', 'dist', './src'], workerData: 'swc' });
        // await waitWorker(wswc);
        const wtsc = new Worker(__filename, { argv: [], workerData: 'tsc' });
        await waitWorker(wtsc);
        const wtsca = new Worker(__filename, { argv: [], workerData: 'tsca' });
        await waitWorker(wtsca);
    }
} else if (workerData === 'swc') {
    process.title = "swc";
    require("@swc/cli/lib/swc");
} else if (workerData === 'tsc') {
    require('typescript/lib/tsc');
} else if (workerData === 'tsca') {
    require('tsc-alias');
}
})();