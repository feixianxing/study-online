<template>
    <div class="page-container">
        <div class="panel">
            <div class="l-part">
                <p class="title">在线学习系统</p>
            </div>
            <div class="r-part">
                <!-- 注册表单 -->
                <div class="form" v-if="mode">
                    <p class="title">
                        <span>注</span>
                        <span>册</span>
                    </p>
                    <div class="form-item">
                        <p class="label">邮箱</p>
                        <el-input 
                            v-model="loginForm.email"
                            type="email"
                            placeholder="请输入用户邮箱"    
                            size="large"
                        />
                    </div>
                    <div class="form-item">
                        <p class="label">密码</p>
                        <el-input
                            v-model="loginForm.password"
                            type="password"
                            placeholder="请输入用户密码"
                            size="large"
                            :show-password="true"
                        />
                    </div>
                    <div class="tip-row">
                        <p class="tips" @click="changeMode(false)">已有账号？点击登录</p>
                    </div>
                    <div class="submit-btn">注册</div>
                </div>
                <!-- 登录表单 -->
                <div class="form" v-else>
                    <p class="title">
                        <span>登</span>
                        <span>录</span>
                    </p>
                    <div class="form-item">
                        <p class="label">邮箱</p>
                        <el-input 
                            v-model="loginForm.email"
                            type="email"
                            placeholder="请输入用户邮箱"    
                            size="large"
                        />
                    </div>
                    <div class="form-item">
                        <p class="label">密码</p>
                        <el-input
                            v-model="loginForm.password"
                            type="password"
                            placeholder="请输入用户密码"
                            size="large"
                            :show-password="true"
                        />
                    </div>
                    <div class="tip-row">
                        <p class="tips" @click="changeMode(true)">没有账号？点击注册</p>
                    </div>
                    <div class="submit-btn">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 记录(登录/注册) true: 注册, false: 登录
const mode = ref(false)

// 状态切换 (并清空表单)
const changeMode = (newMode)=>{
    mode.value = newMode
    clearForm()
}

// 清空表单
const clearForm = ()=>{
    for(let key in loginForm)loginForm[key]=''
    for(let key in registerForm)registerForm[key]=''
}

// 表单数据对象
const loginForm = reactive({
    email: '',
    password: ''
})
const registerForm = reactive({
    email: '',
    password: ''
})

</script>

<style lang="scss" scoped>
.page-container{
    background-color: var(--page-background);
    display: flex;
    align-items: center;
    justify-content: center;
    .panel{
        width: 64vw;
        min-width: 540px;
        height: 60vh;
        min-height: 420px;
        border-radius: 8px;
        box-shadow: 0 0 12px var(--shadow-color);
        background-color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        .l-part{
            flex: 2;
            height: 100%;
            background-color: var(--main-yellow);
            background-image: url('../assets/images/login-cover.svg');
            background-repeat: no-repeat;
            background-position: bottom;
            .title{
                font-size: 2vw;
                font-weight: 200;
                color: #fff;
                letter-spacing: 0.4em;
                padding: 2em;
                user-select: none;
                text-align: right;
            }
        }
        .r-part{
            flex: 3;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 2em;
            .form{
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: 0 2em;
                width: 80%;
                .title{
                    font-size: 32px;
                    font-weight: normal;
                    color: var(--font-color);
                    transform: scaleY(1.1);
                    display: flex;
                    gap: 1em;
                    margin-bottom: 1em;
                }
                .form-item{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    margin-bottom: 12px;
                    .label{
                        width: 64px;
                        font-size: 16px;
                        color: var(--font-color);
                        font-weight: bold;
                        letter-spacing: 0.08em;
                        user-select: none;
                    }
                    .el-input{
                        flex: 1;
                    }
                }
                .tip-row{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    margin-bottom: 12px;
                    .tips{
                        font-size: 15px;
                        font-weight: normal;
                        color: var(--main-blue);
                        cursor: pointer;
                        text-decoration: underline;
                        text-underline-offset: 2px;
                        user-select: none;
                    }
                }
                .submit-btn{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 2em;
                    font-size: 16px;
                    font-weight: normal;
                    letter-spacing: 0.08em;
                    color: #fff;
                    background-color: var(--main-red);
                    border-radius: 4px;
                    user-select: none;
                    cursor: pointer;
                    transition: all ease 0.3s;
                    &:hover{
                        box-shadow: 0 0 4px var(--shadow-color);
                        border-radius: 8px;
                    }
                }
            }
        }
    }
}
</style>