<template>
    <div class="assignment-card__inner">
        <p class="title">{{ name }}</p>
        <p class="content">{{ content }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.assignment-card__inner{
    width: 100%;
    padding: 1em;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 8px var(--shadow-color);
    .title{
        margin-bottom: 8px;
    }
}
</style>