<script>
  import { onMount, createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  let isMenuOpen = false;
  let isDarkMode = false;
  let showScrollTop = false;
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const closeMenu = () => {
    isMenuOpen = false;
  };

  const toggleDarkMode = () => {
    isDarkMode = !isDarkMode;
    dispatch('darkModeChange', isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onMount(() => {
    window.addEventListener('scroll', () => {
      showScrollTop = window.scrollY > 300;
    });
  });
</script>

<nav class="navbar" class:dark={isDarkMode}>
  <div class="logo">
    <a href="/" on:click={closeMenu}>Harah Rubina Del Dios Farm</a>
  </div>
  
  <button class="menu-toggle" on:click={toggleMenu} aria-label="Toggle menu">
    <span class="hamburger"></span>
    <span class="hamburger"></span>
    <span class="hamburger"></span>
  </button>

  <div class="nav-links" class:open={isMenuOpen}>
    <a href="#home" on:click={closeMenu}>Home</a>
    <a href="#services" on:click={closeMenu}>Services</a>
    <a href="#menu" on:click={closeMenu}>Menu</a>
    <a href="#gallery" on:click={closeMenu}>Gallery</a>
    <a href="#about" on:click={closeMenu}>About Us</a>
    <a href="#blog" on:click={closeMenu}>Blog</a>
    <a href="#contact" on:click={closeMenu}>Contact Us</a>
    <button class="theme-toggle" on:click={toggleDarkMode}>
      {#if isDarkMode}
        🌞
      {:else}
        🌙
      {/if}
    </button>
    <a href="https://facebook.com" target="_blank" class="facebook-btn" on:click={closeMenu}>
      Facebook Page
    </a>
  </div>
</nav>

{#if showScrollTop}
  <button class="scroll-top" on:click={scrollToTop} aria-label="Scroll to top">
    ↑
  </button>
{/if}

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: background-color 0.3s ease;
  }

  .navbar.dark {
    background-color: #1a1a1a;
  }

  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .nav-links a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .navbar.dark .nav-links a,
  .navbar.dark .logo a {
    color: #ffffff;
  }

  .nav-links a:hover {
    color: #27ae60;
  }

  .theme-toggle {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
  }

  .facebook-btn {
    background-color: #1877f2;
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .facebook-btn:hover {
    background-color: #1664d9;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .hamburger {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #2c3e50;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  .scroll-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #27ae60;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    transition: background-color 0.3s ease;
    z-index: 999;
  }

  .scroll-top:hover {
    background-color: #219a52;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }

    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background-color: #ffffff;
      flex-direction: column;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .navbar.dark .nav-links {
      background-color: #1a1a1a;
    }

    .nav-links.open {
      display: flex;
    }

    .nav-links a {
      padding: 0.5rem 0;
    }
  }
</style> 