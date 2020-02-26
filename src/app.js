import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencyRates: [],
      selectedCurrency: null,
      amountToConvert: null
      // exchanged: null

    },
    mounted(){
      this.getCurrencies()
    },
    computed: {
      exchanged: function(){
        return this.amountToConvert * this.selectedCurrency;
      }
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(currencies => this.currencyRates = currencies.rates)
      }
    }
  })
})
