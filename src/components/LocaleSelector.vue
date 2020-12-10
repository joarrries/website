<template>
  <div class="select">
    <select v-model="locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>


<script>
export default {
  data() {
    return {
      locale: this.$i18n.locale,
      langs: ["EN", "ZH"],
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
      localStorage.setItem("lang", val);
    },
  },
  methods: {
    nav_active: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>