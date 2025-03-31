<script lang="ts">
  export let isDarkMode: boolean = false;

  const farmInfo = {
    title: "About Our Farm",
    description: "Harah Rubina Del Dios Farm is a family-owned agricultural paradise nestled in the heart of nature. We combine traditional farming practices with modern entertainment and dining experiences to create a unique destination for visitors of all ages.",
    features: [
      {
        title: "Our Story",
        content: "Founded with a passion for sustainable agriculture and community engagement, our farm has grown into a beloved destination for families and nature enthusiasts."
      },
      {
        title: "Our Mission",
        content: "To provide an authentic farm experience while promoting sustainable agriculture, environmental awareness, and community connection."
      },
      {
        title: "Our Vision",
        content: "To be the premier destination for farm experiences, entertainment, and farm-to-table dining in our region."
      }
    ]
  };
</script>

<section class="about" id="about" class:dark={isDarkMode}>
  <div class="container">
    <h2>{farmInfo.title}</h2>
    <p class="description">{farmInfo.description}</p>
    
    <div class="features-grid">
      {#each farmInfo.features as feature}
        <div class="feature-card">
          <h3>{feature.title}</h3>
          <p>{feature.content}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .about {
    padding: 5rem 2rem;
    background-color: #fbf2f656;
    transition: all 0.3s ease;
  }

  .about.dark {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  .about.dark .feature-card {
    background: var(--background-dark-secondary);
  }

  .about.dark h2,
  .about.dark h3 {
    color: var(--text-light);
  }

  .about.dark p {
    color: var(--text-light-secondary);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 2rem;
  }

  .description {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
    color: var(--text-light);
    line-height: 1.8;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: var(--background-light);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-light);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .about {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .description {
      font-size: 1rem;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style> 