<script setup lang="ts">
import { ref } from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

const value1 = ref('');
const value2 = ref('');
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-button type="primary">按钮</el-button>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期" />
    <el-date-picker v-model="value2" type="datetime" placeholder="选择日期和时间" />
    <p>使用主题颜色</p>
  </el-config-provider>
</template>

<style>
p {
  color: var(--el-color-primary);
}
</style>
