// 计数器的实现2

let createCounter=function (init){
    let counter=init;
    return {
        increment(){
            return counter++;
        },
        decrement(){
            return counter--;
        },
        reset(){
            return counter=init;
        }
    }
}