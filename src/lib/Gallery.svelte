<script lang="ts">
  export let isDarkMode: boolean = false;

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1500076656116-558758c991c1',
      alt: 'Beautiful scenic view of our farm with green fields and mountains in the background',
      category: 'Farm'
    },
    {
      src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30',
      alt: 'Children enjoying farm activities and entertainment',
      category: 'Entertainment'
    },
    {
      src: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5',
      alt: 'Farm-to-table dining experience with fresh produce',
      category: 'Dining'
    },
    {
      src: 'https://images.unsplash.com/photo-1530062845289-9109b2c9c868',
      alt: 'Visitors participating in farming activities',
      category: 'Activities'
    },
    {
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
      alt: 'Natural surroundings and wildlife on the farm',
      category: 'Nature'
    },
    {
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3',
      alt: 'Special events and celebrations at the farm',
      category: 'Events'
    },
    {
      src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30',
      alt: 'Organic vegetables fresh from our farm',
      category: 'Farm'
    },
    {
      src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30',
      alt: 'Family picnic area with entertainment',
      category: 'Entertainment'
    },
    {
      src: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
      alt: 'Farm fresh breakfast spread',
      category: 'Dining'
    }
  ];

  let selectedCategory = 'all';
  const categories = ['all', 'Farm', 'Entertainment', 'Dining', 'Activities', 'Nature', 'Events'];

  $: filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);
</script>

<section class="gallery" id="gallery" class:dark={isDarkMode}>
  <div class="container">
    <h2>Our Gallery</h2>
    <p class="subtitle">Experience the beauty and activities of our farm through these snapshots</p>
    
    <div class="category-filters">
      {#each categories as category}
        <button 
          class="category-btn" 
          class:active={selectedCategory === category}
          on:click={() => selectedCategory = category}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      {/each}
    </div>

    <div class="gallery-grid">
      {#each filteredImages as image}
        <div class="gallery-item">
          <img src={image.src} alt={image.alt} />
          <div class="overlay">
            <span class="category">{image.category}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .gallery {
    padding: 5rem 2rem;
    background-color: #cfae6b28;
    transition: all 0.3s ease;
  }

  .gallery.dark {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  .gallery.dark h2 {
    color: var(--text-light);
  }

  .gallery.dark .subtitle {
    color: var(--text-light-secondary);
  }

  .gallery.dark .category-btn {
    background-color: var(--background-dark-secondary);
    color: var(--text-light);
  }

  .gallery.dark .category-btn:hover,
  .gallery.dark .category-btn.active {
    background-color: var(--primary-color);
    color: var(--white);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  .subtitle {
    text-align: center;
    color: var(--text-light);
    margin-bottom: 2rem;
  }

  .category-filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .category-btn {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 25px;
    background-color: var(--white);
    color: var(--text-color);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .category-btn:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }

  .category-btn.active {
    background-color: var(--primary-color);
    color: var(--white);
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    aspect-ratio: 1;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    background-color: var(--background-light-secondary);
  }

  .gallery.dark .gallery-item img {
    background-color: var(--background-dark-secondary);
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    padding: 1rem;
    color: var(--white);
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .gallery-item:hover .overlay {
    transform: translateY(0);
  }

  .category {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @media (max-width: 768px) {
    .gallery {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .category-filters {
      gap: 0.5rem;
    }

    .category-btn {
      padding: 0.4rem 1rem;
      font-size: 0.9rem;
    }

    .gallery-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
    }
  }
</style> 