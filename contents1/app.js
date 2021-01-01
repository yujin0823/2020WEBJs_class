// Vue로 부터 vue를 가져와
import Vue from 'vue';
import Router from 'vue-router';
// @가 나오면 ./src
import MainApp from '@/MainApp';

import swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { component } from 'vue/types/umd';
// import Counter from './src/Counter';

Vue.use(Router);
import NewsComponet from '@/components/NewsComponet';
import BoardComponet from '@/components/BoardComponet';

const route = new Router({
    routes: [
        {
            path: '/', // path '/' 일때 : '/'로 들어오면
            name: 'news-page', // 뉴스 컴포넌트 가져옴, 보여줌
            component: NewsComponet
        },
        {
            path: '/board', // path '/' 일때
            name: 'board-Page', // 보드 컴포넌트 가져옴, 보여줌
            component: BoardComponet
        }
    ]
});

// 3️⃣ 그러면 app.js에서 걸어논 아래 코드가 실행된다.
// 시작되었을 때
window.swal = swal;
window.onload = ()=> {
    new Vue({
        el: "#app", // #app에 연결
        // components: {
        //     'counter-component': Counter
        // },
        // data: { // app에서 사용할 변수 
        //     msg: "Hello world"
        // }

        // MainApp으로 앱을 만드는 것
        route,
        // vue를 하나의 component로 바로 시작할 때 하나의 컴포넌트가 vue app이 시작될 때
        // render라는 함수에 ()에 그릴 컴포넌트 제공
        render: h => h(MainApp)
    });
}