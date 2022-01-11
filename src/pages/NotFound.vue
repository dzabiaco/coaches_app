<template>
  <section>
    <BaseCard>
      <h2>Page Not Found</h2>
      <p>This page could not be found - maybe check all our
      <router-link to="/coaches">coaches</router-link></p>
    </BaseCard>
  </section>
</template>

<script>

// ".read": "now < 1644184800000",  // 2022-2-7
// ".write": "now < 1644184800000",  // 2022-2-7
import BaseCard from "@/components/ui/BaseCard";
export default {
name: "NotFound",
  components: {BaseCard}
}
</script>

<style scoped>

</style>