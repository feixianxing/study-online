<template>
    <div class="page-container">
        <div class="aside">
            <div class="logo"></div>
            <div class="route-btn-list">
                <div class="route-btn" :class="route.name==='lesson'?'active':''">
                    <el-icon :size="24" color="#edb47a"><Management /></el-icon>
                </div>
                <div class="route-btn" :class="route.name==='my'?'active':''">
                    <el-icon :size="24" color="#edb47a"><Avatar /></el-icon>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="header">

            </div>
            <div class="sub-page-container">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

</script>

<style lang="scss" scoped>
.page-container{
    width: 100%;
    height: 100vh;
    background-color: var(--page-background);
    display: flex;
    align-items: center;
    justify-content: center;
    .aside{
        width: var(--icon-aside-width);
        height: 100%;
        background-color: #fff;
        border-right: 1px solid var(--border-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em 0;
        .logo{
            width: 48px;
            height: 48px;
            background-image: url('/logo.png');
            background-size: contain;
            background-position: center;
        }
        .route-btn-list{
            margin-top: 1.5em;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .route-btn{
                width: 100%;
                padding: 1em 0;
                display: flex;
                justify-content: center;

                &.active{
                    background-color: var(--main-yellow);
                }
            }
        }
    }
    .main{
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: var(--header-height);
            background-color: #fff;
            border-bottom: 1px solid var(--border-color);
        }
        .sub-page-container{
            padding: 1em;
        }
    }
}
</style>