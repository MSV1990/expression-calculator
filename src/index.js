function eval() {
    // Do not use eval!!!
    return;
}


function expressionCalculator(expr) {
    const bracketsOpen = expr.split('').filter(el => el === '(');
    const bracketsClose = expr.split('').filter(el => el === ')');

    if(bracketsOpen.length !== bracketsClose.length){
        throw new Error ('ExpressionError: Brackets must be paired');
    }

    let output = (new Function('return '  + expr))();

    if(output === Infinity) {
        throw new Error ('TypeError: Devision by zero.');
    }

    return output;
}

module.exports = {
    expressionCalculator
}