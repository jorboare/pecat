<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <div id="hero" class="homeCont">
    <div>
      <h2>{{ t('home.title') }}</h2>
      <button>{{ t('home.info') }}</button>
    </div>
    <div class="imageCont">
      <div class="imageDiv"></div>
    </div>
  </div>
</template>
<style scoped>
.homeCont {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 50px;
}

h2 {
  width: 500px;
  font-size: 4rem;
  line-height: 4rem;
}

.imageCont {
  display: flex;
  align-items: end;
  height: 500px;
}

.imageDiv {
  width: 200px;
  height: 400px;
  background-color: var(--primary);
}

button {
  background-color: transparent;
  border: 2px solid var(--primary);
  padding: 10px 40px;
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 985px) {
  .homeCont {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 545px) {
  h2 {
    width: 100%;
    font-size: 2rem;
    line-height: 4rem;
  }
}
</style>
