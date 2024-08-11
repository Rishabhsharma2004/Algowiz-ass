// server/orders.js
function generateOrders() {
    const orders = [];
    for (let i = 0; i < 100; i++) {
        orders.push({
            AppOrderID: 1111000000 + i,
            price: Math.floor(Math.random() * 100),
            triggerPrice: Math.floor(Math.random() * 100),
            priceType: ['MKT', 'LMT', 'SL-LMT', 'SL-MKT'][Math.floor(Math.random() * 4)],
            productType: 'I',
            status: ['complete', 'open', 'pending', 'cancelled'][Math.floor(Math.random() * 4)],
            CumulativeQuantity: 0,
            LeavesQuantity: 1,
            OrderGeneratedDateTimeAPI: new Date().toISOString(),
            transaction: ['buy', 'sell'][Math.floor(Math.random() * 2)],
            exchange: 'NSE',
            symbol: ['IDEA', 'RELIANCE', 'TATA', 'BAJAJ', 'WIPRO', 'ONGC'][Math.floor(Math.random() * 6)],
        });
    }
    return orders;
}

module.exports = { generateOrders };
