/**
 * Created by wenbo.kuang on 2018/1/11.
 */
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  props: {
    data: Object //数据源
  }
})
export default class UiList extends Vue {
  data: object;

  mounted() {
    console.log(this.data);
  }
}
