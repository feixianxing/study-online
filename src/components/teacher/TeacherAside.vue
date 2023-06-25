<template>
    <div class="container">
        <div class="top">在线学习系统</div>
        <ul>
            <li v-for="(item, index) in asideList" :key="index" :class="{ clicked: flag == index }"
                @click="changeState(index)">
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
const router = useRouter()
const asideList = reactive([
    {
        name: '用户设置',
        route: '/userSetting',
    },
    {
        name: '课程管理',
        route: '/course',
    },
    {
        name: '目录',
        route: '/directory',
    },
])
const flag = ref(0)
//切换子页面
function changeState(index) {
    flag.value = index
    router.push('/home/teacher' + asideList[flag.value].route)
}
//更新跳转用户设置
onMounted(() => {
    router.push('/home/teacher' + asideList[0].route)
})
</script>

<style lang="scss" scoped>
.container {
    background-color: #3f3f3f;
    width: var(--aside-width);
    height: 100vh;
    padding-top: 10px;

    .top {
        width: 220px;
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        background-color: #409eff;
        padding: 12px 8px;
        border-radius: 8px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 35px;
        box-shadow: 0 0 12px rgba($color: #dfdfdf, $alpha: 0.3);
    }

    ul li {
        width: 100%;
        color: #fff;
        font-size: 15px;
        padding: 20px 10px;
        cursor: pointer;
        list-style-type: none;
        display: flex;
        align-items: center;
        position: relative;

        div {
            position: absolute;
            right: 0%;
            top: 35%;
        }
    }
}


.clicked {
    color: #409eff !important;
    background-color: #303030 !important;
}
</style>