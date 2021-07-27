/*
 * @Author: 李灿
 * @Date: 2021-07-27 12:03:52
 * @LastEditTime: 2021-07-27 12:05:00
 * @Description:isAssetTypeAnImage 判断文件类型是不是图片
 * @FilePath: /bunny/src/file/isAssetTypeAnImage.js
 */
/**
 * @description: 判断文件类型是不是图片
 * @param {*} file File类型
 * @return {*} Boolean
 */
function isAssetTypeAnImage(file) {
  const fileName = file.name;
  const index = fileName.lastIndexOf(".");
  const ext = fileName.substr(index + 1);
  return ["png", "jpg", "jpeg", "bmp", "gif"].indexOf(ext.toLowerCase()) !== -1;
}

module.exports = isAssetTypeAnImage;
