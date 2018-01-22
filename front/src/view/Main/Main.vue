<template>
  <div id="ui-app">
    <header id="ui-header">
      <Menu mode="horizontal" theme="light" :active-name="$route.name">
        <MenuItem name="home">
          <router-link to="/home">首页</router-link>
        </MenuItem>
        <MenuItem name="learning">
          <Dropdown>
            <router-link to="/learning">学无止境</router-link>
            <Dropdown-menu slot="list">
              <Dropdown-item>面向C</Dropdown-item>
              <Dropdown-item>面向Java</Dropdown-item>
              <Dropdown-item>浅谈Web</Dropdown-item>
              <Dropdown-item>深究Node</Dropdown-item>
              <Dropdown-item>细品Python</Dropdown-item>
            </Dropdown-menu>
          </Dropdown>
        </MenuItem>
        <MenuItem name="life">
          <router-link to="/life">点滴生活</router-link>
        </MenuItem>
        <MenuItem name="message">
          <router-link to="/message">留言</router-link>
        </MenuItem>
        <MenuItem name="about">
          <router-link to="/about">关于我</router-link>
        </MenuItem>
      </Menu>
    </header>
    <section id="ui-content">
      <router-view />
    </section>
    <footer id="ui-footer">
      <p class="copyright">
        Copyright © 2016, kingbora All Rights Reserved.
      </p>
    </footer>
  </div>
</template>

<script lang="ts" src="./Main.ts"></script>

<style lang="scss" src="./Main.scss"></style>
