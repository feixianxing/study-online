<template>
    <div class="test-card__inner">
        <p class="title">{{ name }}</p>
        <p class="content">
            开始时间: {{ startTime }}, 结束时间: {{ endTime }}
        </p>
        <div class="row">    
            <el-button type="primary" @click="gotoTest">进入小测</el-button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    startTime: {
        type: String,
        default: ''
    },
    endTime: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.test-card__inner{
    width: 100%;
    padding: 1em;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 8px var(--shadow-color);
    .title{
        margin-bottom: 8px;
    }
    .content{
        font-size: 16px;
        color: var(--font-color);
        letter-spacing: 0.08em;
    }
    .row{
        width: 100%;
        display: flex;
        align-items: center;
        .el-button{
            margin-left: auto;
        }
    }
}
</style>