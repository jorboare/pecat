<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div id="about" class="about">
    <div class="slogans">
      <p>{{ t('about.slogan1') }}</p>
      <p>{{ t('about.slogan2') }}</p>
      <p>{{ t('about.slogan3') }}</p>
    </div>
    <div class="infoCont">
      <div class="imgDiv"></div>
      <p>{{ t('about.info') }}</p>
    </div>
  </div>
</template>
<style scoped>
.about {
  max-width: 1000px;
  margin-top: 60px;
  margin-bottom: 60px;
}
.slogans {
  display: flex;
  gap: 50px;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  flex-wrap: wrap;
}

.infoCont {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.infoCont p {
  font-size: 1.5rem;
  font-weight: bold;
}

.imgDiv {
  width: 500px;
  height: 450px;
  background-color: black;
}

@media (max-width: 600px) {
  .slogans {
    flex-direction: column;
    gap: 0;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }
  .slogans p {
    line-height: 0rem;
  }

  .imgDiv {
    width: 350px;
    height: 250px;
    object-fit: cover;
    background-color: black;
    margin: 0 10px;
  }
}

@media (max-width: 1030px) {
  .slogans {
    justify-content: center;
    align-items: center;
  }
  .infoCont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .infoCont p {
    margin: 0 10px;
  }
}
</style>
