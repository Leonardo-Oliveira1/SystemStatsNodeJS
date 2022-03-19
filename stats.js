const os = require('os');

setInterval(() => {
    const { freemem, totalmem } = os;
    
    const freeMemory = parseInt(freemem() / 1024 / 1024);
    const totalMemory = parseInt(totalmem() / 1024 / 1024);
    const percent = parseInt((freeMemory / totalMemory) * 100);
    
    const stats = {
        total: `${totalMemory} MB`,
        free: `${freeMemory} MB`,
        free_usage: `${percent}%`
    }
    
    console.clear();
    console.table(stats);
    
}, 700);
