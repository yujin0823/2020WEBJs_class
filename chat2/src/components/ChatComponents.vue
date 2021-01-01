<template>
    <div class="window">
        <div class="chat-list">

        </div>
        <input-component>
        
        </input-component>
    </div>
</template>

<script>
    import InputComponent from './InputComponent';
    export default {
        name: 'ChatComponents',
        components: {
            'input-component' : InputComponent
        }
    }
</script>

<style scoped> 
    /* h1 {
        background-color: #f00;
    } */

    .window {
        display: grid;
        grid-template-rows: 1fr 55px;
    }
</style>