<template>
  <div>
    <h1>My Blog</h1>
    <div v-for="article in articles" :key="article.slug">
      <ArticleCard :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleCard from '@/components/ArticleCard.vue';

export default {
  components: { ArticleCard },
  data() {
    return {
      articles: [
        { title: 'First Post', slug: 'first-post' },
        { title: 'Second Post', slug: 'second-post' }
      ]
    };
  }
}
</script>
