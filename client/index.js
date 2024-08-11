// client/index.js
const WebSocket = require('ws');
const { handleAction } = require('./actionHandler');
const { aggregateUpdates } = require('./aggregator');
const logger = require('./logger');

// Connect to WebSocket server
const ws = new WebSocket('ws://localhost:8080');

let receivedUpdates = new Set();

ws.on('message', (data) => {
    const update = JSON.parse(data);

    // Filter out duplicates
    const updateKey = `${update.AppOrderID}-${update.price}-${update.triggerPrice}-${update.priceType}-${update.productType}-${update.status}-${update.exchange}-${update.symbol}`;
    if (receivedUpdates.has(updateKey)) {
        logger.log('info', `Filtered duplicate update: ${JSON.stringify(update)}`);
        return;
    }
    receivedUpdates.add(updateKey);

    // Determine actions based on update
    const action = handleAction(update);
    logger.log('info', `Action determined: ${action} for update: ${JSON.stringify(update)}`);

    // Aggregate and send updates
    aggregateUpdates(update);
});
