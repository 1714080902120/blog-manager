<template>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script setup lang="ts">
import { GET_FEEDBACK } from "@/constant/fetchUrl";
const res = await $fetch(GET_FEEDBACK);
</script>

<style scoped></style>
