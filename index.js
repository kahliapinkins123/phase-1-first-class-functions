function receivesAFunction(cb){
    return cb();
}

function returnsANamedFunction(){
    return function write(){
        console.log("rose")};
}

function returnsAnAnonymousFunction(){
    return () => 2+2;
}