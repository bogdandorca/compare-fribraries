<script>
    import { createEventDispatcher } from 'svelte';

    export let tabNames = [];

    const dispatch = createEventDispatcher();
</script>

<div class="tab-headers-container">
    {#each tabNames as tab, i}
        <div class="tab-header" on:click={() => dispatch('tabChange', i)}>
            {tab}
        </div>
    {/each}
</div>

<style>
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
