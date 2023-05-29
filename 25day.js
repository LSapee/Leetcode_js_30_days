var checkIfInstanceOf = function(obj, classFunction) {
    if(obj ===null || obj===undefined|| typeof classFunction !== "function") return false;
    let inputObj = obj;
    if(typeof obj !== "object") inputObj = Object(obj);
    return inputObj instanceof classFunction;
};



// !!obj === false 는 obj에 ""도 들어가도 되기 때문에 사용 x