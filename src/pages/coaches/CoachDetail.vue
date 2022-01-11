<template>
  <div>
  <section>
    <BaseCard>
      <h2>{{fullName}}</h2>
      <h3>${{rate}}/hour</h3>
    </BaseCard>
  </section>

  <section>
    <BaseCard>
      <header>
        <h2>Interested? Reach out now!</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <router-view></router-view>
    </BaseCard>
  </section>

  <section>
    <BaseCard>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
      <p>{{description}}</p>
    </BaseCard>>
  </section>
  </div>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
import BaseButton from "@/components/ui/BaseButton";
import BaseBadge from "@/components/ui/BaseBadge";
export default {
name: "CoachDetail",
  components: {BaseButton, BaseCard, BaseBadge},
  props:['id'],
  computed: {
    fullName(){
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName
    },
    areas(){
      return this.selectedCoach.areas
    },
    rate(){
      return this.selectedCoach.hourlyRate;
    },
    description(){
      return this.selectedCoach.description;
    },
    contactLink(){
      return this.$route.path +  '/contact';
    }
  },
  data(){
    return {
      selectedCoach: null
    }
  },
    created() {
      this.selectedCoach = this.$store.getters["coaches/coaches"].find((coach) => coach.id === this.id);
    }
}
</script>

<style scoped>

</style>