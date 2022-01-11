<template>
  <div>
  <BaseDialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{error}}</p>
  </BaseDialog>
  <section>
    <BaseCard>
      <header>
        <h2>Requests Received</h2>
      </header>
      <BaseSpinner v-if="isLoading"/>
      <ul v-else-if="hasRequests && !isLoading">
        <RequestItem v-for="request in receivedRequests"
                     :id="request.id"
                     :key="request.id"
                     :message="request.message"
                     :email="request.userEmail"
        ></RequestItem>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </BaseCard>
  </section>
  </div>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard";
import RequestItem from "@/components/requests/RequestItem";
import BaseDialog from "@/components/ui/BaseDialog";
import BaseSpinner from "@/components/ui/BaseSpinner";
export default {
name: "RequestsReceived",
  components: {BaseSpinner, BaseDialog, RequestItem, BaseCard},
  created() {
    this.loadRequests();
  },
  data(){
  return {
    error: null,
    isLoading: false
  }
  },
  computed: {
    receivedRequests(){
      return this.$store.getters["requests/requests"];
    },
    hasRequests(){
      return this.$store.getters["requests/hasRequests"];
    }
  },
  methods: {
    async loadRequests(){
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      }
      catch (error){
        this.error = error.message || 'Something failed';
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>