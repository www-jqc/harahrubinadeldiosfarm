<script lang="ts">
  import Navbar from './lib/Navbar.svelte';
  import Hero from './lib/Hero.svelte';
  import Services from './lib/Services.svelte';
  import About from './lib/About.svelte';
  import Gallery from './lib/Gallery.svelte';
  import Menu from './lib/Menu.svelte';
  import Blog from './lib/Blog.svelte';
  import Contact from './lib/Contact.svelte';
  import Footer from './lib/Footer.svelte';

  let isDarkMode = false;

  function handleDarkModeChange(event: CustomEvent<boolean>) {
    isDarkMode = event.detail;
  }
</script>

<main class:dark={isDarkMode}>
  <Navbar on:darkModeChange={handleDarkModeChange} />
  <Hero {isDarkMode} />
  <Services {isDarkMode} />
  <Menu {isDarkMode} />
  <Gallery {isDarkMode} />
  <About {isDarkMode} />
  <Blog {isDarkMode} />
  <Contact {isDarkMode} />
  <Footer {isDarkMode} />
</main>

<style>
  :global(:root) {
    /* Light mode variables */
    --background-light: #eae4e4;
    --background-light-secondary: #f8f9fa;
    --text-color: #2c3e50;
    --text-light: #666666;
    --text-light-secondary: #888888;
    --primary-color: #27ae60;
    --primary-dark: #219a52;
    --primary-light: #34c271;

    /* Dark mode variables */
    --background-dark: #1a1a1a;
    --background-dark-secondary: #2d2d2d;
    --text-dark: #ffffff;
    --text-dark-secondary: #cccccc;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    overflow-x: hidden;
    padding-top: 70px;
    transition: background-color 0.3s ease;
  }

  main.dark {
    background-color: var(--background-dark);
    color: var(--text-dark);
  }
</style>
