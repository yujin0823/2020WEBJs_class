<template>
  <div class="chat-container">
    <!-- template은 하나의 태그로 이루어져 있다. -->
    <chat-component ref="chat"></chat-component>
    <list-component></list-component>
  </div>
</template>

<script>
import ChatComponent from './components/ChatComponents';
import ListComponent from './components/ListComponents';

export default {
  name: 'App',
  components: {
    // chat-component, list-component은 html에서 사용된다.
    // 대소문자 구분이 없다.
    'chat-component': ChatComponent,
    'list-component': ListComponent
  },
  mounted() {
    // let a = document.querySelector("chat-component");
    // console.log(a);

    // 숙제 : 페이지가 로드되었을 떄 자동으로 페이지의 최대 높이
    // this.$refs.chat.$el.style.height = "600px";
    var windowHeight = window.innerHeight;
    console.log(windowHeight);
    console.log(window.innerHeight);
    this.$refs.chat.$el.style.height = `${windowHeight}px`;

    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
        this.$refs.chat.$el.style.height = `${window.innerHeight}px`;
    }
  }
}

// export const a = 10;
// export const b = 20;
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .chat-container {
    width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
</style>
