Array.prototype.groupBy = function(fn) {
    const ans ={};
    for(const i of this){
        const key = fn(i);
        if(key in ans){
            ans[key].push(i);
        }else{
            ans[key]=[i];
        }
    }
    return ans;
};