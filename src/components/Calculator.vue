<template>
  <b-container>
    <b-form @change="onChange" v-if="show">
      <b-row>
        <b-col col="12" md="4">
          <b-form-group id="number-1" label="First Number" label-for="input">
            <b-form-input id="input" v-model="number1" type="number"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group id="operation" label="Operation" v-slot="{ ariaDescribedBy }" buttons>
            <b-form-radio-group
                v-model="operation"
                :options="options"
                :aria-describedby="ariaDescribedBy"
                name="operation"
                buttons
                size="lg"
                stacked
            >
            </b-form-radio-group>
          </b-form-group>
        </b-col>
        <b-col cols="12" md="4">
          <b-form-group id="number-2" label="Second Number" label-for="input">
            <b-form-input id="input" v-model="number2" type="number"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <b-row>
      <b-col cols="10" lg="6" md="8" class="mx-auto">
        <b-card title="Result:">
          <h3 class="my-4" v-if="isNaN(result)">Not A Number</h3>
          <h3 class="my-4" v-else>{{ result }}</h3>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      number1: 0,
      number2: 0,
      operation: '+',
      result: 0,
      show: true,
      options: [
        {text: '+', value: '+'},
        {text: '-', value: '-'},
        {text: '*', value: '*'},
        {text: '/', value: '/'}
      ]
    }
  },
  methods: {
    onChange(event) {
      event.preventDefault()
      const num1 = Number(this.number1)
      const num2 = Number(this.number2)
      const opp = this.operation

      if (opp === '+') {
        this.result = num1 + num2
      } else if (opp === '-') {
        this.result = num1 - num2
      } else if (opp === '*') {
        this.result = num1 * num2
      } else if (opp === '/') {
        this.result = num1 / num2
      }
    }
  }
}
</script>

<style scoped>

</style>