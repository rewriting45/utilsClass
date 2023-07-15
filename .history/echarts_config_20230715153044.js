class EchartsConfig {
  /**
   * e
   * @param {*} desc 
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