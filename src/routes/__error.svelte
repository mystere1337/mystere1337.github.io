<script context="module">
    /** @type {import('@sveltejs/kit').Load} */ export function load({
        error,
        status,
    }) {
        return {
            props: {
                status: `${status}`,
                error: `${error.message}`,
            },
        };
    };
</script>

<script>
    export let status;
    export let error;
</script>

<h1>{status}</h1>
<p>{error}</p>
