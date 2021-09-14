typeof exports === 'object' && 

typeof module !== 'undefined' ? 

module.exports = factory() :


typeof define === 'function' && define.amd ? define(factory) :(global = global || self, global.Vue = factory()); //self 等于 window