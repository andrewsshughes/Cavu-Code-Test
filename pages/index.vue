<template>
  <div id="nuxt-wrap">
    <PageHeader/>
    <div id="flight-table" v-if="error != undefined">
      <div class="error">
        {{error.message}}
        <p>{{error.value}}</p>
      </div>
    </div>
    <div id="flight-table" v-if="departures != undefined">
      <TableHeader/>
      <div v-for="(flight, i) in awaitingDeparture.slice(0,5)" :key="i">
        <TableRow :flight="flight"/>
      </div>
    </div>
    <FlightEditor v-if="departures != undefined" :flights="departures"/>
  </div>
</template>

<script>

export default {
    name: "IndexPage",
    async asyncData({ $axios }) {
      let data;
      try {
        data = await $axios.$get("https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata");
        return {
          departures: data.allDepartures,
          error: undefined
        }
      } catch (e){
        return {
          error: {message: "Unable to get flight data", value: e},
          departures: undefined
        }
      };
    },
    computed: {
        awaitingDeparture() {
            return this.departures === undefined ? false : this.departures.filter(f => !f.status.includes("Departed"));
        }
    },
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-family: 'Helvetica', 'sans-serif';
  font-weight: bold;
  * {
    box-sizing: border-box;
  }
}
#nuxt-wrap {
  padding: 92px 73px 92px;
  width: 100vw;
  #flight-table {
    background: linear-gradient(90deg, #464646 0%, #000000 100%);
    padding: 22px 40px 72px;
    overflow: hidden;
    margin-bottom: 92px;
  }
  .error {
    background: #c92c20;
    color: white;
    text-align: center;
    border-radius: 10px;
    font-size: 18px;
    padding: 25px;
    p {
      font-weight: normal;
    }
  }
}
@media screen and (max-width: 1024px){
  #nuxt-wrap {
    padding: 0px 0px 20px; 
  }
}
@media screen and (max-width: 767px){
  #nuxt-wrap #flight-table {
    padding: 22px 20px 72px;
  }
}
</style>
