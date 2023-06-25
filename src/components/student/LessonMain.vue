<template>
    <div class="sub-page-inner">
        <div class="header">
            <el-input
                v-model="lessonCode"
                placeholder="输入课程号加入课程"
                size="large"
            />
            <el-button icon="Plus" type="primary">加入</el-button>
        </div>
        <div class="content">
            <lesson-card
                v-for="lesson in lessonList"
                :name="lesson.name"
                @click="gotoLessonDetail(lesson.lessonCode)"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const lessonCode = ref("")
const joinLesson = ()=>{

}

const lessonList = reactive([
    {
        name: '数据库',
        lessonCode: 1
    }
])
const getLessonList = ()=>{

}

// 进入课程详情页
const gotoLessonDetail = (lessonCode)=>{
    router.push({
        name: 'lessonDetail',
        params: { lessonCode }
    })
}

</script>

<style lang="scss" scoped>
.sub-page-inner{
    width: 100%;
    height: calc(100vh - var(--header-height) - 40px);
    border-radius: 8px;
    box-shadow: 0 0 12px var(--shadow-color);
    background-color: #ffffffbf;
    padding: 20px;
    .header{
        width: 100%;
        height: var(--header-height);
        display: flex;
        align-items: center;
        gap: 20px;
        .el-input{
            max-width: 200px;
        }
        .el-button{
            height: 32px;
        }
    }
    .content{
        width: 100%;
        height: calc(100vh - var(--header-height) * 2 - 80px);
        display: flex;
        align-items: center;
        align-content: flex-start;
        gap: 20px;
        flex-wrap: wrap;
        padding: 20px 10px;
        &:empty::after{
            margin: 20px 0 0 6px;
            content: '您似乎未加入任何课程...';
            font-size: 16px;
            color: var(--font-color);
            letter-spacing: 0.08em;
        }
    }
}
</style>