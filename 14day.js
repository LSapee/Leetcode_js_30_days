// 시간 제한이 있는 캐시 데이터에 대한 관리

var TimeLimitedCache = function() {
    this.cache = new Map();
};
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const valCache = this.cache.get(key);
    if(valCache) clearTimeout(valCache.timeout);
    const timeout = setTimeout(()=>this.cache.delete(key),duration);
    this.cache.set(key,{value,timeout});
    return Boolean(valCache);
};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key)? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};