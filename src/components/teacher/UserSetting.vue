<template>
    <div class="user-setting-container">
        <el-upload drag action="#" accept=".jpg,.jpeg,.png" :limit="1" :on-change="handlePhotoFileChange"
            :auto-upload="false" :before-upload="beforePhotoUpload" :on-exceed="limitCheck">
            <div>
                <el-icon color="#DCDFE6" size="40">
                    <Plus />
                </el-icon>
                <div>拖拽到此处也可上传</div>
            </div>
        </el-upload>
        <div class="box"><el-button class="publishBtn" @click="changeUserHead">上传头像</el-button></div>
        <el-form :model="infoForm">
            <el-form-item label="请输入用户名:" :label-width="150">
                <el-input type="text" v-model="infoForm.username" placeholder="请输入用户名" clearable show-word-limit
                    autocomplete="off" maxlength="20" />
            </el-form-item>
            <el-form-item label="请输入邮箱:" :label-width="150">
                <el-input type="text" v-model="infoForm.email" placeholder="请输入邮箱" clearable autocomplete="off" />
            </el-form-item>
            <el-form-item label="个性签名:" :label-width="150">
                <el-input type="textarea" v-model="infoForm.sign" placeholder="请输入个性签名" clearable resize="none" rows="2"
                    maxlength="100" show-word-limit />
            </el-form-item>
            <el-form-item label="个人简介:" :label-width="150">
                <el-input type="text" v-model="infoForm.bio" placeholder="请输入个人简介" clearable show-word-limit
                    autocomplete="off" maxlength="40" />
            </el-form-item>
            <el-form-item label="请输入地址:" :label-width="150">
                <el-input type="text" v-model="infoForm.location" placeholder="请输入地址" clearable />
            </el-form-item>
            <el-form-item label="请选择性别:" :label-width="150">
                <el-radio-group v-model="infoForm.sex">
                    <el-radio label="1" size="large">男</el-radio>
                    <el-radio label="2" size="large">女</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <div class="box"><el-button class="publishBtn" @click="changeUserInfo">确认更改</el-button></div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const pfile = ref()
function handlePhotoFileChange(file) {
    const photoFile = file.raw; // 获取上传的视频文件对象
    pfile.value = photoFile
    console.log(pfile);
}
//上传图片
function beforePhotoUpload(file) {
    // 允许上传的文件格式列表
    let acceptList = ["jpg", "jpeg", "png"]
    // 根据文件名获取文件的后缀名
    let fileType = file.name.split('.').pop().toLowerCase()
    // 判断文件格式是否符合要求
    if (acceptList.indexOf(fileType) === -1) {
        ElMessage.warning('只能上传 jpg,jpeg,png 格式的文件 !');
        return false
    }
    // 判断文件大小是否符合要求
    if (file.size / 1024 / 1024 > 50) {
        ElMessage.warning('上传文件大小不能超过 50M !');
        return false
    }
    return true
}
// 选择的文件超出限制的文件总数量时触发
function limitCheck() {
    ElMessage.warning('只能上传一个文件')
}

//更改头像
function changeUserHead() {
    // if (!!pfile.value) {
    //     loading.value = true
    //     const formData = new FormData()
    //     formData.append('file', pfile.value)
    //     //更新用户头像
    //     axios.post('http://funnn.top:8088/funnn/user/img/upload/avatar', formData, {
    //         headers: { 'Authorization': localStorage.getItem('token') }
    //     }).then(({ data: { code, msg } }) => {
    //         if (code === 200) {
    //             ElMessage.success('上传成功！')
    //             loading.value = false
    //             location.reload()
    //         }
    //         else {
    //             ElMessage.error(msg)
    //             console.log(msg)
    //             loading.value = false
    //         }
    //     }).catch(function (error) {
    //         console.log(error);
    //         loading.value = false
    //     })
    // }
    // else {
    //     ElMessage.warning('请上传头像！')
    // }
}
const infoForm = reactive({
    username: '',
    email: '',
    sex: 0,
    sign: '',
    location: '',
    bio: '',
})
</script>

<style lang="scss" scoped>
:deep(.el-upload-dragger) {
    margin: 10px auto;
    border: 2px dashed #DCDFE6;
    width: 200px;
    height: 200px;
    border-radius: 50%;

    div {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #DCDFE6;
        text-align: center;
    }
}

:deep(.el-upload-dragger:hover) {
    border: 2px dashed #409eff;
    transition: all .2s ease;
}

:deep(.el-upload-list__item-name) {
    color: #c4d2f7;
}

:deep(.el-upload-list__item-file-name:hover) {
    color: #409eff;
}

:deep(.el-upload.is-drag) {
    width: 200px;
    margin: 20px auto;
}

:deep(.el-upload-list__item) {
    width: 400px;
    margin: 0 auto;
}

.box {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;

    .publishBtn {
        cursor: pointer;
        background: #409eff;
        border: 0;
        outline: none;
        color: #fff;
        margin: 10px auto;
        width: 200px;
        height: 44px;
        border-radius: 4px;
        text-align: center;
        line-height: 40px;
        white-space: nowrap;
    }

    .publishBtn:hover {
        background-color: var(--main-blue);
        transition: all .3s ease;
    }
}

:deep(.el-form) {
    width: 720px;
    margin: 20px auto;
    color: #cadafc;
}

.user-setting-container {
    padding-top: 30px;
    padding-bottom: 30px;
}
</style>