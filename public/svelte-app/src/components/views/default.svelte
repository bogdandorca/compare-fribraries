<script>
    import Tabs from "../molecules/tabs.svelte";
    import List from "../organisms/list.svelte";

    let tabs = ['list', 'form'];
    let activeTab = tabs[0];

    function tabChanged(e) {
        activeTab = tabs[e.detail];
    }
</script>

<div class="default-template">
    <Tabs tabNames={tabs} on:tabChange={tabChanged} />
    {#if activeTab === 'list'}
        <List />
    {/if}
</div>

<style>
    .default-template {
        padding: 20px 10px;
        box-sizing: border-box;
        height: 100%;
        flex: 4;
    }
</style>

