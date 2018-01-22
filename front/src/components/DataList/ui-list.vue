<template>
  <Card class="ui-card-list" :bordered="false">
    <!--文章标题和类型-->
    <div class="ui-list-title" :class="{'ui-type-original': data.type === 1, 'ui-type-receive': data.type === 2}">
      <span class="ui-list-article-type" v-if="data.type === 1">原</span>
      <span class="ui-list-article-type" v-if="data.type === 2">转</span>
      <router-link :to="'/home/list/'+data.key" class="ui-list-title-text">{{data.title}}</router-link>
    </div>
    <!--文章主题内容-->
    <div class="ui-list-body">
      <Row>
        <Col span="4">
          <img src="../../assets/default_bg.jpg" class="ui-list-body-img"/>
        </Col>
        <Col span="20">
          <p class="ui-list-body-content">{{data.context}}</p>
        </Col>
      </Row>
    </div>
    <!--相关信息-->
    <div class="ui-list-author">
      <div class="ui-list-portrait">
        <span>作者：</span>
        <span class="ui-list-author-text">{{data.author}}</span>
      </div>
      <p class="ui-list-write-time">
        <Icon type="ios-clock"></Icon>发表于32分钟前
      </p>
      <div class="ui-list-article-look">
        <span class="ui-list-look-num">
          <Icon type="eye"></Icon>{{data.look_num}}人浏览过
        </span>
      </div>
    </div>
  </Card>
</template>

<script src="./ui-list.ts" lang="ts"></script>

<style lang="scss" src="./ui-list.scss"></style>
