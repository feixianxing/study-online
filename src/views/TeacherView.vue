<template>
    <div class="main-container">
        <div class="teacher-left">
            <TeacherAside></TeacherAside>
        </div>
        <div class="teacher-right">
            <TeacherTop></TeacherTop>
            <div class="teacher-right-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>
.main-container {
    display: flex;

    .teacher-left {
        position: fixed;
    }

    .teacher-right {
        width: 100%;
        margin-left: 240px;

        .teacher-right-main {
            background-color: #f5f7f9;
            padding: 20px;
        }
    }
}
</style>