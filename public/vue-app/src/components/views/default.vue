<template>
  <div class="default-template">
    <Tabs :tabNames="tabs" @tabChange={tabChange} />
    <List v-if="activeTab === 'list'" />
  </div>
</template>

<script>
import { reactive, toRefs} from 'vue';

import Tabs from '../molecules/tabs.vue';
import List from '../organisms/list.vue';

export default {
  components: {
    Tabs,
    List
  },
  setup() {
    const state = reactive({
      tabs: ['list', 'form'],
      activeTab: 'list'
    });

    function tabChange(tabNumber) {
      state.activeTab = this.state.tabs[tabNumber];
    }

    return { tabChange, ...toRefs(state) }
  }
}
</script>

<style scoped>
  .default-template {
    padding: 20px 10px;
    box-sizing: border-box;
    height: 100%;
    flex: 4;
  }
</style>
