let AModules = (function () {
    let name = 'A';
    const sum = function sum(...params) {
        let len = params.length,
            total = 0;
        if (len === 0) return 0;
        if (len === 1) return params[0];
        params.forEach(item => {
            total += +item;
        });
        return total;
    };

    /* 导出A模块中，供别人调用的方法 */
    return {
        sum
    };
})();