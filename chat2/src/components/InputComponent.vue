<template>
    <div class="inputCom">
        <input class="input" type="text" placeholder="Type your message">
        <button id="btn">SEND</button>
    </div>
</template>

<script>
    export default {
        name: 'InputComponent',
    }
</script>

<style >
    .inputCom {
        display: grid;
        grid-template-columns: 4fr 1fr;
    }

    .input {
        border: none;
        border-radius: 2em 0 0 2em;
        background-color: rgb(204, 255, 248);
        text-align: center;
        outline-style: none;
    }

    #btn {
        border: none;
        border-radius: 0 2em 2em 0;
        background-color: rgb(185, 223, 219);
        color: #fff;
    }
</style>