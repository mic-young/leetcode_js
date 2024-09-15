// 2620.计数器
// 给定一个整型参数 n，请你编写并返回一个 counter 函数。这个 counter 函数最初返回 n，每次调用它时会返回前一个值加 1 的值 ( n ,  n + 1 ,  n + 2 ，等等)。 


// ** solution
// 
// 使用闭包的特性,在外部函数定义一个变量,内部函数使用变量并返回.
let createCounter = function (n) {
    let counter = n;
    return function () {
        counter += 1;
        return counter;
    }
}


// ** post
// 
// 1 - 解释
// 闭包返回的函数实现了封装,无法直接访问到内部的变量.
// 类在不使用 #的前缀语法,能够访问到内部的counter.
// 类生成的counter是复用的原型对象的函数,闭包则是重复生成新的counter.
// 类的性能更好.闭包更简洁.

// 2 - 题解
// https://leetcode.cn/problems/counter/solutions/2487678/ji-shu-qi-by-leetcode-solution-xuwj/


// ** solution
// 
// 1 - 后缀递增
// 使用函数的参数作为counter,函数的参数也是函数内定义的变量
let createCounter2 = function (n) {
    return function () {
        return n++;
    }
}

// 2 - 前缀递减和递增
// 更多余的写法
let createCounter3 = function (n) {
    --n;
    return function () {
        return ++n;
    }
}

// 3 - 箭头函数后缀递增
// 更简洁的写法
let createCounter4 = function (n) {
    return () => n++;
}

// 4 - 基于类
// 类的写法
class Adder {
    constructor(n) {
        this.counter = n;
    }

    add() {
        this.counter++;
    }
}