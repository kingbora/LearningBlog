<template>
  <Card dis-hover id="ui-catalog">
    <p slot="title"><Icon type="ios-list-outline"></Icon><span class="ui-catalog-text">目录</span></p>
    <div class="ui-high-light-title"></div>
    <ul class="ui-article-index">
      <li>
        <router-link to="#articleHeader0">javascript的内存泄漏</router-link>
      </li>
      <li>
        <ul>
          <li>
            <router-link to="#articleHeader1">内存泄漏的定义</router-link>
          </li>
          <li>
            <router-link to="#articleHeader2">javascript的内存管理</router-link>
          </li>
          <li>
            <ul>
              <li>
                <router-link to="#articleHeader3">JavaScript内存分配和回收的关键字：GC根、作用域</router-link>
              </li>
              <li>
                <router-link to="#articleHeader4">作用域的分类：局部作用域、全局作用域、闭包作用域</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <router-link to="#articleHeader5">常见的几种内存泄漏的方式及使用chrome dev tools的排查方法</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </Card>
</template>

<script src="./ui-catalog.ts" lang="ts"></script>
<style src="./ui-catalog.scss" lang="scss"></style>
