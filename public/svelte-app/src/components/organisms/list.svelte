<script>
    const params = new URLSearchParams(window.location.search);
    let numberOfListItems = params.get('list-items')  || 10;
</script>

<div class="list-tab">
    <ul>
        {#each new Array(+numberOfListItems) as listItem, i (i)}
            <li>This is item number {i + 1}</li>
        {/each}
    </ul>
</div>

<style>
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
