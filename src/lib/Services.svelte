<script lang="ts">
  export let isDarkMode: boolean = false;

  const services = [
    {
      title: 'Entertainment',
      description: 'Enjoy various entertainment activities including games, live performances, and family-friendly events.',
      icon: '🎮'
    },
    {
      title: 'Food & Dining',
      description: 'Savor fresh, farm-to-table meals with our diverse menu of local and international cuisine.',
      icon: '🍽️'
    },
    {
      title: 'Farm Experiences',
      description: 'Immerse yourself in authentic farm life with guided tours and hands-on activities.',
      icon: '🌾'
    }
  ];
</script>

<section class="services" id="services" class:dark={isDarkMode}>
  <h2>Our Services</h2>
  <div class="services-grid">
    {#each services as service}
      <div class="service-card">
        <div class="service-icon">{service.icon}</div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .services {
    padding: 5rem 2rem;
    background-color: var(--background-light);
    transition: all 0.3s ease;
  }

  .services.dark {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  .services.dark .service-card {
    background: var(--background-dark-secondary);
  }

  .services.dark h2,
  .services.dark h3 {
    color: var(--text-light);
  }

  .services.dark p {
    color: var(--text-light-secondary);
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 3rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .service-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .services {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .services-grid {
      grid-template-columns: 1fr;
    }
  }
</style> 