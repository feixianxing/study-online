<template>
    <div class="container">
        <div class="name">在线学习系统 教师端</div>
        <div class="user-name">
            <el-icon size="20" class="avatar">
                <Avatar />
            </el-icon>
            用户名:1111
            <el-icon size="25" class="icon" @click="logout">
                <SwitchButton />
            </el-icon>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = ()=>{
    router.push({
        name: 'login'
    })
}

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;

    .name {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 3px;
        margin-left: 30px;
    }

    .user-name {
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 15px;

        .avatar {
            margin-right: 10px;
        }

        .icon {
            margin-left: 10px;
            margin-right: 20px;
            cursor: pointer;
        }
    }
}
</style>