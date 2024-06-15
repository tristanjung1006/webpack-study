// Node.js path 라이브러리의 위치를 정의한다
var path = require('path');

// 웹팩을 엔트리에 있는 파일을 통해 돌린다
// directory 위치를 직접적으로 명시해주는 파이썬 path 설정이랑 상당히 유사함
module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};