<script>
    import { CodeIcon, TerminalIcon, HomeIcon, MessageSquareIcon, FileTextIcon, GithubIcon, DropletIcon } from "svelte-feather-icons";
</script>

<header>
    <ul>
        <li>
            <a href="/"> <HomeIcon size="16" strokeWidth="2.3" /></a>
        </li>
        <li>
            <a href="/blog"><FileTextIcon size="16" strokeWidth="2.3" /></a>
        </li>
        <li>
            <a href="/projects"><CodeIcon size="16" strokeWidth="2.3" /></a>
        </li>
    </ul>

    <ul>
        <li>
            <a href="https://github.com/mystere1337"><GithubIcon size="16" strokeWidth="2.3" /></a>
        </li>
    </ul>
</header>

<style lang="scss">
    header {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 2rem 0 2rem;
        height: 50px;
        max-height: 50px;
        color: #abb2bf;
        position: sticky;
        top: 0;
    }

    header ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        gap: 2rem;
    }

    header li {
        margin: 0;
    }

    header a {
        text-decoration: none;
        color: inherit;
        transition-duration: 200ms;
        color: #abb2bf;
        opacity: 30%;
        &:hover {
            opacity: 100%;
        }
    }
</style>
