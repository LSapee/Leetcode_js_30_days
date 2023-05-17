var promisePool = async function(functions, n) {
    const eval = () =>functions[n++]?.().then(eval);
    return Promise.all(functions.slice(0,n).map(f=>f().then(eval)));
};