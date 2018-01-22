/**
 * Created by wenbo.kuang on 2018/1/19.
 */
import Component from 'vue-class-component';
import Vue from 'vue';

@Component({
  props: {
    id: Number
  }
})
export default class ListDetailView extends Vue {
  id: number;

  mounted() {
    console.log(this.id);
  }
}
