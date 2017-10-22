module.exports = logger;

function logger(namespace){
    return function(...args){
        return `${namespace} ${args.join(' ')}`
    }
}

const info= logger('INFO:')
info('fasdf','fsdfsa')