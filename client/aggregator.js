// client/aggregator.js
const logger = require('./logger');

let updateBuffer = [];
let timeout;

function aggregateUpdates(update) {
    updateBuffer.push(update);

    if (!timeout) {
        timeout = setTimeout(() => {
            const aggregatedUpdate = updateBuffer[0];
            logger.log('info', `Aggregated update sent: ${JSON.stringify(aggregatedUpdate)}`);
            updateBuffer = [];
            clearTimeout(timeout);
            timeout = null;
        }, 1000);
    }
}

module.exports = { aggregateUpdates };
