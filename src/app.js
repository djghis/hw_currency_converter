import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencyRates: [],
      selectedCurrency: null

    },
    mounted(){
      this.getCurrencies()
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
