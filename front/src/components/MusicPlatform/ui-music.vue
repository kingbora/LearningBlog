<template>
  <div id="ui-music">
    <!--音乐播放器组件-->
    <div class="ui-music-platform">
      <!--音乐专辑图片-->
      <i class="ui-music-album"></i>
      <div class="ui-music-info">
        <!--歌名和歌手名-->
        <div class="ui-music-title">一生有你-水木年华</div>
        <!--歌曲进度控制-->
        <div class="ui-music-control">
          <!--歌曲循环模式-->
          <button class="ui-music-loop"><Icon type="shuffle"></Icon></button>
          <!--上一首-->
          <button class="ui-music-prev"><Icon type="skip-backward"></Icon></button>
          <!--暂停或开始-->
          <button class="ui-music-play"><Icon type="play"></Icon></button>
          <!--下一首-->
          <button class="ui-music-next"><Icon type="skip-forward"></Icon></button>
          <!--曲目列表-->
          <button class="ui-music-list"><Icon type="navicon-round"></Icon></button>
        </div>
        <!--歌曲进度条-->
        <div class="ui-music-progress">
          <div class="ui-music-bar">
            <span class="ui-music-bar-icon"></span>
          </div>
        </div>
      </div>
    </div>
    <!--歌词展示-->
    <div class="ui-music-lyric">
      <div class="ui-music-lyric-text">
        <div class="ui-music-lyric-container">
          <p>以为梦见你离开</p>
          <p>我从哭泣中醒来</p>
          <p>看夜风吹过窗台</p>
          <p>你能否感受我的爱</p>
          <p>等到老去的一天</p>
        </div>
      </div>
      <div class="ui-music-lyric-bottom"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./ui-music.ts"></script>

<style lang="scss" scoped src="./ui-music.scss"></style>
