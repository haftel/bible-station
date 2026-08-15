<template>
  <div class="home-view">
    <header class="hero-header">
      <h1 class="hero-title">Bible Station</h1>
      <p class="hero-subtitle">Your daily stop for scripture, strength, and spiritual growth.</p>
    </header>

    <main class="home-container">
      <section class="welcome-section">
        <strong>Welcome!</strong>
        If you want to hide God's word in your heart or find encouragement from scripture, you have come to the right place. My goal with this site is to help you connect with scripture more deeply in your everyday life.
      </section>

      <div class="mission-grid">
        <article class="feature-card">
          <h2 class="feature-title">Memorize the Word</h2>
          <div class="feature-content">
            <p>Throughout scripture, we are told of the joy and wisdom that is found in hiding the word of God in our hearts. Our scripture memory tool uses tried and true methods to help you keep the words of scripture on your heart and mind.</p>
            <router-link to="/memory" class="feature-btn">Start Memorizing &rarr;</router-link>
          </div>
        </article>

        <article class="feature-card">
          <h2 class="feature-title">Find Encouragement</h2>
          <div class="feature-content">
            <p>No matter what you are going through, there is something the Lord wants to tell you to encourage you. With our "Verses for Feelings" tool, find the exact verse to speak to you. Also feel free to browse through devotionals for encouragement!</p>
            <div class="feature-links">
              <router-link to="/verses-for-feelings" class="feature-btn">Verses for Feelings &rarr;</router-link>
              <router-link to="/devotionals" class="feature-link-sub">Read Devotionals</router-link>
            </div>
          </div>
        </article>
      </div>

      <section class="hero-verse-banner">
        <blockquote class="hero-bible-verse">
          "Your word is a lamp for my feet, a light on my path."
          <cite>- Psalm 119:105 NIV</cite>
        </blockquote>
      </section>
    </main>
  </div>
</template>

<style scoped>
.hero-header {
  background-color: var(--accent-color);
  color: #ffffff;
  text-align: center;
  padding: 5rem 1rem;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3.5rem;
  color: #ffffff;
  margin: 0 0 1rem 0;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
}

.home-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
}

.welcome-section {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem auto;
  font-size: 1.15rem;
  color: var(--text-light);
  line-height: 1.8;
}

.welcome-section strong {
  display: block;
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.mission-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 600px) {
  .mission-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.feature-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  border-top: 4px solid var(--accent-color);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
}

.feature-title {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--accent-color);
  font-size: 1.5rem;
}

.feature-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.feature-content p {
  margin: 0 0 1.5rem 0;
  color: var(--text-light);
  font-size: 1rem;
}

.feature-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.feature-btn {
  display: inline-block;
  background-color: var(--accent-color);
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.65rem 1.25rem;
  border-radius: 6px;
  transition: opacity 0.2s ease;
}

.feature-btn:hover {
  opacity: 0.9;
}

.feature-link-sub {
  font-size: 0.9rem;
  color: var(--accent-color);
  text-decoration: underline;
}

.hero-verse-banner {
  background-color: var(--disclaimer-bg);
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.hero-bible-verse {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.4rem;
  font-style: italic;
  color: var(--accent-color);
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border-left: none;
}

.hero-bible-verse cite {
  display: block;
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
  margin-top: 1.5rem;
  color: var(--text-main);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
</style>
