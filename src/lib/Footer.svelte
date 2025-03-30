<script lang="ts">
  export let isDarkMode: boolean = false;
</script>

<footer class="footer" class:dark={isDarkMode}>
  <div class="footer-content">
    <div class="footer-section">
      <h3>Harah Rubina Del Dios Farm</h3>
      <p>Your perfect destination for farm experiences, entertainment, and delicious food.</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#menu">Menu</a>
      <a href="#gallery">Gallery</a>
      <a href="#blog">Blog</a>
      <a href="#about">About</a>
    </div>
    <div class="footer-section">
      <h3>Contact Info</h3>
      <p>📍 123 Farm Road, Rural Area, City</p>
      <p>📞 (123) 456-7890</p>
      <p>✉️ info@harahrubinafarm.com</p>
      <p>⏰ Open Daily: 9:00 AM - 6:00 PM</p>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" class="social-link">
          <span class="icon">📘</span> Facebook
        </a>
        <a href="https://instagram.com" target="_blank" class="social-link">
          <span class="icon">📸</span> Instagram
        </a>
        <a href="https://twitter.com" target="_blank" class="social-link">
          <span class="icon">🐦</span> Twitter
        </a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Harah Rubina Del Dios Farm. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background-color: #f8f9fa;
    padding: 4rem 2rem 1rem;
    transition: background-color 0.3s ease;
  }

  .footer.dark {
    background-color: #1a1a1a;
    color: #ffffff;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .footer-section h3 {
    margin-bottom: 1rem;
    color: #27ae60;
  }

  .footer-section p {
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }

  .footer-section a {
    display: block;
    color: #2c3e50;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
  }

  .footer.dark .footer-section a {
    color: #ffffff;
  }

  .footer-section a:hover {
    color: #27ae60;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon {
    font-size: 1.2rem;
  }

  .footer-bottom {
    margin-top: 2rem;
    padding-top: 1rem;
    text-align: center;
    border-top: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    .footer-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .social-links {
      align-items: center;
    }
  }
</style> 