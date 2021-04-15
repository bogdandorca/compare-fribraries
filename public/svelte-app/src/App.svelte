<script>
	import DefaultView from "./components/views/default.svelte";
	import SidebarComponent from "./components/organisms/sidebar.svelte";
</script>

<main>
	<SidebarComponent />
	<DefaultView />
</main>

<style>
	main {
		display: flex;
		height: 100vh;
		width: 100vw;
		flex-flow: row;
	}
</style>
