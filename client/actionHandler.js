// client/actionHandler.js
function handleAction(update) {
    const { priceType, status } = update;
    if ((priceType === 'MKT' && status === 'complete') ||
        (priceType === 'LMT' && status === 'open') ||
        (priceType.startsWith('SL') && status === 'pending')) {
        return 'placeOrder';
    } else if ((priceType === 'MKT' && status === 'complete') ||
               (priceType === 'LMT' && status === 'open') ||
               (priceType.startsWith('SL') && status === 'pending')) {
        return 'modifyOrder';
    } else if ((priceType === 'LMT' || priceType.startsWith('SL')) && status === 'cancelled') {
        return 'cancelOrder';
    }
    return 'noAction';
}

module.exports = { handleAction };
