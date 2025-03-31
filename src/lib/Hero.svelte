<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  
  export let isDarkMode: boolean = false;
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });
</script>

<section class="hero" id="home" class:dark={isDarkMode}>
  <div class="hero-content" class:fade-in={isVisible}>
    <h1>Welcome to Harah Rubina Del Dios Farm</h1>
    <p>Experience the perfect blend of nature, entertainment, and delicious food</p>
    <div class="cta-buttons">
      <a href="#services" class="cta-primary">Explore Services</a>
      <a href="#contact" class="cta-secondary">Contact Us</a>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    background: linear-gradient(rgba(163, 40, 200, 0.5), rgba(66, 64, 64, 0.5)),
                url('/dist/gallery/bg.png') center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 0 1rem;
    transition: all 0.3s ease;
  }

  .hero.dark {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('/dist/gallery/bg.png') center/cover no-repeat;
  }

  .hero-content {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
  }

  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .cta-primary, .cta-secondary {
    padding: 1rem 2rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .cta-primary {
    background-color: #27ae60;
    color: white;
  }

  .cta-secondary {
    background-color: transparent;
    color: white;
    border: 2px solid white;
  }

  .cta-primary:hover {
    background-color: #219a52;
    transform: translateY(-2px);
  }

  .cta-secondary:hover {
    background-color: white;
    color: #27ae60;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }

    .cta-buttons {
      flex-direction: column;
    }

    .cta-primary, .cta-secondary {
      width: 100%;
      text-align: center;
    }
  }
</style> 