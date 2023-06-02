var fibGenerator = function*() {
    let n =0;
    let m =1;
    while(1){
        yield n;
        [n,m] = [m,n+m];
    }
};