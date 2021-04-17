<script>
	import DefaultView from "./components/views/default.svelte";
	import SidebarComponent from "./components/organisms/sidebar.svelte";
</script>

<main>
	<SidebarComponent />
	<DefaultView />
</main>

<style>
    :global(html, body) {
        position: relative;
        width: 100%;
        height: 100%;
    }

    :global(body) {
        color: #333;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    main {
		display: flex;
		height: 100vh;
		width: 100vw;
		flex-flow: row;
	}
</style>
