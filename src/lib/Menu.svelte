<script lang="ts">
  export let isDarkMode: boolean = false;
  let selectedCategory: string = 'all';
  
  const menuCategories = [
    {
      name: "Farm Fresh Meals",
      items: [
        { name: "Farm-to-Table Salad", price: "₱180", description: "Fresh vegetables from our garden" },
        { name: "Grilled Farm Chicken", price: "₱250", description: "Free-range chicken with herbs" },
        { name: "Organic Rice Bowl", price: "₱200", description: "Local organic rice with vegetables" }
      ]
    },
    {
      name: "Local Specialties",
      items: [
        { name: "Adobong Manok sa Gata", price: "₱280", description: "Chicken adobo in coconut milk" },
        { name: "Sinigang na Baboy", price: "₱300", description: "Pork in sour tamarind soup" },
        { name: "Pinakbet", price: "₱180", description: "Mixed vegetables in shrimp paste" },
        { name: "Kare-Kare", price: "₱320", description: "Oxtail stew with peanut sauce and bagoong" },
        { name: "Lechon Kawali", price: "₱290", description: "Crispy deep-fried pork belly" },
        { name: "Bicol Express", price: "₱275", description: "Spicy pork cooked in coconut milk and chili" },
        { name: "Laing", price: "₱195", description: "Dried taro leaves in coconut milk and shrimp paste" },
        { name: "Sisig", price: "₱260", description: "Sizzling chopped pork face with calamansi and chili" }
      ]
    },
    {
      name: "Filipino Seafood",
      items: [
        { name: "Sinigang na Hipon", price: "₱320", description: "Shrimp in sour tamarind broth" },
        { name: "Inihaw na Pusit", price: "₱280", description: "Grilled squid with calamansi and spices" },
        { name: "Ginataang Alimasag", price: "₱345", description: "Crab in creamy coconut milk" },
        { name: "Paksiw na Isda", price: "₱230", description: "Fish cooked in vinegar and spices" }
      ]
    },
    {
      name: "Farm Snacks",
      items: [
        { name: "Fresh Fruit Platter", price: "₱150", description: "Seasonal fruits from our farm" },
        { name: "Vegetable Lumpia", price: "₱120", description: "Fresh spring rolls" },
        { name: "Kamote Fries", price: "₱100", description: "Sweet potato fries" },
        { name: "Ukoy", price: "₱135", description: "Shrimp and sweet potato fritters" },
        { name: "Kwek-Kwek", price: "₱95", description: "Battered quail eggs with spicy vinegar dip" }
      ]
    },
    {
      name: "Filipino Desserts",
      items: [
        { name: "Halo-Halo", price: "₱150", description: "Mixed sweet beans, fruits, and shaved ice" },
        { name: "Bibingka", price: "₱120", description: "Traditional rice cake with salted egg" },
        { name: "Suman at Mangga", price: "₱130", description: "Sticky rice cake with fresh mango" },
        { name: "Leche Flan", price: "₱110", description: "Creamy caramel custard" },
        { name: "Cassava Cake", price: "₱100", description: "Sweet cassava pudding with coconut" }
      ]
    },
    {
      name: "Beverages",
      items: [
        { name: "Fresh Buko Juice", price: "₱80", description: "Young coconut juice" },
        { name: "Calamansi Juice", price: "₱60", description: "Fresh citrus juice" },
        { name: "Farm Tea", price: "₱70", description: "Herbal tea from our garden" },
        { name: "Sago't Gulaman", price: "₱75", description: "Sweet tapioca and jelly drink" },
        { name: "Kamias Juice", price: "₱65", description: "Refreshing juice from bilimbi fruit" }
      ]
    }
  ];



  // Get unique category names for filtering
  const categories = ['all', ...menuCategories.map(c => c.name)];

  // Filtered categories based on selection
  $: filteredCategories = selectedCategory === 'all' 
    ? menuCategories 
    : menuCategories.filter(cat => cat.name === selectedCategory);
</script>

<section class="menu" id="menu" class:dark={isDarkMode}>
  <div class="container">
    <h2>Our Menu</h2>
    <p class="subtitle">Experience farm-fresh flavors and local delicacies</p>

    <!-- Category Filter Tabs -->
    <div class="category-filter">
      {#each categories as category}
        <button 
          class="filter-btn {selectedCategory === category ? 'active' : ''}"
          on:click={() => selectedCategory = category}
        >
          {category.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
        </button>
      {/each}
    </div>

    <div class="menu-grid">
      {#each filteredCategories as category}
        <div class="menu-category">
          <h3>{category.name}</h3>
          <div class="menu-items">
            {#each category.items as item}
              <div class="menu-item">
                <div class="item-header">
                  <h4>{item.name}</h4>
                  <span class="price">{item.price}</span>
                </div>
                <p class="description">{item.description}</p>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .menu {
    padding: 5rem 2rem;
    background-color: #a3b38c28;
    transition: all 0.3s ease;
  }

  .menu.dark {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  .menu.dark .menu-category {
    background: var(--background-dark-secondary);
  }

  .menu.dark h2,
  .menu.dark h3,
  .menu.dark h4 {
    color: var(--text-light);
  }

  .menu.dark .description {
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

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .menu-category {
    background: var(--white);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  h3 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .menu-item {
    border-bottom: 1px dashed var(--text-light);
    padding-bottom: 1rem;
  }

  .menu-item:last-child {
    border-bottom: none;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: var(--text-color);
    font-size: 1.1rem;
    margin: 0;
  }

  .price {
    color: var(--primary-color);
    font-weight: bold;
  }

  .description {
    color: var(--text-light);
    font-size: 0.9rem;
    font-style: italic;
  }
    /* Add category filter styles */
    .category-filter {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 25px;
    background-color: var(--white);
    color: var(--primary-color);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid var(--primary-color);
    text-transform: capitalize;
  }

  .filter-btn:hover {
    background-color: var(--primary-color);
    color: var(--white);
  }

  .filter-btn.active {
    background-color: var(--primary-color);
    color: var(--white);
  }

  /* Dark mode styles */
  .menu.dark .filter-btn {
    background-color: var(--background-dark-secondary);
    color: var(--text-light);
    border-color: var(--text-light-secondary);
  }

  .menu.dark .filter-btn:hover {
    background-color: var(--primary-color);
    color: var(--text-light);
  }

  .menu.dark .filter-btn.active {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }

  .category-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 0.5rem 0;
  width: 100%;
}

/* Add horizontal scrolling but hide scrollbar for cleaner look */
.category-filter::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

.category-filter {
  -ms-overflow-style: none;  /* For Internet Explorer and Edge */
  scrollbar-width: none;  /* For Firefox */
}

.filter-btn {
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 25px;
  background-color: var(--white);
  color: var(--primary-color);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--primary-color);
  text-transform: capitalize;
  white-space: nowrap;
  flex-shrink: 0;
}



  @media (max-width: 768px) {
    .menu {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .menu-grid {
      grid-template-columns: 1fr;
    }


    .category-filter {
    justify-content: flex-start; /* Start alignment on mobile */
    padding: 0.5rem 1rem;
  }
  
  .filter-btn {
    padding: 0.75rem 0.875rem;
    font-size: 0.9rem;
  }

  }
</style> 