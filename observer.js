function Click() {
    this.handlers = [];  // observers
}

Click.prototype = {

    subscribe: function (fn, key) {
        this.handlers[key] = fn;
    },

    unsubscribe: function (key) {
        delete this.handlers[key];
    },

    notify: function (key, value) {
        this.handlers[key](value);
    }
}

function run() {

    const clickHandler1 = function (item) {
        console.log("fired: 1");
    };

    const clickHandler2 = function (value) {
        console.log("fired: 2", value);
    };

    const clickHandler3 = function (item) {
        console.log("fired: 3");
    };

    const click = new Click();

    click.subscribe(clickHandler1, 'item-1');
    click.subscribe(clickHandler2, 'item-2');
    click.subscribe(clickHandler3, 'item-3');

    // click.notify('item-2', {name: 'David', age: 42});
    console.log(click);

    click.unsubscribe('item-2');

    console.log(click);

    const clickHandler4 = function (item) {
        console.log(item);
    };

    click.subscribe(clickHandler4, 'item-3');

    console.log(click);

    click.notify('item-3', 'Item 4');
}

run();
