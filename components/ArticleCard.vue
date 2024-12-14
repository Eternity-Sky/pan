<template>
  <div class="article-card">
    <h2>{{ article.title }}</h2>
    <nuxt-link :to="`/articles/${article.slug}`">Read more</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>

<style scoped>
.article-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
