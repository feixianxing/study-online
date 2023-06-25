<template>
    <div class="sub-page-inner">
        <div class="l-part">
            <div class="header">
                <el-button icon="Back" type="primary" @click="backward">返回</el-button>
                <el-radio-group v-model="type" size="large">
                    <el-radio-button
                        v-for="item in typeList"
                        :label="item.label">
                        {{ item.label }} 
                    </el-radio-button>
                </el-radio-group>
            </div>
            <el-scrollbar>
                <div class="content">
                    <div v-if="type==='作业'">
                        <assignment-card
                            name="作业1"
                            content="作业内容描述文本作业内容描述文本作业内容描述文本作业内容描述文本作业内容描述文本"
                        />
                    </div>
                    <div v-else-if="type==='学习资源'">
                        <el-table 
                            class="resource-table" 
                            :data="resourceList" 
                            :row-style="{height: '50px'}">
                            <el-table-column
                                label="资源名称"
                                prop="name"
                            />
                            <el-table-column label="操作" width="120" align="center">
                                <template #default="scope">
                                    <el-button size="small" type="primary"
                                        @click="downloadFile(scope.row.path, scope.row.name)">
                                        下载
                                    </el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <!-- 测验 -->
                    <div v-else>
                        <test-card
                            start-time="2023-06-25 16:00"
                            end-time="2023-06-25 17:00"
                        />
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <div class="r-part">
            <p class="title">课程信息</p>
            <div class="info-item">
                <p class="label">课程名称</p>
                <p>{{ lessonName }}</p>
            </div>
            <div class="info-item">
                <p class="label">教师姓名</p>
                <p>{{ teacherName }}</p>
            </div>
            <div class="info-item">
                <p class="label">课程创建时间</p>
                <p>{{ createDate }}</p>
            </div>
            <div class="info-item">
                <p class="label">课程简介</p>
                <p>{{ lessonDescription }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const backward = ()=>{
    router.back()
}

const type = ref('学习资源')
const typeList = reactive([
    {
        label: '作业'
    },
    {
        label: '学习资源'
    },
    {
        label: '测验'
    }
])

const lessonName = ref('数据库')
const teacherName = ref('郝娟')
const createDate = ref('2023-01-01')
const lessonDescription = ref('这里是数据库课程')

const resourceList = reactive([
    {
        name: '课件1',
        type: 1,
        path: 'file path'
    }
])
// 下载课件
const downloadFile = (path, name)=>{
    const a = document.createElement('a')
    a.download = name
    a.href = path
    a.click()
    a.remove()
}

</script>

<style lang="scss" scoped>
.sub-page-inner{
    width: 100%;
    height: calc(100vh - var(--header-height) - 40px);
    border-radius: 8px;
    box-shadow: 0 0 12px var(--shadow-color);
    background-color: #ffffffbf;
    padding: 20px 20px 20px 0;
    display: flex;
    align-items: center;
    .l-part{
        flex: 1;
        height: 100%;
    }
    .r-part{
        width: var(--aside-width);
        height: 100%;
        border-left: 1px solid var(--border-color);
    }
    .header{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding-left: 20px;
        .el-button{
            height: 32px;
        }
    }
    .content{
        width: 100%;
        height: calc(100vh - var(--header-height) - 80px - 32px);
        padding-right: 20px;
        padding-top: 20px;
        padding-left: 20px;
        .resource-table{
            height: calc(100vh - var(--header-height) - 80px - 64px);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 8px var(--shadow-color);
        }
    }
    .r-part{
        padding: 1em;
        .info-item{
            font-size: 16px;
            color: var(--font-secondary-color);
            line-height: 30px;
            .label{
                color: var(--font-color);
            }
        }
    }
}
</style>