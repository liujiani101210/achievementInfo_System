const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}
module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "成果信息管理系统";
      return args;
    });
  },
  publicPath: "/Achievement_Info_System/",
  outputDir: "Achievement_Info_System",
  devServer: {
    host: "0.0.0.0",
    port: "8080",
    https: false,
    open: true,
    proxy: {
      "/space_time_gateway": {
        // target: "http://172.18.118.150:7770",
        target: "http://172.18.116.176:7770",
        ws: true,
        pathRewrite: {
          "^/space_time_gateway": ""
        },
        changeOrigin: true //是否允许跨越
      }
    }
  }
};
