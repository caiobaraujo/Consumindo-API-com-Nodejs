// vai guardar algumas mensagens do sistema

const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

emitter.on('log', (message) => {
  fs.appendFile(path.join(__dirname, 'log.txt'), `${message}\n`, (err) => {
    if (err) {
      throw err; // para o programa
    }
  });
});

function log(message) {
  emitter.emit('log', message);
}

module.exports = log;
