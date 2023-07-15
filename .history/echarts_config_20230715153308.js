class EchartsConfig {
  constructor(){
    
  }
  /**
   * echarts 在无数据的情况下使用的数据
   * @param {String} desc 无数据情况下的描述
   * @param {Number} fontSize 字体大小
   * @param {String} color 字体颜色
   * @returns 
   */
  static no_data(desc = "暂无数据", fontSize = 14, color = "#ccc") {
    return {
      title: {
        text: desc,
        x: "center",
        y: "center",
        textStyle: {
          fontSize,
          color,
          fontWeight: "normal",
        }
      }
    }
  }
}