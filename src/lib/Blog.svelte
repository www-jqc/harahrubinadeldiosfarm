<script lang="ts">
  export let isDarkMode: boolean = false;
  
  const blogPosts = [
    {
      title: "Farm-to-Table: Our Journey",
      date: "March 30, 2024",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0",
      excerpt: "Discover how we bring fresh, organic produce from our farm directly to your plate. Our commitment to quality and sustainability ensures the best dining experience.",
      category: "Farm Life"
    },
    {
      title: "Sustainable Farming Practices",
      date: "March 25, 2024",
      image: "https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/485819425_122202682352173920_6778488172258995875_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG8jL7idNEqqCgth3iApJSayaDTsrMdSavJoNOysx1Jq9HwCNUo-05WjqibMEyO0bJeHg4BdcnQmwO6BqlOS5X0&_nc_ohc=zotXG5KE6h4Q7kNvgHjnYah&_nc_oc=Adm0qDRgTp0lcR2iUeu7Alwy3LShtkCX8wQjt4J59UGscN2teA6xoL_b2Kib8WLE-Q8&_nc_zt=23&_nc_ht=scontent.fmnl17-5.fna&_nc_gid=FnaUnU6Qfe3FP3sNNaSWrg&oh=00_AYE_F2O8AalTZfJV2jguU3K9a_QZMORVjnS9PDOzVxVkMw&oe=67EF1537",
      excerpt: "Learn about our eco-friendly farming methods and commitment to sustainability. From organic composting to water conservation, we're leading the way.",
      category: "Agriculture"
    },
    {
      title: "Family Fun at the Farm",
      date: "March 20, 2024",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      excerpt: "Explore the various activities families can enjoy during their visit to our farm. From animal feeding to hayrides, there's something for everyone!",
      category: "Entertainment"
    },
    {
      title: "Seasonal Recipes from Our Kitchen",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449",
      excerpt: "Try these delicious recipes using fresh ingredients from our farm. Our chef shares secret tips for making the most of seasonal produce.",
      category: "Food"
    },
    {
      title: "Behind the Scenes: Farm Operations",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
      excerpt: "Get an inside look at how we maintain and operate our farm. From dawn to dusk, see what makes our farm special and sustainable.",
      category: "Farm Life"
    },
    {
      title: "Events & Celebrations at the Farm",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
      excerpt: "See how we host special occasions and create memorable experiences. Perfect for weddings, corporate events, and family celebrations.",
      category: "Events"
    }
  ];
</script>

<section class="blog" id="blog" class:dark={isDarkMode}>
  <div class="container">
    <h2>Farm Blog</h2>
    <p class="subtitle">Stories and updates from our farm</p>

    <div class="blog-grid">
      {#each blogPosts as post}
        <article class="blog-card">
          <div class="blog-image">
            <img src={post.image} alt={post.title} />
            <span class="category">{post.category}</span>
          </div>
          <div class="blog-content">
            <span class="date">{post.date}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
         
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .blog {
    padding: 5rem 2rem;
    background-color: var(--background-light);
    transition: all 0.3s ease;
  }

  .blog.dark {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  .blog.dark .blog-card {
    background: var(--background-dark-secondary);
  }

  .blog.dark h2,
  .blog.dark h3 {
    color: var(--text-light);
  }

  .blog.dark p {
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
    margin-bottom: 1rem;
  }

  .subtitle {
    text-align: center;
    color: var(--text-light);
    margin-bottom: 3rem;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
  }

  .blog-card {
    background: var(--white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }

  .blog-card:hover {
    transform: translateY(-5px);
  }

  .blog-image {
    position: relative;
    height: 200px;
  }

  .blog-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: var(--background-light-secondary);
    transition: transform 0.3s ease;
  }

  .blog.dark .blog-image img {
    background-color: var(--background-dark-secondary);
  }

  .category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
  }

  .blog-content {
    padding: 1.5rem;
  }

  .date {
    color: var(--text-light);
    font-size: 0.9rem;
  }

  h3 {
    margin: 0.5rem 0;
    color: var(--text-color);
    font-size: 1.3rem;
  }

  p {
    color: var(--text-light);
    margin-bottom: 1rem;
    line-height: 1.6;
  }



  @media (max-width: 768px) {
    .blog {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .blog-grid {
      grid-template-columns: 1fr;
    }
  }
</style> 