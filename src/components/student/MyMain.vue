<template>
    <div class="sub-page-inner">
        <p class="title">个人信息</p>
        <div class="form-item">
            <p class="label">姓名</p>
            <el-input v-model.trim="name" placeholder="请输入姓名" size="large" clearable/>
        </div>
        <div class="form-item">
            <p class="label">年龄</p>
            <el-input v-model.trim="age" placeholder="请输入年龄" size="large" clearable />
        </div>
        <div class="form-item">
            <p class="label">年级</p>
            <el-input v-model.trim="grade" placeholder="请输入年级" size="large" clearable/>
        </div>
        <div class="form-item">
            <p class="label">专业</p>
            <el-input v-model.trim="major" placeholder="请输入专业" size="large" clearable/>
        </div>
        <div class="form-item">
            <p class="label">密码</p>
            <el-input v-model.trim="password" 
                type="password" :show-password="true" 
                placeholder="请输入密码" size="large" clearable
            />
        </div>
        <el-button type="primary" size="large" class="save-btn">保存</el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const age = ref('')
const grade = ref('')
const major = ref('')
const password = ref('')

</script>

<style lang="scss" scoped>
.sub-page-inner{
    width: 100%;
    height: calc(100vh - var(--header-height) - 40px);
    border-radius: 8px;
    box-shadow: 0 0 12px var(--shadow-color);
    background-color: #ffffffbf;
    padding: 20px;
    position: relative;
    .form-item{
        margin-top: 1em;
        .label{
            font-weight: bold;
            font-size: 15px;
            color: var(--font-color);
        }
        .el-input{
            margin-top: 8px;
            max-width: 320px;
        }
    }
    .save-btn{
        margin-top: 20px;
        margin-left: 120px;
    }
}
</style>