// server/index.js
const WebSocket = require('ws');
const { generateOrders } = require('./orders');
const logger = require('./logger');

// Create WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    let updates = generateOrders();

    const sendUpdates = (updateBatch, delay) => {
        setTimeout(() => {
            updateBatch.forEach((update) => {
                ws.send(JSON.stringify(update));
                logger.log('info', `Sent update: ${JSON.stringify(update)} at ${new Date().toISOString()}`);
            });
        }, delay);
    };

    sendUpdates(updates.slice(0, 10), 1000);
    sendUpdates(updates.slice(10, 30), 3000);
    sendUpdates(updates.slice(30, 70), 6000);
    sendUpdates(updates.slice(70, 100), 11000);
});

console.log('WebSocket server started on ws://localhost:8080');
