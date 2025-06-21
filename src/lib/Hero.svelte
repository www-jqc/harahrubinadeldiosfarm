<script lang="ts">
  import { onMount } from 'svelte';
  
  let isVisible = false;
  let currentTextIndex = 0;
  let animatedText = '';
  let isTyping = true;
  
  export let isDarkMode: boolean = false;
  
  const animatedTexts = [
    "Experience the perfect blend of nature, entertainment, and delicious food",
    "Discover farm-to-table dining at its finest",
    "Create unforgettable memories with family and friends",
    "Immerse yourself in sustainable agriculture and wellness"
  ];
  
  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
    
    // Animated text typing effect
    const typeText = async () => {
      const currentText = animatedTexts[currentTextIndex];
      animatedText = '';
      
      for (let i = 0; i < currentText.length; i++) {
        animatedText += currentText[i];
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Wait before erasing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Erase text
      isTyping = false;
      for (let i = currentText.length; i >= 0; i--) {
        animatedText = currentText.substring(0, i);
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      // Move to next text
      currentTextIndex = (currentTextIndex + 1) % animatedTexts.length;
      isTyping = true;
      
      // Continue the cycle
      setTimeout(typeText, 500);
    };
    
    typeText();
  });
</script>

<section class="hero" id="home" class:dark={isDarkMode}>
  <!-- Static Background Image -->
  <div class="static-background"></div>
  
  <div class="hero-content" class:fade-in={isVisible}>
    <div class="hero-badge">
      <span class="badge-icon">🌾</span>
      <span class="badge-text">Organic & Sustainable</span>
    </div>
    
    <h1 class="hero-title">
      <span class="title-line">Welcome to</span>
      <span class="title-highlight">Harah Rubina Del Dios Farm</span>
    </h1>
    
    <p class="hero-subtitle">
      <span class="typing-text">{animatedText}</span>
      <span class="cursor" class:blink={isTyping}>|</span>
    </p>
    
    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-number">500+</span>
        <span class="stat-label">Happy Visitors</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">50+</span>
        <span class="stat-label">Farm Activities</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">100%</span>
        <span class="stat-label">Organic</span>
      </div>
    </div>
    
    <div class="cta-buttons">
      <a href="#services" class="cta-primary">
        <span class="cta-icon">🚀</span>
        Explore Services
      </a>
      <a href="#contact" class="cta-secondary">
        <span class="cta-icon">📞</span>
        Contact Us
      </a>
      <a href="#gallery" class="cta-tertiary">
        <span class="cta-icon">📸</span>
        View Gallery
      </a>
    </div>
    
    <div class="scroll-indicator">
      <span class="scroll-text">Scroll to explore</span>
      <div class="scroll-arrow">↓</div>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 0 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .static-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(163, 40, 200, 0.5), rgba(66, 64, 64, 0.5)),
                url('https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/486120651_122202682292173920_5083378061073013915_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG1veJ5mQRzp0S2nMdyT0UmSOSWXslQkU1I5JZeyVCRTcM5ky16rITX8kHSRzTneviA50855Pc1dNXu6Qo28q1S&_nc_ohc=LHLM2_om7_4Q7kNvgHPw1Aw&_nc_oc=Adn0ENzIGhntvHGhYNG9Sb9YDPiFR4Y06UytHkn_VXewmhXzjurkbZIgQL2lfMDPRfE&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=lGOxfe3V5KicaA9egxfOUQ&oh=00_AYFr-RsdokW7oqSNgBMPR4L5ycjQSTm00S5RHGS6h4cp6g&oe=67EFE3D4') center/cover no-repeat;
    z-index: 1;
  }

  .hero.dark .static-background {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/486120651_122202682292173920_5083378061073013915_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG1veJ5mQRzp0S2nMdyT0UmSOSWXslQkU1I5JZeyVCRTcM5ky16rITX8kHSRzTneviA50855Pc1dNXu6Qo28q1S&_nc_ohc=LHLM2_om7_4Q7kNvgHPw1Aw&_nc_oc=Adn0ENzIGhntvHGhYNG9Sb9YDPiFR4Y06UytHkn_VXewmhXzjurkbZIgQL2lfMDPRfE&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=lGOxfe3V5KicaA9egxfOUQ&oh=00_AYFr-RsdokW7oqSNgBMPR4L5ycjQSTm00S5RHGS6h4cp6g&oe=67EFE3D4') center/cover no-repeat;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
    max-width: 1200px;
    width: 100%;
  }

  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .badge-icon {
    font-size: 1.2rem;
  }

  .badge-text {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .hero-title {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .title-line {
    display: block;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.9;
  }

  .title-highlight {
    display: block;
    background: linear-gradient(45deg, #27ae60, #34c271);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 30px rgba(39, 174, 96, 0.3);
  }

  .hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    min-height: 2rem;
  }

  .typing-text {
    display: inline-block;
  }

  .cursor {
    display: inline-block;
    width: 2px;
    height: 1.3rem;
    background-color: white;
    margin-left: 2px;
    animation: blink 1s infinite;
  }

  .cursor.blink {
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2.5rem;
    font-weight: 700;
    color: #27ae60;
    text-shadow: 0 0 20px rgba(39, 174, 96, 0.5);
  }

  .stat-label {
    display: block;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0.25rem;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  .cta-primary, .cta-secondary, .cta-tertiary {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .cta-primary {
    background: linear-gradient(45deg, #27ae60, #34c271);
    color: white;
    box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
  }

  .cta-secondary {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
  }

  .cta-tertiary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .cta-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(39, 174, 96, 0.4);
  }

  .cta-secondary:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }

  .cta-tertiary:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }

  .cta-icon {
    font-size: 1.1rem;
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    animation: bounce 2s infinite;
  }

  .scroll-text {
    display: block;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
  }

  .scroll-arrow {
    font-size: 1.5rem;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }

    .title-line {
      font-size: 1.5rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .hero-stats {
      gap: 2rem;
    }

    .stat-number {
      font-size: 2rem;
    }

    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }

    .cta-primary, .cta-secondary, .cta-tertiary {
      width: 100%;
      max-width: 300px;
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 2rem;
    }

    .title-line {
      font-size: 1.2rem;
    }

    .hero-stats {
      gap: 1.5rem;
    }

    .stat-number {
      font-size: 1.8rem;
    }
  }
</style> 
