<script lang="ts">
    export let color: string;
</script>
<style lang="scss">
    button {
        font-size: 24px;
        padding: 10px 76px;
        font-weight: 700;
        border-radius: 8px;
        border: none;
    }   
</style>

<button style="background-color: {color}"><slot /></button>