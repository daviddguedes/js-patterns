const _ = require('lodash');
const CheckoutState = require('./partners/Checkout');
const Direct = require('./partners/Direct');
const Lineekyc = require('./partners/Lineekyc');
const TGFone = require('./partners/TGFone');

async function run({ request }) {
    const strategy = {
        'lineekyc': new Lineekyc(),
        'tgfone': new TGFone(),
        'direct': new Direct(),
    }

    const checkoutState = new CheckoutState();
    const flow = _.get(request, 'partner.source', 'direct');

    const isKnownFlow = Object.keys(strategy).includes(flow);

    if (isKnownFlow) {
        checkoutState.setPartner(strategy[flow]);
    } else {
        checkoutState.setPartner(strategy['direct']);
    }

    const state = await checkoutState.getState(request);
    return state;
}

const quote = {
    request: {
        partner: {},
        price: {
            total: 12000,
            formatted: {
                total: "R$ 12.000,00"
            }
        }
    }
};

run(quote).then(v => {
    console.log(v);
});