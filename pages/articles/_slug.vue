<template>
  <div>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
import { getContent } from '@nuxt/content';

export default {
  async asyncData({ params }) {
    const article = await getContent(`articles/${params.slug}`);
    return { article };
  }
}
</script>
