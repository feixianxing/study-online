<template>
    <div class="page-container">
        <div class="aside">
            <div class="logo"></div>
            <div class="route-btn-list">
                <div class="route-btn" :class="route.name==='lesson'?'active':''"
                    @click="changeRoute('lesson')">
                    <el-tooltip content="我的课程" placement="right">
                        <el-icon :size="24" color="#edb47a"><Management /></el-icon>
                    </el-tooltip>
                </div>
                <div class="route-btn" :class="route.name==='my'?'active':''"
                    @click="changeRoute('my')">
                    <el-tooltip content="个人信息" placement="right">
                        <el-icon :size="24" color="#edb47a"><Avatar /></el-icon>
                    </el-tooltip>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="header">
                <p class="username">用户: {{ name }}</p>
                <el-tooltip content="退出登录">
                    <el-icon @click="logout" size="32" color="#555555"><SwitchButton /></el-icon>
                </el-tooltip>
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

const name = ref('李华')

const changeRoute = (routeName)=>{
    router.push({
        name: routeName
    })
}

const logout = ()=>{
    router.replace({
        name: 'login'
    })
}

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
                    background-color: #F5F7FA;
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
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 20px 2em;
            gap: 2em;
            .username{
                font-size: 16px;
                letter-spacing: 0.1em;
                font-weight: bold;
            }
            .el-icon{
                cursor: pointer;
            }
        }
        .sub-page-container{
            padding: 20px;
        }
    }
}
</style>