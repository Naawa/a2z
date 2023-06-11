<script lang="ts">
    export let color: string;
</script>
<style lang="scss">
    button {
        font-size: clamp(12px, 100%, 28px);
        padding: 16px 48px;
        font-weight: 700;
        border-radius: 8px;
        border: none;
    }   
</style>

<button style="background-color: {color}"><slot /></button>