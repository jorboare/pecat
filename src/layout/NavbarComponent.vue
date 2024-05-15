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
      <a href="#hero">
        <li>{{ t('navbar.home') }}</li>
      </a>
      <a href="#about">
        <li>{{ t('navbar.about') }}</li>
      </a>
      <a href="#where">
        <li>{{ t('navbar.where') }}</li>
      </a>
      <a href="#contact">
        <li>{{ t('navbar.contact') }}</li>
      </a>
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
  font-size: 70px;
  text-transform: uppercase;
  font-weight: 900;
}
ul {
  display: flex;
  gap: 20px;
  height: 40px;
  align-items: end;
}
a {
  text-decoration: none;
  color: var(--primary);
}

li {
  text-decoration: none;
  list-style-type: none;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 30px;
}
select {
  border: none;
  background-color: transparent;
  font-weight: bold;
}
</style>
