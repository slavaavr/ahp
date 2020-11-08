<template>
  <v-container>
    <v-row>
      <v-text-field
          label="Type item title here"
          v-model="inputData"
          :rules="rules"
          v-on:keyup.enter="addItem"
      >
      </v-text-field>
      <v-btn fab v-on:click="addItem" class="ml-4" color="success">
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-list v-if="items.length">
        <v-subheader>Items</v-subheader>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-content>{{ item }}</v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="deleteItem(i)" color="pink">
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
  name: "Menu",
  data() {
    return {
      inputData: "",
      rules: [
        value => !this.items.includes(value) || "Duplicate item title found"
      ],
      items: []
    }
  },
  created() {
    this.items = this.$store.state.items;
  },
  methods: {
    addItem() {
      if (this.inputData === "") {
        return
      }
      this.items.push(this.inputData);
      this.$store.commit('setItems', this.items)
      this.inputData = "";
    },
    deleteItem(i) {
      this.items.splice(i, 1)
      this.$store.commit('setItems', this.items)
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>