<template>
  <div class="tab-headers-container">
    <div class="tab-header" v-for="(tab, i) in tabNames" :key="i" @click="() => tabClick(i)">
      {{ tab }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabNames: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {emit}) {
      function tabClick(value) {
          emit('tabChange', { value });
      }

      return {tabClick};
  }
}
</script>

<style scoped>
.tab-headers-container {
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 100%;
}

.tab-header {
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid #666;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10px 0;
}
</style>
