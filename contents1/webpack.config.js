const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { ModuleFilenameHelpers } = require('webpack');

// node.js에서 모듈을 만들 때 사용
module.exports = {
    // 1️⃣ app.js를 읽어서 결과를 public안에 있는 dist.js로 만들어
    // 경로 연결 : __dirname 현재 디렉토리 -> DOGE1028/app.js
    // 이 파일을 읽어서
    entry: path.join(__dirname, 'app.js'),
    // 이 파일을 만드는 것
    output: {
        filename: 'dist.js',
        path: path.join(__dirname, 'public')
    },
    // entry부분의 파일을 읽을 떄 css or 이미지파일 같은 것이 오면 그것을 어떻게 처리할 것이냐?
    module: {
        rules:[
            { // css파일이 오면
                // * 는 0개 또는 여러개 + 는 1개 또는 여러개
                // 정규표현식 시작과 끝은 양끝에 /을 쓴다
                // .은 역슬래시를 통해 .을 표현
                // $는 문장이 끝남
                test:/\.css$/, // 정규 표현식 -> .css로 끝남
                // css파일이 오면 style-loader하고 css-loader가 대신 처리해 줄 것이다.
                // 사용할 모듈 : style-loader : 스타일 태그를 처리, css-loader : css파일을 처리
                use:['style-loader', 'css-loader'] // 옵션이 없는 경우에
            },
            { // 파일을 처리
                test:/\.(png|jpg|jpeg|gif|PNG)$/, // 정규 표현식
                loader:'url-loader', // 옵션을 넣을 경우 loader
                options: {
                    name:'[hash].[ext]', // 파일의 이름을 hash 확장자 .ext
                    limit:10000
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        alias: { // 별칭
            // vue는 vue/dist/vue.esm.js 요아이를 말하는 것
            "vue$":"vue/dist/vue.esm.js",
            "@": path.join(__dirname, 'src/')
        },
        // 이 뷰가 처리할 익스텐션은 아래있는 것
        extensions:["*", ".js", ".vue", ".json"]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}