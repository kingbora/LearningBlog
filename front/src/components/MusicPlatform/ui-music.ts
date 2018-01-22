/**
 * Created by wenbo.kuang on 2018/1/10.
 */
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class UiMusic extends Vue {
  isLyricOpen:boolean = false;

  toggleLyric() {
    this.isLyricOpen = !this.isLyricOpen;
  }
}
