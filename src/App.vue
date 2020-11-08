<template>
  <v-app>
    <v-card
        class="mx-auto my-8 pa-8"
        width="600"
        min-height="600"
    >
      <Menu v-if="displayView === 0"></Menu>
      <Criteria v-if="displayView === 1"></Criteria>
      <CompareItems v-if="displayView === 2"></CompareItems>
      <v-row class="justify-center">
        <v-btn fab class="mx-3" v-if="displayView !== 0" color="primary" @click="prev">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab color="primary" v-if="displayView === 2" @click="compute">
          <v-icon>mdi-rocket-launch</v-icon>
        </v-btn>
        <v-btn fab color="primary" v-else @click="next">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu";
import Criteria from "@/components/Criteria";
import CompareItems from "@/components/CompareItems";
import eventBus from "@/eventBus";

export default {
  name: 'App',

  components: {
    CompareItems,
    Criteria,
    Menu,
  },
  computed: {
    displayView() {
      return this.$store.state.displayView
    }
  },
  methods: {
    next() {
      const dv = this.$store.state.displayView
      if (dv === 2) {
        return
      }
      this.$store.commit('setDisplayView', dv + 1)
    },
    prev() {
      const dv = this.$store.state.displayView
      this.$store.commit('setDisplayView', dv - 1)
    },
    compute() {
      eventBus.$emit('compute');
    }
  },
  data: () => ({}),
  created() {
    this.$store.dispatch('init');
  },
};
</script>
