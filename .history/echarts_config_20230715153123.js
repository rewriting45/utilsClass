class EchartsConfig {
  /**
   * echarts 在无数据的情况下使用的数据
   * @param {*} desc 无数据情况下的描述
   * @param {*} fontSize 
   * @param {*} color 
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