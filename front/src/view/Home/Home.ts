import Vue from 'vue';
import Component from 'vue-class-component';
import UiMusic from "@/components/MusicPlatform/ui-music.vue";
import UiCatalog from '@/components/Catalog/ui-catalog.vue';
import UiTag from '@/components/Tag/ui-tag.vue';

@Component({
  components: {
    UiMusic,
    UiCatalog,
    UiTag
  }
})
export default class HomeView extends Vue {

}
