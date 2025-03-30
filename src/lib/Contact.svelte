<script lang="ts">
  export let isDarkMode: boolean = false;

  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };
</script>

<section class="contact" id="contact" class:dark={isDarkMode}>
  <div class="container">
    <h2>Contact Us</h2>
    <p class="subtitle">Get in touch with us for bookings and inquiries</p>

    <div class="contact-grid">
      <div class="contact-info">
        <div class="info-item">
          <h3>Location</h3>
          <p>123 Farm Road</p>
          <p>Rural Area, City</p>
          <p>Country</p>
        </div>

        <div class="info-item">
          <h3>Contact Details</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@harahrubinafarm.com</p>
          <p>Hours: Mon-Sun, 9:00 AM - 6:00 PM</p>
        </div>

        <div class="info-item">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61555217610211" aria-label="Facebook">📘</a>
            <a href="https://www.facebook.com/profile.php?id=61555217610211" aria-label="Instagram">📸</a>
            <a href="https://www.facebook.com/profile.php?id=61555217610211" aria-label="Twitter">🐦</a>
          </div>
        </div>
      </div>

      <form class="contact-form" on:submit={handleSubmit}>
        <div class="form-group">
          <label for="name">Name</label>
          <input 
            type="text" 
            id="name" 
            bind:value={formData.name} 
            required
            placeholder="Your name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            bind:value={formData.email} 
            required
            placeholder="Your email"
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input 
            type="tel" 
            id="phone" 
            bind:value={formData.phone} 
            placeholder="Your phone number"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            bind:value={formData.message} 
            required
            placeholder="Your message"
            rows="5"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 5rem 2rem;
    background-color: var(--background-light);
    transition: all 0.3s ease;
  }

  .contact.dark {
    background-color: var(--background-dark);
    color: var(--text-light);
  }

  .contact.dark h2,
  .contact.dark h3 {
    color: var(--text-light);
  }

  .contact.dark p {
    color: var(--text-light-secondary);
  }

  .contact.dark .contact-form {
    background: var(--background-dark-secondary);
  }

  .contact.dark label {
    color: var(--text-light);
  }

  .contact.dark input,
  .contact.dark textarea {
    background: var(--background-dark);
    border-color: var(--background-dark-secondary);
    color: var(--text-light);
  }

  .contact.dark input:focus,
  .contact.dark textarea:focus {
    border-color: var(--primary-light);
  }

  .contact.dark .social-links a {
    color: var(--text-light);
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

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .info-item h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .info-item p {
    color: var(--text-light);
    margin-bottom: 0.5rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-links a {
    font-size: 1.5rem;
    color: var(--text-color);
    transition: color 0.3s ease;
  }

  .social-links a:hover {
    color: var(--primary-color);
  }

  .contact-form {
    background: var(--background-light);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-color);
    font-weight: 500;
  }

  input, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  .submit-btn {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .submit-btn:hover {
    background-color: var(--primary-dark);
  }

  @media (max-width: 768px) {
    .contact {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-info {
      text-align: center;
    }

    .social-links {
      justify-content: center;
    }
  }
</style> 