/*
 * @Author: 李灿
 * @Date: 2021-07-27 12:05:11
 * @LastEditTime: 2021-07-27 12:06:36
 * @Description:判断文件大小是不是超出范围
 * @FilePath: /bunny/src/file/valiadateSize.js
 */
/**
 * @description:
 * @param {*} file 判断文件大小是不是超出范围
 * @param {*} maxSize 最大值 单位 M
 * @return {*} Boolean
 */
function valiadateSize(file, maxSize) {
  console.log(file.size);
  const fileSize = file.size;
  return fileSize < 1024 * maxSize * 1024;
}

module.exports = valiadateSize;
