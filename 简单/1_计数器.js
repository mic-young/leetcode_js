// 计数器的实现方法

// 基于闭包
let createCounter = function (n) {
    let counter = n;
    return function () {
        counter += 1;
        return counter;
    }
} 
// 基于闭包实现的其他语法
// 后缀递增
let createCounter2 = function (n) {
    return function () {
        return n++;
    }
}
// 前缀递减递增
let createCounter3 = function (n) {
    --n;
    return function () {
        return ++n;
    }
}
// 箭头函数后缀递增
let createCounter4 = function (n) {
    return () => n++;
}

// 基于类
class Adder {
    constructor(n) {
        this.counter = n;
    }

    add() {
        this.counter++;
    }
}

// 闭包返回的函数实现了封装,无法直接访问到内部的变量.
// 类在不使用 #的前缀语法,能够访问到内部的counter.
// 类生成的counter是复用的原型对象的函数,闭包则是重复生成新的counter.
// 类的性能更好.闭包更简洁.

// 题解
// https://leetcode.cn/problems/counter/solutions/2487678/ji-shu-qi-by-leetcode-solution-xuwj/