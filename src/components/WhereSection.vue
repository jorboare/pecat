<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div id="where">
    <h2>{{ t('where.title') }}</h2>
    <div class="container">
      <div class="locations">
        <p>{{ t('where.text') }}</p>
        <p>{{ t('where.text') }}</p>
        <p>{{ t('where.text') }}</p>
        <p>{{ t('where.text') }}</p>
        <p>{{ t('where.text') }}</p>
      </div>
      <p class="tour">{{ t('where.tour') }}</p>
    </div>
  </div>
  <div><div></div></div>
</template>
<style scoped>
h2 {
  font-weight: 900;
  font-size: 5rem;
  text-transform: uppercase;
  margin: 0;
}
.container {
  display: flex;
  gap: 20px;
}
.locations {
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 400px;
}
.locations p {
  width: 45%;
}
.tour {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 25px;
}

@media (max-width: 1020px) {
  #where {
    margin: 0 20px;
  }
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
  .container {
    flex-direction: column;
    align-items: center;
  }
  .locations {
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: nowrap;
    margin-bottom: 30px;
  }
  .locations p {
    width: auto;
  }
  .tour {
    margin: 0 10px;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
