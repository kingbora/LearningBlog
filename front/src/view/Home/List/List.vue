<template>
  <div>
    <UiList v-for="(list, index) in listContent" :data="list" :key="index"></UiList>
    <Page :total="100" show-elevator show-total></Page>
  </div>
</template>

<script src="./List.ts" lang="ts"></script>

<style src="./List.scss" lang="scss"></style>
