<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div>
    <h2>{{ t('where.title') }}</h2>
    <div>
      <p>{{ t('about.slogan1') }}</p>
      <p>{{ t('about.slogan2') }}</p>
      <p>{{ t('about.slogan3') }}</p>
    </div>
  </div>
  <div><div></div></div>
</template>
<style scoped></style>
