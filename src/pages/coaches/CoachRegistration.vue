<template>
  <div>
  <BaseCard>
    <h1>Register as Coach now!</h1>
    <CoachForm @save-data="saveData"/>
  </BaseCard>
  </div>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm";
import BaseCard from "@/components/ui/BaseCard";
export default {
name: "CoachRegistration",
  components: {BaseCard, CoachForm},
  methods: {
    saveData(data){
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/');
    }
  }
}
</script>

<style scoped>

</style>