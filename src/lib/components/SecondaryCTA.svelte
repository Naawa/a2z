<style lang="scss">
    button {
        padding: 0.75rem;
        width: clamp(200px, 25vw, 400px);
        font-weight: 700;
        border-radius: 0.75rem;
        border: solid 0.25em var(--accent);
        background-color: var(--light);
        transition: 0.3s;
        color: var(--accent);
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        
        &:hover {
            color: var(--light);
            border: solid 0.25em var(--accent);
            background-color: var(--accent);
        }
    }   
</style>

<button>
    <slot />
</button>