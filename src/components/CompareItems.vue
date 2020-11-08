<template>
  <v-container>
    <v-alert
        border="left"
        colored-border
        type="info"
        elevation="2"
    >
      Type weights for criterias (1-100). Reflects how much each one is important to you.
    </v-alert>
    <v-row>
      <v-text-field
          placeholder="100"
          :rules="weightRules"
          v-for="(criteria, i) in criterias" :key="i"
          v-bind:label="criteria"
          class="flex-wrap, mx-2"
          v-model="criteriaWeightMap[criteria]"
      >
      </v-text-field>
    </v-row>
    <v-divider></v-divider>
    <v-alert
        border="left"
        colored-border
        type="info"
        elevation="2"
    >
      Fill the further comparable data for every criteria. Lets use 1-9 grade with next meaning:
      1 - equal advantage.
      3 - moderate advantage.
      5 - significant advantage.
      7 - primary advantage.
      9 - superior advantage.
      2, 4, 6, 8 - intermediate advantage degree.
    </v-alert>
    <v-row v-for="(criteria, i) in criterias" :key="i">
      <v-chip
          color="blue"
          filter
          outlined
          class="ml-n6"
      >{{ criteria }}
      </v-chip>
      <v-text-field
          v-for="(pair, i) in itemCombinations" :key="i"
          :rules="compareRules"
          v-bind:label="pair.first +'/'+pair.second"
          class="mx-2"
          style="min-width:50px"
          @input="setCriteriaMatrixMap($event, criteria, pair)"
      >
      </v-text-field>
    </v-row>
    <v-row v-for="val in res" :key="val.name">
      <p>{{val.item}}={{val.percent.toFixed(3)}}</p>
    </v-row>
  </v-container>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  name: "CompareItems",
  created() {
    eventBus.$on('compute', () => {
      this.compute()
    })
  },
  data() {
    return {
      res: [],
      criteriaWeightMap: {},
      criteriaMatrixMap: {},
      weightRules: [
        value => {
          if (typeof value == "undefined") {
            return ""
          }
          if (value.match(/[a-z]/i) != null) {
            return "Found letter"
          }
          if (value > 100 || value < 1) {
            return "Out of range [1,100]"
          }
          return true
        }
      ],
      compareRules: [
        value => {
          if (typeof value == "undefined") {
            return ""
          }
          if (value.match(/[0-9]+\/[0-9]+/) == null) {
            return "pattern number/number"
          }
          return true
        }
      ]
    }
  },
  computed: {
    criterias() {
      return this.$store.state.criterias
    },
    items() {
      return this.$store.state.items
    },
    itemCombinations() {
      let res = []
      for (let i = 0; i < this.$store.state.items.length; i++) {
        for (let j = i + 1; j < this.$store.state.items.length; j++) {
          res.push({first: this.$store.state.items[i], second: this.$store.state.items[j]})
        }
      }
      return res
    }
  },
  methods: {
    setCriteriaMatrixMap(value, criteria, pair) {
      if (value.match(/[0-9]+\/[0-9]+/) == null) {
        return;
      }
      const vars = value.split('/', 2);
      if (!(criteria in this.criteriaMatrixMap)) {
        this.criteriaMatrixMap[criteria] = [];
      }
      for (let i = 0; i < this.items.length; i++) {
        for (let j = 0; j < this.items.length; j++) {
          if (typeof this.criteriaMatrixMap[criteria][i] === 'undefined') {
            this.criteriaMatrixMap[criteria][i] = [];
          }
          if (typeof this.criteriaMatrixMap[criteria][j] === 'undefined') {
            this.criteriaMatrixMap[criteria][j] = [];
          }
          if (i === j) {
            this.criteriaMatrixMap[criteria][i][j] = 1;
          } else if (this.items[i] === pair.first && this.items[j] === pair.second) {
            const a = parseFloat(vars[0]);
            const b = parseFloat(vars[1]);
            this.criteriaMatrixMap[criteria][i][j] = a / b;
            this.criteriaMatrixMap[criteria][j][i] = b / a;
          }
        }
      }
    },
    compute() {
      this.res = []
      let resMatrix = []
      for (const [criteria, matrix] of Object.entries(this.criteriaMatrixMap)) {
        let weight = 1
        if (typeof this.criteriaWeightMap[criteria] !== 'undefined') {
          weight = parseFloat(this.criteriaWeightMap[criteria]) / 100
        }
        resMatrix = this._sumMatrix(resMatrix, this._multScalarToMatrix(weight, this._getMagicMatrix(this._getWeightVector(matrix))))
      }
      const ans = this._getWeightVector(resMatrix)
      for (let i = 0; i < this.items.length; i++) {
        this.res.push({item: this.items[i], percent: ans[i]})
      }
      console.log(ans)
    },
    _getWeightVector(matrix) {
      const ans = []
      let sum = 0
      for (let i = 0; i < matrix.length; i++) {
        let temp = 1
        for (let j = 0; j < matrix[i].length; j++) {
          temp = temp * matrix[i][j]
        }
        temp = Math.pow(temp, 1 / matrix[i].length)
        ans.push(temp)
        sum = sum + temp
      }
      for (let i = 0; i < ans.length; i++) {
        ans[i] = ans[i] / sum
      }
      return ans;
    },
    _getMagicMatrix(vector) {
      const ans = []
      for (let i = 0; i < vector.length; i++) {
        for (let j = 0; j < vector.length; j++) {
          if (typeof ans[i] === 'undefined') {
            ans[i] = []
          }
          ans[i][j] = vector[i] / (vector[i] + vector[j])
        }
      }
      return ans;
    },
    _multScalarToMatrix(scalar, matrix) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          matrix[i][j] = scalar * matrix[i][j]
        }
      }
      return matrix
    },
    _sumMatrix(m1, m2) {
      if (m1.length === 0) {
        return m2
      }
      for (let i = 0; i < m1.length; i++) {
        for (let j = 0; j < m1[i].length; j++) {
          m1[i][j] = m1[i][j] + m2[i][j]
        }
      }
      return m1
    }
  },
}
</script>