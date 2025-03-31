<script lang="ts">
  export let isDarkMode: boolean = false;

  const services = [
    {
      title: 'Entertainment',
      description: 'Enjoy various entertainment activities including games, live performances, and family-friendly events.',
      icon: '🎮',
      features: [
        'Live music performances every weekend',
        'Outdoor movie nights under the stars',
        'Seasonal festivals and cultural celebrations',
        'Interactive games and activities for all ages'
      ],

    },
    {
      title: 'Food & Dining',
      description: 'Savor fresh, farm-to-table meals with our diverse menu of local and international cuisine.',
      icon: '🍽️',
      features: [
        'Fresh organic ingredients harvested daily',
        'Seasonal menu showcasing local specialties',
        'Cooking classes and food workshops',
        'Special dietary options available (vegetarian, vegan, gluten-free)'
      ],
    
    },
    {
      title: 'Farm Experiences',
      description: 'Immerse yourself in authentic farm life with guided tours and hands-on activities.',
      icon: '🌾',
      features: [
        'Guided farm tours with our expert staff',
        'Animal feeding and interaction experiences',
        'Hands-on harvesting and planting activities',
        'Educational workshops about sustainable farming'
      ],
   
    },
    {
      title: 'Wellness Retreats',
      description: 'Reconnect with nature and yourself through our rejuvenating wellness programs and activities.',
      icon: '🧘',
      features: [
        'Morning yoga sessions in our garden pavilion',
        'Guided meditation and mindfulness practices',
        'Forest bathing and nature walks',
        'Herbal tea workshops using farm-grown ingredients'
      ],
    
    },
    {
      title: 'Educational Tours',
      description: 'Learn about sustainable farming, local ecosystems, and agricultural practices through our educational programs.',
      icon: '🎓',
      features: [
        'School field trips with age-appropriate activities',
        'Workshops on sustainable agriculture',
        'Biodiversity and wildlife conservation talks',
        'Hands-on science experiments for children'
      ],
   
    },
    {
      title: 'Special Events',
      description: 'Create unforgettable memories with our custom event hosting services for celebrations and gatherings.',
      icon: '🎉',
      features: [
        'Wedding ceremonies and receptions in natural settings',
        'Corporate team-building events and retreats',
        'Birthday parties with custom farm activities',
        'Anniversary celebrations with special dining options'
      ],
    
    }
  ];
</script>

<section class="services" id="services" class:dark={isDarkMode}>
  <div class="container">
    <h2>Our Services</h2>
    <p class="services-intro">Experience the best of farm life with our diverse range of activities and offerings. From entertainment to dining, wellness to education, we provide memorable experiences for visitors of all ages.</p>
    
    <div class="services-grid">
      {#each services as service}
        <div class="service-card">
          <div class="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p class="service-description">{service.description}</p>
          
          <div class="service-features">
            <h4>What we offer:</h4>
            <ul>
              {#each service.features as feature}
                <li>{feature}</li>
              {/each}
            </ul>
          </div>
     
        </div>
      {/each}
    </div>
    
    <div class="services-highlight">
      <div class="highlight-content">
        <h3>Seasonal Specialties</h3>
        <p>Don't miss our rotating seasonal offerings that showcase the best experiences based on the time of year!</p>
        <div class="seasonal-items">
          <div class="seasonal-item">
            <span class="seasonal-icon">🌱</span>
            <p><strong>Spring:</strong> Planting workshops and baby animal interactions</p>
          </div>
          <div class="seasonal-item">
            <span class="seasonal-icon">☀️</span>
            <p><strong>Summer:</strong> Harvest festivals and outdoor dining experiences</p>
          </div>
          <div class="seasonal-item">
            <span class="seasonal-icon">🍂</span>
            <p><strong>Fall:</strong> Pumpkin patches and autumn-themed activities</p>
          </div>
          <div class="seasonal-item">
            <span class="seasonal-icon">❄️</span>
            <p><strong>Winter:</strong> Holiday celebrations and cozy farm gatherings</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="services-cta-banner">
      <h3>Ready to plan your farm visit?</h3>
      <p>Contact us to customize your perfect farm experience or book any of our services.</p>
  
    </div>


    
  </div>
</section>

<style>
  .services {
    padding: 5rem 2rem;
    background-color: #c3868656;
    transition: all 0.3s ease;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  .services.dark {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  .services.dark .service-card {
    background: var(--background-dark-secondary);
  }

  .services.dark h2,
  .services.dark h3,
  .services.dark h4 {
    color: var(--text-light);
  }

  .services.dark p {
    color: var(--text-light-secondary);
  }

  .services.dark .services-highlight {
    background-color: var(--background-dark-secondary);
  }


  .services.dark .services-cta-banner {
    background-color: rgba(60, 60, 60, 0.8);
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  .services-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: #555;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .service-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
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

  .service-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .service-features {
    text-align: left;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .service-features h4 {
    color: #2c3e50;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .service-features ul {
    padding-left: 1.5rem;
    margin: 0;
  }

  .service-features li {
    margin-bottom: 0.5rem;
    color: #555;
  }



  /* Seasonal Highlight Section */
  .services-highlight {
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 2rem;
    margin: 2rem 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  .highlight-content h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  .highlight-content > p {
    text-align: center;
    margin-bottom: 2rem;
    color: #555;
  }

  .seasonal-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .seasonal-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .seasonal-icon {
    font-size: 2rem;
  }

  .seasonal-item p {
    margin: 0;
    line-height: 1.4;
  }

  /* CTA Banner */
  .services-cta-banner {
    background-color: rgba(39, 174, 96, 0.1);
    border-radius: 10px;
    padding: 2.5rem;
    margin-top: 3rem;
    text-align: center;
  }

  .services-cta-banner h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }

  .services-cta-banner p {
    margin-bottom: 1.5rem;
    color: #555;
  }



  @media (max-width: 992px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .seasonal-items {
      grid-template-columns: repeat(2, 1fr);
    }
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
    
    .services-highlight {
      padding: 1.5rem;
    }
  }

  @media (max-width: 576px) {
    .seasonal-items {
      grid-template-columns: 1fr;
    }
    
    .services-cta-banner {
      padding: 1.5rem;
    }
    
    .service-card {
      padding: 1.5rem;
    }
  }
</style>