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
}