/**
 * 常用方法集合
 */
class Utils {

  /**
   * @description 获取常用的正则表达式
   * @param {String} type 获取正则类型
   * @return 对应 type 的正则表达式
   */
  getRegExp(type) {
    let regs = {
      "hex": /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
      "url": /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
      "ip": "	((2[0-4]\d|25[0-5]|[01]?\d\d?).){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)",
      "email": /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      "phone": /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
      "idCard": /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
      "date": /^\d{4}(\-)\d{1,2}\1\d{1,2}$/,
      "datetime": /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/,
      "integer": /^[-+]?\d*$/,
      "decimal": /^[-\+]?\d+(\.\d+)?$/,
      "postcode": /^\d{6}$/,
      "carno": /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    };
    return regs[type];
  }
  /**
   * @description 格式化时间
   * @static
   * @param {Number} time 时间戳
   * @param {String} format 格式化格式，默认 "YY-MM-DD hh:mm:ss"
   * @return 返回 format 格式的日期和时间
   */
  static dateFormat(time, format = "YY-MM-DD hh:mm:ss"){
    // 获取当前时间
    let date = new Date(time);
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    
    let preArr = Array.apply(null, Array(10)).map((item, index) => "0" + index);

    let newTime = format.replace(/YY/g, year)
    .replace(/MM/g, preArr[month] || month)
    .replace(/DD/g, preArr[day] || day)
    .replace(/hh/g, preArr[hour] || hour)
    .replace(/mm/g, preArr[min] || min)
    .replace(/ss/g, preArr[sec] || sec);
    return newTime;
  }
  
  /**
   * px 转 rem
   * @param {Number} px 像素
   * @returns 
   */
  static pxToRem(px) {
    let rootFontSize = window.getComputedStyle(document.documentElement, null).getPropertyValue("font-size").slice(0, 2);
    return px / Number(rootFontSize);
  }
}