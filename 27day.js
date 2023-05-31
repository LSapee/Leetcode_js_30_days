class EventEmitter {
    constructor(){
        this.events ={};
    }

    subscribe(event, cb) {
        if(!(event in this.events)) this.events[event] = new Set([cb]);
        else this.events[event].add(cb);
        return {
            unsubscribe: () => {
                this.events[event].delete(cb);
            },
        };
    }

    emit(event, args = []) {
        if(!(event in this.events)) return [];
        const ans =[];
        this.events[event].forEach((fn)=>{
            ans.push(fn(...args));
        });
        return ans;
    }
}
