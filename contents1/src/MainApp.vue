<template>
    <div class="container">
        <!-- 12열 그리드 -->
        <!-- row start -->
        <div class="row my-2">
            <!-- col-12 start -->
            <div class="col-12">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active">활성링크</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/board" class="nav-link">메뉴2</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="#" class="nav-link">메뉴3</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="#" class="nav-link">메뉴4</router-link>
                    </li>
                </ul>
            </div>
            <!-- col-12 end -->
        </div>
        <!-- row end -->

        <!-- row start -->
        <div class="row">
            <div class="col-12">
                <section class="content">
                    <router-view></router-view>
                </section>
            </div>
        </div>
        <!-- row end -->

        <!-- <h1>메인 어플리케이션입니다.</h1>
        <button class="btn btn-primary" @click="aaa">알럿창</button> -->
    </div>
</template>

<script>
    export default {
        name: "MainApp",
        methods: {
            aaa() {
                swal.fire('안녕하세요');
            }
        }
    }
</script>

<style scoped>

</style>