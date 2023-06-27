<script lang="ts">
    export let color: string;
</script>
<style lang="scss">
    button {
        padding: 1em 3em;
        font-weight: 700;
        border-radius: 0.75em;
        border: none;
    }   
</style>

<button style="background-color: {color}"><slot /></button>