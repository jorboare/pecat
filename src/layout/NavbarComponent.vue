<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const selectedLanguage = ref('CAT')

const languageOptions = ref(['CAT', 'ES', 'EN'])

const changeLanguage = () => {
  locale.value = selectedLanguage.value
  window.localStorage.setItem('language', selectedLanguage.value)
}

onMounted(() => {
  const storedLanguage = window.localStorage.getItem('language')
  if (storedLanguage) {
    locale.value = storedLanguage
    selectedLanguage.value = storedLanguage
  } else {
    locale.value = 'CAT'
    selectedLanguage.value = 'CAT'
  }
})
</script>
<template>
  <nav>
    <h1>Pecat</h1>
    <ul>
      <li>{{ t('navbar.home') }}</li>
      <li>{{ t('navbar.about') }}</li>
      <li>{{ t('navbar.where') }}</li>
      <li>{{ t('navbar.contact') }}</li>
      <li>
        <select v-model="selectedLanguage" @change="changeLanguage">
          <option v-for="language in languageOptions" :key="language">{{ language }}</option>
        </select>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  height: 100px;
  padding: 0 40px;
  border-bottom: 3px solid var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  color: var(--primary);
  font-size: 50px;
  text-transform: uppercase;
}
ul {
  display: flex;
  gap: 10px;
  height: 40px;
  align-items: end;
}
li {
  text-decoration: none;
  list-style-type: none;
  font-weight: bold;
  cursor: pointer;
}
select {
  border: none;
  background-color: transparent;
  font-weight: bold;
}
</style>
