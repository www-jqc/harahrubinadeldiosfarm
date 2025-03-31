<script lang="ts">
  export let isDarkMode: boolean = false;

  let formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    alert('Thank you for your message! We will get back to you shortly.');
    formData = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  };
</script>

<section class="contact" id="contact" class:dark={isDarkMode}>
  <div class="container">
    <h2>Contact Us</h2>
    <p class="subtitle">We'd love to hear from you!</p>
    
    <div class="benefits-bar">
      <div class="benefit-item">
        <span class="benefit-icon">⏱️</span>
        <p>Quick Response</p>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">👨‍👩‍👧‍👦</span>
        <p>Family-Friendly</p>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">🌿</span>
        <p>Organic Experiences</p>
      </div>
      <div class="benefit-item">
        <span class="benefit-icon">📅</span>
        <p>Flexible Booking</p>
      </div>
    </div>

    <div class="contact-grid">
      <div class="contact-info">
        <div class="info-item">
          <h3>Find Us</h3>
          <p>123 Farm Road</p>
          <p>Rural Area, City</p>
          <p>Country</p>
          
          <!-- Google Maps Integration -->
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.694613418461!2d124.8618594757927!3d8.431620691607778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffbf004c71e423%3A0xc88cc7e1fd255381!2sHarah%20Robina%20Del%20Dios!5e0!3m2!1sen!2sph!4v1743391375668!5m2!1sen!2sph" 
              width="100%" 
              height="300" 
              style="border:0;" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Farm Location"
              class="google-map"
            ></iframe>
          </div>
          <a href="https://goo.gl/maps/Mjj6mHgJUgTqEY4p7" class="directions-link" target="_blank">Get Directions →</a>
        </div>

        <div class="info-item">
          <h3>Contact Details</h3>
          <p><strong>Phone:</strong> <a href="tel:1234567890">(123) 456-7890</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@harahrubinafarm.com">info@harahrubinafarm.com</a></p>
          <p><strong>Hours:</strong> Mon-Sun, 9:00 AM - 6:00 PM</p>
          <p class="response-time">We typically respond within 24 hours</p>
        </div>

        <div class="info-item">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="https://www.facebook.com/profile.php?id=61555217610211" aria-label="Facebook" class="social-icon">
              <span class="icon">📘</span>
              <span class="social-name">Facebook</span>
            </a>
            <a href="https://www.instagram.com/harahrubinafarm" aria-label="Instagram" class="social-icon">
              <span class="icon">📸</span>
              <span class="social-name">Instagram</span>
            </a>
            <a href="https://twitter.com/harahrubinafarm" aria-label="Twitter" class="social-icon">
              <span class="icon">🐦</span>
              <span class="social-name">Twitter</span>
            </a>
          </div>
          <p class="social-cta">See our latest farm events and produce on social media!</p>
        </div>
      </div>

      <form class="contact-form" on:submit={handleSubmit}>
        <h3 class="form-title">Send Us a Message</h3>
        <p class="form-subtitle">Have questions about visiting the farm? Want to book a special event? We're here to help!</p>
        
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
            placeholder="Tell us what you'd like to know..."
            rows="5"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Send Message</button>
        <p class="form-disclaimer">We respect your privacy and will never share your information.</p>
      </form>
    </div>
    
    <div class="testimonial-section">
      <h3 class="testimonial-header">What Our Visitors Say</h3>
      <div class="testimonial-slider">
        <div class="testimonial-banner">
          <p class="testimonial-text">"We had an amazing time at Harah Rubina Farm! The staff was friendly and the experience was unforgettable." - Madaam Cit.</p>
        </div>
        <div class="testimonial-banner">
          <p class="testimonial-text">"The organic produce was fantastic and the kids loved the farm animals. We'll definitely be back!" - John D.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 5rem 2rem;
    background-color: #d5d4b656;
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

  .contact.dark .google-map {
    border: 2px solid var(--background-dark-secondary);
  }

  .contact.dark .testimonial-banner {
    background: rgba(40, 40, 40, 0.8);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 0 1rem;
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
    font-size: 1.2rem;
  }

  /* Benefits Bar */
  .benefits-bar {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 3rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .benefit-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0.5rem;
    flex: 1 1 auto;
    min-width: 120px;
  }

  .benefit-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .benefit-item p {
    margin: 0;
    font-weight: 500;
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

  .info-item a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .info-item a:hover {
    color: var(--primary-color);
    text-decoration: underline;
  }

  .response-time {
    margin-top: 1rem;
    font-style: italic;
    font-size: 0.9rem;
  }

  .map-container {
    margin: 1rem 0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .google-map {
    border: 2px solid #eee;
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
  }

  .directions-link {
    display: inline-block;
    margin-top: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
  }

  .directions-link:hover {
    text-decoration: underline;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .social-links a {
    display: flex;
    align-items: center;
    color: var(--text-color);
    text-decoration: none;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
  }

  .social-links a:hover {
    color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: rgba(255, 255, 255, 0.8);
  }

  .social-links .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .social-links .social-name {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .social-cta {
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  .contact-form {
    background: var(--background-light);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .form-title {
    margin-top: 0;
    color: var(--primary-color);
  }

  .form-subtitle {
    margin-bottom: 1.5rem;
    color: var(--text-light);
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
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
  }

  .submit-btn {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .submit-btn:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .form-disclaimer {
    font-size: 0.8rem;
    text-align: center;
    margin-top: 1rem;
    color: var(--text-light);
  }

  /* Testimonial Section */
  .testimonial-section {
    margin-top: 3rem;
  }

  .testimonial-header {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }

  .testimonial-slider {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .testimonial-banner {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    margin-bottom: 1rem;
    flex: 1 1 300px;
  }

  .testimonial-text {
    font-style: italic;
    font-size: 1.1rem;
    margin: 0;
    color: var(--text-color);
  }

  /* Medium devices (tablets) */
  @media (max-width: 992px) {
    .contact-grid {
      grid-template-columns: 1fr 1fr;
    }
    
    h2 {
      font-size: 2.2rem;
    }
  }

  /* Small devices (landscape phones) */
  @media (max-width: 768px) {
    .contact {
      padding: 3rem 1rem;
    }

    h2 {
      font-size: 2rem;
    }

    .benefits-bar {
      flex-wrap: wrap;
      gap: 1rem;
    }

    .benefit-item {
      width: 45%;
      margin-bottom: 1rem;
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

  /* Extra small devices (portrait phones) */
  @media (max-width: 576px) {
    .contact {
      padding: 2rem 0.5rem;
    }
    
    h2 {
      font-size: 1.8rem;
    }
    
    .subtitle {
      font-size: 1rem;
    }
    
    .benefit-item {
      width: 100%;
    }
    
    .contact-form {
      padding: 1.5rem;
    }
    
    .social-links a {
      width: 100%;
      justify-content: center;
      margin-bottom: 0.5rem;
    }
  }
</style>