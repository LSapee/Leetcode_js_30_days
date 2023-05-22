var jsonStringify = function(object) {
    if(object === null) return 'null';
    if(typeof object === 'string')return `"${object}"`;
    if(Array.isArray(object)){
        const elements = object.map((element)=>jsonStringify(element));
        return `[${elements.join(',')}]`;
    }
    if(typeof object ==='object'){
        const keys = Object.keys(object);
        const kV = keys.map((key)=>`"${key}":${jsonStringify(object[key])}`);
        return `{${kV.join(',')}}`;
    }
    return String(object);
};