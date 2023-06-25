<template>
    <div class="lesson-card__inner">
        <p class="name">{{ name }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>
.lesson-card__inner{
    width: 240px;
    height: 180px;
    border-radius: 8px;
    background-color: #71afe5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform ease 0.3s;
    user-select: none;
    cursor: pointer;
    .name{
        font-weight: bold;
        font-size: 28px;
        color: #fff;
        letter-spacing: 0.1em;
    }
    &:hover{
        transform: translateY(-3px);
        box-shadow: 0 0 8px var(--shadow-color);
    }
}
</style>