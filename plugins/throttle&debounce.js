import Vue from 'vue'
Vue.prototype.throttle = function (func, delay) {
    let timer = null;
    return function () {
        const context = this;
        const args = arguments;
        if (!timer) {
            timer = setTimeout(function () {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
},
Vue.prototype.debounce=function debounce(fn, wait) {
    let timer = null;
    return function () {
        let args = arguments
        let now = !timer
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
        }, wait)
        if (now) {
            fn.apply(this, args)
        }
    }
}