// -- the app --

let handler = {
    add: function() {
        controller.add(a, b);
    }
};


let controller = {
    add: function(a, b) {
        let lastResult = model.getLastResult();
        let result = logic.add(a, b, lastResult);
        model.setLastResult(result);
        view.render(result);
    }
};

let model = {
    lastResult: 0,
    setLastResult: function(new_last_result) {
        this.lastResult = new_last_result;
    },
    getLastResult: function() {
        return this.lastResult;
    },
};

let logic = {
    add: function(a, b, lastResult) {
        let result = 0;
        if (a === undefined && b === undefined) {
            result = lastResult;
        } else if (b === undefined) {
            result = a + lastResult;
        } else if (a === undefined){
            result = b + lastResult;
        } else {
            result = a + b;
        }
        return result;
    }
};

let view = {
    render: function(result) {
        console.log(result);
    }
};

// modify the variable declarations to pass arguments through the calc
let a = undefined;
let b = undefined;

handler.add();  // -> ?

a = 2;
handler.add();  // -> ?

b = -1;
handler.add();  // -> ?

a = undefined;
handler.add();  // -> ?
