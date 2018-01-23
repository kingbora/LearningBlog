<template>
  <div class="ui-home-wrap">
    <Row id="ui-home" type="flex" justify="center" align="top" class="code-row-bg">
      <Col :sm="16" :xs="24">
        <div>
          <router-view />
        </div>
      </Col>
      <Col :sm="{span:6,offset:2}" :xs="0">
        <UiCatalog></UiCatalog>
        <UiMusic></UiMusic>
        <UiTag></UiTag>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>

<style lang="scss" src="./Home.scss"></style>
