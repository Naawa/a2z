<script lang="ts">
    export let properties: object;
    import { fly } from "svelte/transition";
</script>
<style lang="scss">
    input {
        border: solid 0.25em black;
        border-radius: 0.75rem;
        padding: 0.75rem 1.5em;
        width: clamp(200px, 100%, 400px);
        font-style: italic;
        color: var(--warm);
    }
</style>
<input {...properties}>