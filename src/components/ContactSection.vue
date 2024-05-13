<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <div class="contact">
    <div class="titleCont">
      <h2>{{ t('contact.title') }}</h2>
      <div class="titleTexts">
        <p>{{ t('contact.slogan1') }}</p>
        <p>{{ t('contact.slogan2') }}</p>
        <p>{{ t('contact.slogan3') }}</p>
      </div>
    </div>
    <div class="boxesCont">
      <div class="infoBoxes">
        <h3>{{ t('contact.location.title') }}</h3>
        <div class="locationTexts">
          <p>{{ t('contact.location.street') }}</p>
          <p>{{ t('contact.location.city') }}</p>
          <p>{{ t('contact.location.email') }}</p>
        </div>
      </div>
      <div class="infoBoxes">
        <h3>{{ t('contact.schedule.title') }}</h3>
        <div class="locationTexts">
          <p>{{ t('contact.schedule.week') }}</p>
          <p>{{ t('contact.schedule.weekend') }}</p>
        </div>
      </div>
      <div class="infoBoxes">
        <h3>{{ t('contact.socialMedia.title') }}</h3>
        <div class="locationTexts">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact {
  max-width: 1000px;
  padding: 0 30px;
  margin: 100px auto;
}

.titleCont {
  display: inline-block;
}

h2 {
  font-weight: 900;
  font-size: 5rem;
  text-transform: uppercase;
  margin: 0;
}

.titleTexts {
  display: flex;
  justify-content: space-between;
}

.titleTexts p {
  margin: 0;
}

.boxesCont {
  display: flex;
  gap: 10px;
  justify-content: center;
  height: 500px;
  align-items: center;
}

.infoBoxes {
  width: 100%;
  display: inline-block;
  border: 2px solid var(--primary);
  padding: 20px 50px 20px 20px;
  height: 180px;
}

.infoBoxes h3 {
  font-size: 2rem;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
}

.locationTexts p {
  margin: 0;
  padding: 5px 0;
}
</style>
