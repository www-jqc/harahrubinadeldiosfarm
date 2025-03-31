<script lang="ts">
  export let isDarkMode: boolean = false;
  
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
        { name: "Pinakbet", price: "₱180", description: "Mixed vegetables in shrimp paste" }
      ]
    },
    {
      name: "Farm Snacks",
      items: [
        { name: "Fresh Fruit Platter", price: "₱150", description: "Seasonal fruits from our farm" },
        { name: "Vegetable Lumpia", price: "₱120", description: "Fresh spring rolls" },
        { name: "Kamote Fries", price: "₱100", description: "Sweet potato fries" }
      ]
    },
    {
      name: "Beverages",
      items: [
        { name: "Fresh Buko Juice", price: "₱80", description: "Young coconut juice" },
        { name: "Calamansi Juice", price: "₱60", description: "Fresh citrus juice" },
        { name: "Farm Tea", price: "₱70", description: "Herbal tea from our garden" }
      ]
    }
  ];
</script>

<section class="menu" id="menu" class:dark={isDarkMode}>
  <div class="container">
    <h2>Our Menu</h2>
    <p class="subtitle">Experience farm-fresh flavors and local delicacies</p>

    <div class="menu-grid">
      {#each menuCategories as category}
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
    background-color: #92339c28;
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
  }
</style> 