<template>
  <div class="info">
    <WorkersForm :allWorkers="allWorkers" />
    <WorkersTable :allWorkers="allWorkers" />
  </div>
</template>

<script>
import WorkersTable from "../components/Workers/WorkersTable";
import WorkersForm from "../components/Workers/WorkersForm";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    WorkersTable,
    WorkersForm,
  },
  async mounted() {
    this.fetchWorkers();
  },
  computed: {
    ...mapGetters(["allWorkers"]),
  },
  methods: {
    ...mapActions(["fetchWorkers"]),
  },
};
</script>

<style lang="scss" scoped>
.info {
  width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  background-size: cover;
}
</style>
