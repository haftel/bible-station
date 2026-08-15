<template>
  <div class="devotionals-view">
    <header class="page-header">
      <h1 class="page-title">Devotionals</h1>
      <div class="disclaimer">
        <strong>Welcome!</strong> This page hosts some of the devotionals I have prepared. This page is sparse now, but I plan to continue adding to it over the coming years. Please note that all of the devotionals on this page are meant only as a source of encouragement. I am not a theologian or a scholar, nor are these posts officially reviewed a pastor or seminary professor. I am just a guy who is passionate about the Lord and his word and loves studying what he has to say. I hope these devotionals can help encourage you!
      </div>
    </header>

    <main class="container">
      <article v-for="post in devotionals" :key="post.id" class="post">
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="post-meta">By {{ post.author }} &bull; {{ post.date }}</div>

        <blockquote class="bible-verse">
          "{{ post.verseQuote }}"
          <cite>- {{ post.verseCite }}</cite>
        </blockquote>

        <div class="post-content">
          <p v-for="(paragraph, idx) in post.paragraphs" :key="idx">
            {{ paragraph }}
          </p>
        </div>
      </article>
    </main>
  </div>
</template>

<script setup>
import { devotionals } from '@/data/devotionalsData.js'
</script>

<style scoped>
.page-header {
  text-align: center;
  padding: 3rem 1rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
}

.post-title {
  margin-top: 0;
  margin-bottom: 0.2rem;
  color: var(--text-main);
  font-size: 1.75rem;
}

.post-meta {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.post-content p {
  margin-bottom: 1rem;
  color: var(--text-main);
  line-height: 1.7;
}

.post-content p:last-child {
  margin-bottom: 0;
}
</style>
