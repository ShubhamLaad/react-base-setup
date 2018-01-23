export default class ClassSet {
  static getClassSet(classObject) {
    if(!_.isObject(classObject)) {
      return '';
    }
    return _.chain(classObject).map(function(flag, className) {
      if(_.isString(className) && _.isBoolean(flag)) {
        return flag ? className : '';
      }
    }).compact().join(' ').value();
  }
}
