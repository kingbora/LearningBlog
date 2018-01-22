/**
 * Created by wenbo.kuang on 2018/1/19.
 */
import Component from 'vue-class-component';
import Vue from 'vue';
import UiList from "@/components/DataList/ui-list.vue";

@Component({
  components: {
    UiList
  }
})
export default class ListView extends Vue {
  listContent = [
    {
      type: 1,
      title: '2017年 JavaScript 框架回顾 -- 前端框架',
      body_img: '',
      context: '概述： 对于 JavaScript 社区来说，npm 的主要功能之一就是帮助开发者发掘所需的 npm Registry 中的库和框架。npm 强大的搜索功能能够帮助找到一组相关的软件包，同时其内置的的文档和使用统计信息，可以帮助开发...',
      author: '宁风浅',
      publish_time: '',
      look_num: 12,
      key: 0
    },
    {
      type: 2,
      title: '怎么搭建一个唯美漂亮的个人博客系统？',
      body_img: '',
      context: '平时想自己写点东西，不喜欢QQ空间和新浪博客之类的，我自己是学JAVA的，正好近段时间自己闲着呢，所以想自己去做一个博客系统用用，由于没有经验，所以不知道该如何入手，百度看见有很多搭建博客的前段框架，却不知道该用哪个...',
      author: '宁风浅',
      publish_time: '',
      look_num: 32,
      key: 1
    },
    {
      type: 2,
      title: '什么样的代码才算是好的代码？',
      body_img: '',
      context: '1.重构页面时，什么样的代码才算是好的代码？ 这个我觉得要从三方面来做答，根底的就不说了，那些语义化，构造化，兼容性等等方面的问题。说说中级部分的： 页面的强健性：这个...',
      author: '宁风浅',
      publish_time: '',
      look_num: 45,
      key: 2
    },
    {
      type: 2,
      title: '什么样的代码才算是好的代码？',
      body_img: '',
      context: '1.重构页面时，什么样的代码才算是好的代码？ 这个我觉得要从三方面来做答，根底的就不说了，那些语义化，构造化，兼容性等等方面的问题。说说中级部分的： 页面的强健性：这个...',
      author: '宁风浅',
      publish_time: '',
      look_num: 45,
      key: 3
    }
  ];
}
