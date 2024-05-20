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
// Using scrollIntoView() function to achieve the scrolling
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
<template>
  <nav>
    <h1>Pecat</h1>
    <ul>
      <li @click="scrollTo('hero')">{{ t('navbar.home') }}</li>
      <li @click="scrollTo('about')">{{ t('navbar.about') }}</li>
      <li @click="scrollTo('where')">{{ t('navbar.where') }}</li>
      <li @click="scrollTo('contact')">{{ t('navbar.contact') }}</li>
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
  border-bottom: 2px solid var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--accent);
}

h1 {
  color: var(--primary);
  font-size: 70px;
  text-transform: uppercase;
  font-weight: 900;
  margin-left: 40px;
}

ul {
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  align-items: end;
  margin-right: 40px;
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
  padding: 0;
  margin: 0;
}
select {
  border: none;
  background-color: transparent;
  font-weight: bold;
}

@media (max-width: 1149px) {
  li {
    font-size: 20px;
  }
}
@media (max-width: 904px) {
  ul {
    display: none;
  }
}
</style>
