<template>
    <component :is="layoult">
      <router-view />
    </component>
</template>

<script>
import LDefault from '../src/layouts/LDefault.vue';
import LEmpty from '../src/layouts/LEmty.vue';
import L404 from '../src/layouts/L404.vue';
export default {
  components: { LDefault, LEmpty, L404 },

  computed: {
    layoult() {
      return this.$route.meta.layout || "empty-layout";
    },
  },
}
</script>