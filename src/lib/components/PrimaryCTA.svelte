<style lang="scss">
    button {
        padding: 0.75rem;
        width: clamp(200px, 25vw, 400px);
        font-weight: 700;
        border-radius: 0.75rem;
        border: solid 0.25em var(--accent);
        background-color: var(--accent);
        transition: 0.3s;
        color: var(--light);
        
        
        &:hover {
            background-color: var(--light);
            color: var(--accent);
        }
    }   
</style>

<button>
    <slot />
</button>