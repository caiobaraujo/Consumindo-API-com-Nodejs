const os = require('os');

setInterval(() => {
  const { freemem, totalmem } = os;

  const total = totalmem() / 1024 / 1024;
  const mem = freemem() / 1024 / 1024;
  const percent = (mem / total) * 100;

  const stats = {
    free: mem.toFixed(2),
    total: total.toFixed(2),
    usage: percent.toFixed(2),
  };

  console.clear();
  console.table(stats);
}, 1000);
