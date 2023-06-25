<template>
    <div class="detail-container">
        <div class="course-header">
            <div>
                <div>数据库系统概率</div>
                <el-icon class="back" @click="router.push('/home/teacher/course')">
                    <Back />
                </el-icon>
            </div>
        </div>
        <div class="course-bottom">
            <div>
                <el-icon size="15">
                    <UserFilled />
                </el-icon>
                <div>郝娟</div>
            </div>
            <div>
                <el-icon size="15">
                    <School />
                </el-icon>
                <div>2023年春-软件工程2102</div>
            </div>
            <div>
                <el-icon size="15">
                    <WindPower />
                </el-icon>
                <div>课程码: EFK6J</div>
            </div>
        </div>
        <el-tabs v-model="activeName">
            <el-tab-pane label="学生名单" name="first">
                <ul>
                    <li v-for="item in studentList">
                        <el-icon size=30>
                            <Avatar />
                        </el-icon>
                        <div class="student-info">
                            <div>{{ item.name }}</div>
                            <div class="student-id">学号：{{ item.sid }}</div>
                        </div>
                        <div class="arrow">
                            进入查看学生信息
                            <el-icon>
                                <Right />
                            </el-icon>
                        </div>
                    </li>
                </ul>
                <div class="btn"><el-button>添加学生</el-button></div>
            </el-tab-pane>
            <el-tab-pane label="作业设置" name="second">
                <el-empty description="还未发布该课程的作业" class="empty"></el-empty>
                <div class="btn"><el-button>发布作业</el-button></div>
            </el-tab-pane>
            <el-tab-pane label="测验设置" name="third">
                <el-empty description="还未发布该课程的测验" class="empty"></el-empty>
                <div class="btn"><el-button>发布测验</el-button></div>
            </el-tab-pane>
            <el-tab-pane label="资源区" name="fourth">
                <el-tabs v-model="activeName1" type="card">
                    <el-tab-pane label="云盘" name="first1">
                        <div class="document">
                            <div class="document-left">
                                <ul>
                                    <li>全部文件</li>
                                    <li>视频</li>
                                    <li>文档</li>
                                </ul>
                            </div>
                            <div class="document-right">
                                <div class="document-right-top">
                                    <div>
                                        <el-button>
                                            <el-icon>
                                                <Upload />
                                            </el-icon>
                                            上传文件
                                        </el-button>
                                        <el-button>
                                            <el-icon>
                                                <DocumentAdd />
                                            </el-icon>
                                            新建文件夹
                                        </el-button>
                                        <el-input v-model="input" placeholder="请输入要搜索的文件" :suffix-icon="Search" />
                                    </div>
                                    <div class="document-right-top-text">
                                        <div>全部文件</div>
                                        <div>已全部加载,共0个</div>
                                    </div>
                                    <div class="document-right-top-text1">
                                        <div>文件名称</div>
                                        <div>大小</div>
                                        <div>审核状态</div>
                                        <div>修改日期</div>
                                    </div>
                                </div>
                                <div class="document-right-bottom">
                                    <el-empty description="暂无数据" />
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="课件库" name="second1">
                        <div class="course-ware">
                            <div class="course-ware-top">
                                <el-button>
                                    <el-icon>
                                        <DocumentAdd />
                                    </el-icon>
                                    新建文件夹
                                </el-button>
                                <div class="course-ware-top-text">
                                    <div>全部文件</div>
                                    <div>已全部加载,共0个</div>
                                </div>
                                <div class="course-ware-top-text1">
                                    <div>课件名称</div>
                                    <div>修改日期</div>
                                </div>
                            </div>
                            <div class="course-ware-bottom">
                                <el-empty description="暂无数据" />
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="试卷库" name="third1">
                        <div class="paper">
                            <div class="paper-top">
                                <div>
                                    <div>
                                        <el-button>
                                            <el-icon>
                                                <Plus />
                                            </el-icon>
                                            新建试卷
                                        </el-button>
                                        <el-button>
                                            <el-icon>
                                                <DocumentAdd />
                                            </el-icon>
                                            新建文件夹
                                        </el-button>
                                    </div>
                                    <el-button>
                                        <el-icon>
                                            <Download />
                                        </el-icon>
                                        下载习题模板
                                    </el-button>
                                </div>

                                <div class="paper-top-text">
                                    <div>全部文件</div>
                                    <div>已全部加载,共0个</div>
                                </div>
                                <div class="paper-top-text1">
                                    <div>试卷名</div>
                                    <div>类型</div>
                                    <div>修改日期</div>
                                    <div>操作</div>
                                </div>
                            </div>
                            <div class="paper-bottom">
                                <el-empty description="暂无数据" />
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { Search } from '@element-plus/icons-vue'
const router = useRouter()
const activeName = ref('first')
const activeName1 = ref('first1')
const input = ref('')
const studentList = reactive([
    {
        name: '汤富成',
        sid: 20211003001,
    },
    {
        name: '钟亦帆',
        sid: 20211003002,
    },
    {
        name: '钟越',
        sid: 20211003003,
    },
    {
        name: '徐宁',
        sid: 20211003004,
    },
    {
        name: '汤富成',
        sid: 20211003001,
    },
    {
        name: '钟亦帆',
        sid: 20211003002,
    },
    {
        name: '钟越',
        sid: 20211003003,
    },
    {
        name: '徐宁',
        sid: 20211003004,
    },
    {
        name: '汤富成',
        sid: 20211003001,
    },
    {
        name: '钟亦帆',
        sid: 20211003002,
    },
    {
        name: '钟越',
        sid: 20211003003,
    },
    {
        name: '徐宁',
        sid: 20211003004,
    },

])
</script>

<style lang="scss" scoped>
li {
    padding: 5px;
    margin: 15px 0;
    cursor: pointer;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    .arrow {
        position: absolute;
        top: 30%;
        right: 0%;
        font-size: 10px;
        display: flex;
        align-items: center;
    }

    .arrow:hover {
        color: var(--main-red);
        transition: all .3s ease;
    }

    .student-info {
        display: flex;
        margin-left: 10px;
        flex-direction: column;
        font-size: 15px;

        .student-id {
            color: var(--font-color);
            font-size: 10px;
        }
    }
}

li:hover {
    background-color: #cecfd2;
    transition: all .3s ease;
}

.back {
    cursor: pointer;
}

.detail-container {
    background-color: #fff;
    padding: 20px;
    height: 1000px;
}

.course-header div {
    display: flex;
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
}

.course-bottom {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    div {
        font-size: 13px;
        margin-right: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

:deep(.el-empty) {
    margin: 0 auto;
    font-size: 20px;
    color: var(--font-color);
}

:deep(.el-empty__description p) {
    font-size: 20px;
    color: var(--font-color);
}

:deep(.el-button) {

    background-color: #409eff;
    color: #fff;
}

.btn {
    width: 90px;
    margin: 0 auto;
}

:deep(.el-button:hover) {
    background-color: #7ebdfb;
    color: #fff;
    transition: all .3s ease;
}

.document {
    display: flex;
    justify-content: flex-start;

    .document-right {
        margin: 10px;
        width: 100%;

        .document-right-top {
            display: flex;
            flex-direction: column;
            padding-bottom: 10px;
            border-bottom: 1px solid #DCDFE6;

            .document-right-top-text {
                color: var(--font-color);
                font-size: 10px;
                display: flex;
                align-items: center;
                margin-top: 20px;
                justify-content: space-between;
            }

            .document-right-top-text1 {
                color: var(--font-color);
                font-size: 10px;
                display: flex;
                align-items: center;
                margin-top: 20px;
                justify-content: space-around;
            }

            div {
                margin-left: 20px;
                display: flex;
                align-items: center;
            }
        }
    }

    .document-left {
        width: 180px;
        height: 800px;
        color: var(--font-color);
        border-right: 1px solid #DCDFE6;

        ul {
            padding: 10px;
        }

        ul li {
            text-align: center;

        }

        ul li:hover {
            color: #5096f7;
            background-color: #edf4fe;
            transition: all .3s ease;
        }
    }
}

:deep(.el-input) {
    width: 200px;
}

.course-ware {
    .course-ware-top {
        border-bottom: 1px solid #DCDFE6;
        padding-bottom: 10px;
    }

    .course-ware-top-text {
        color: var(--font-color);
        font-size: 10px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        justify-content: space-between;
    }

    .course-ware-top-text1 {
        font-size: 15px;
        display: flex;
        color: var(--font-color);
        align-items: center;
        margin-top: 20px;
        justify-content: space-between;
    }
}

.paper {
    .paper-top {
        border-bottom: 1px solid #DCDFE6;
        padding-bottom: 10px;
    }

    .paper-top div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .paper-top-text {
        color: var(--font-color);
        font-size: 10px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        justify-content: space-between;
    }

    .paper-top-text1 {
        color: var(--font-color);
        font-size: 15px;
        display: flex;
        align-items: center;
        margin-top: 20px;
        justify-content: space-between;
    }
}
</style>