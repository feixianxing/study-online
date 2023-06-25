<template>
    <div class="course-container">
        <div class="course-top">
            <div class="course-title">我教的课</div>
            <div class="course-top-right">
                <div>归档</div>
                <div>
                    <el-icon size="14">
                        <Plus />
                    </el-icon>
                    创建课程
                </div>
                <div>
                    <el-icon size="14">
                        <Minus />
                    </el-icon>
                    删除课程
                </div>
            </div>
        </div>
        <div class="course-main">
            <div class="course-search">
                <el-input v-model="input" placeholder="搜索课程" :suffix-icon="Search" />
            </div>
            <div class="course-teach">
                <div v-for="item in courseList" class="course" @click="changeRoute('/home/teacher/courseDetail')">
                    <div class="course-header">
                        <div>
                            <div>{{ item.name }}</div>
                            <el-icon size="25">
                                <MoreFilled />
                            </el-icon>
                        </div>
                    </div>
                    <div class="course-bottom">
                        <div>
                            <el-icon size="15">
                                <UserFilled />
                            </el-icon>
                            <div>{{ item.teacher }}</div>
                        </div>
                        <div>
                            <el-icon size="15">
                                <School />
                            </el-icon>
                            <div>{{ item.class }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
const router = useRouter();
function changeRoute(route) {
    router.push(route)
}
const input = ref('')
const courseList = reactive([
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 1,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
    {
        name: '数据库系统概率',
        teacher: '郝鹃',
        class: '2023年春-软件工程2102',
        cid: 2,
    },
])
</script>

<style lang="scss" scoped>
.course-container {
    background-color: #fff;
    border-radius: 10px;

    .course-main {
        padding: 20px 40px;
        display: flex;
        flex-direction: column;

        .course-search {
            margin-bottom: 30px;
        }

        .course-teach {
            width: 100%;
            display: flex;
            flex-wrap: wrap;

            .course {
                color: #fff;
                padding: 20px;
                border-radius: 8px;
                cursor: pointer;
                width: 30%;
                background: linear-gradient(to right, #38ef7d, #22c0b6);
                margin: 20px;
                box-shadow: 0 0 8px rgba($color: #000, $alpha: 0.3);

                .course-header div {
                    display: flex;
                    font-size: 20px;
                    align-items: center;
                    justify-content: space-between;
                }

                .course-bottom {
                    margin-top: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    div {
                        font-size: 13px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }

            .course:hover {
                transform: translateY(-10px);
                box-shadow: 0 0 14px rgba($color: #000, $alpha: 0.3);
                transition: all .3s ease;
            }
        }
    }

    .course-top {
        padding-left: 45px;
        padding-top: 5px;
        padding-bottom: 10px;
        color: var(--font-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
    }

    .course-top-right {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-family: "Avenir", Helvetica, Arial, sans-serif;

        div {
            display: flex;
            color: #9b9b9b;
            align-items: center;
            margin: 0 10px;
            font-weight: bold;
            cursor: pointer;
        }

        div:hover {
            color: #409eff;
            transition: all .3s ease;
        }
    }
}

:deep(.el-input) {
    width: 200px;
}
</style>