const CheckoutState = function () {
    this.partner;
}

CheckoutState.prototype = {
    setPartner: function (partner) {
        this.partner = partner;
    },

    getState: async function (request) {
        const state = await this.partner.getState(request);
        return state;
    }
};

module.exports = CheckoutState;