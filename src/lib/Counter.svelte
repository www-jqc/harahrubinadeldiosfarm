<script lang="ts">
  let count = 0;
  const increment = () => {
    count += 1;
  }
</script>

<button on:click={increment}>
  count is {count}
</button>

<style>
  button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color, #27ae60);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--primary-dark, #219a52);
  }
</style>
