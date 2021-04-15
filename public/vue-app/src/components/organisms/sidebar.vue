<template>
  <div class="sidebar">
    <h1>FBR</h1>

    <ul>
      <li>
        <a href="/react">React</a>
      </li>
      <li>
        <a href="/svelte">Svelte</a>
      </li>
      <li>
        <a href="/vue">Vue</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  flex: 1;
  height: 100%;
  border-right: 1px solid #666;
}

h1 {
  width: 100%;
  text-align: center;
  margin-bottom: 100px;
}

ul {
  width: 100%;
  padding: 0;
  list-style: none;
}

li {
  padding: 10px 0;
  text-align: center;
  box-sizing: border-box;
}

li a {
  color: #222;
  text-decoration: none;
}
</style>
