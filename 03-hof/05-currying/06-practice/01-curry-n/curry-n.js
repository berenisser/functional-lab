const curryN = fn => n => fn.length <= 1 ? fn(n) : curryN(fn.bind(null, n))

module.exports = curryN