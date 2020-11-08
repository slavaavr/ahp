<template>
  <v-container>
    <v-row>
      <v-text-field
          label="Type criteria title here"
          v-model="inputData"
          :rules="rules"
          v-on:keyup.enter="addCriteria"
      >
      </v-text-field>
      <v-btn fab v-on:click="addCriteria" class="ml-4" color="success">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-list v-if="criterias.length">
        <v-subheader>Criterias</v-subheader>
        <v-list-item v-for="(criteria, i) in criterias" :key="i">
          <v-list-item-content>{{ criteria }}</v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="deleteCriteria(i)" color="pink">
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Criteria",
  data() {
    return {
      inputData: "",
      criterias: [],
      rules: [
        value => !this.criterias.includes(value) || "Duplicate criteria title found"
      ]
    }
  },
  created() {
    this.criterias = this.$store.state.criterias;
  },
  methods: {
    addCriteria() {
      if (this.inputData === "") {
        return
      }
      this.criterias.push(this.inputData);
      this.$store.commit('setCriterias', this.criterias)
      this.inputData = "";
    },
    deleteCriteria(i) {
      this.criterias.splice(i, 1)
      this.$store.commit('setCriterias', this.criterias)
    },
  }
}
</script>