<template>
    <div>
        <h1>보드 컴포넌트</h1>
        <ul>
            <li v-for="item in list" :key="item.id">{{item.title}}</li>
        </ul>
        <div>
            <input type="text" v-model="title">
            <button @click="send">전송하기</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    // 컴포넌트의 이름
    name: "boardComponent",
    // 가질 데이터, 리스트라는 배열만 가지고 있다.
    data() {
        return {
            list: [],
            title: ''
        }
    },
    // 이벤트 훅?, 만들어서 실제 웹페이지에 띄어놓는 순간 실행
    mounted() {
        axios.get("/test").then(res => {
            this.list = res.data;
            console.log(res.data);
        });
    },
    methods: {
        send() {
            axios.post('/data', {title:this.title}).then(res => {
                // 여기에 포스트 전송이 완료된 후 작업을 해주면된다.
            });
        }
    }
}
</script>
<style scoped>

</style>