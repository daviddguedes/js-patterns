const TGFone = function () {
    this.state = {};
    this.getState = async function (request) {
        await this.getCustomInfo(request);
        await this.getSummaryPane(request);

        return this.state;
    }
};

TGFone.prototype = {
    getCustomInfo: async function (request) {
        this.state = { 
            ...this.state, 
            planName: 'TGFone plan', 
            planId: 'EDI-DIR-555555555' 
        };
    },

    getSummaryPane: async function (request) {
        this.state = { 
            ...this.state, 
            title: 'Summary Title' 
        };
    }
}

module.exports = TGFone;