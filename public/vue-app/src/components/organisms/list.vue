<template>
  <div class="list-tab">
    <ul>
      <li v-for="(listItem, i) in new Array(+numberOfListItems)" :key="i">
        This is item number {{ i + 1 }}
      </li>
    </ul>
  </div>
</template>

<script>
import { toRefs, reactive } from 'vue';
const params = new URLSearchParams(window.location.search);

export default {
  setup() {
    const state = reactive({
      numberOfListItems: params.get('list-items') || 10
    });

    return { ...toRefs(state) };
  }
}
</script>

<style scoped>
.list-tab {
  width: 100%;
  border: 1px solid #666;
  border-top: none;
  padding: 10px;
  box-sizing: border-box;
}

ul {
  padding: 0;
  list-style: none;
  margin: 0 auto;
  width: 60%;
}

li {
  width: 100%;
  text-align: center;
  border: 1px solid #666;
  margin-bottom: 10px;
  padding: 10px 0;
}
</style>
