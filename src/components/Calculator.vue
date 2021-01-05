<template>
  <b-container class="w-100">
    <b-form @change="onChange" v-if="show">
      <b-row class="w-100">
        <b-col class="w-25">
          <b-form-group id="number-1" label="First Number" label-for="input">
            <b-form-input id="input" v-model="number1" type="number"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="2">
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
        <b-col class="w-25">
          <b-form-group id="number-2" label="Second Number" label-for="input">
            <b-form-input id="input" v-model="number2" type="number"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>
    <b-card title="Result:" class="w-25 m-auto mt-4">
      <h3 class="my-4" v-if="isNaN(result)">Not A Number</h3>
      <h3 class="my-4" v-else>{{ result }}</h3>
    </b-card>
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