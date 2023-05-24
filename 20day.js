function objDiff(obj1, obj2) {
    if (obj1 === obj2) return {};
    if (obj1 === null || obj2 === null) return [obj1, obj2];
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return [obj1, obj2];
    if (Array.isArray(obj1) !== Array.isArray(obj2)) return [obj1, obj2];

    const returnObj = {};
    for(const key in obj1){
        if(key in obj2){
            const sub = objDiff(obj1[key], obj2[key]);
            if (Object.keys(sub).length > 0){
                returnObj[key] = sub;
            }
        }
    }
    return returnObj;
};