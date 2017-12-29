/**
 * Created by cjy on 16/11/23.
 */

//检测类型
export const checkType = (data, ...types) => {
    const _type = {}.toString.call(data).split(/\s|\]|\[/)[2].toLowerCase();
    return types.length ? types.some(type => _type.indexOf(type.toLowerCase()) > -1) : _type;
};

//检测类型方法 (检测通过时执行fn）
export const isType = (type) => (data, fn = e => e) => {
    const result = checkType(data, type);
    return result ? fn(data) : result;
};

export const contrast = (p1, p2) => {
    return checkType(p1) === checkType(p2) ? p1 : p2;
};

//类型检测扩展（检测通过时执行fn）
export const isString = (data, fn) => isType('string')(data, fn);
export const isNumber = (data, fn) => isType('number')(data, fn);
export const isBoolean = (data, fn) => isType('boolean')(data, fn);
export const isNull = (data, fn) => isType('null')(data, fn);
export const isUndefined = (data, fn) => isType('undefined')(data, fn);
export const isObject = (data, fn) => isType('object')(data, fn);
export const isArray = (data, fn) => isType('array')(data, fn);
export const isFunction = (data, fn) => isType('function')(data, fn);
export const isDate = (data, fn) => isType('date')(data, fn);
export const isRegexp = (data, fn) => isType('regexp')(data, fn);