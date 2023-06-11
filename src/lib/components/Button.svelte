<script lang="ts">
    export let color: string;
</script>
<style lang="scss">
    button {
        font-size: clamp(8px, 100%, 24px);
        padding: 10px 56px;
        font-weight: 700;
        border-radius: 8px;
        border: none;
    }   
</style>

<button style="background-color: {color}"><slot /></button>