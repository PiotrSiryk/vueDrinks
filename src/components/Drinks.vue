<template>
  <div>
    <v-container>
      <v-row v-for="(el, index) in getNumberOfRows" :key="index">
        <v-col v-for="(item, ind) in el" :key="ind" xs="12" sm="6" md='4' lg='3' xl='2'>
          <DrinkCard :item="item"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import DrinkCard from './drinkCard'
export default {
  data() {
    return {
      drinksArr: [],
    };
  },
  components: {
    DrinkCard
  },
  async created() {
    const baseUrl =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
    const req = await axios(baseUrl);
    this.drinksArr = req.data.drinks;
  },
  computed: {
    itemsPerRow() {
      let rows = 0;
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (rows = 1);
        case "sm":
          return (rows = 2);
        case "md":
          return (rows = 3);
        case "lg":
          return (rows = 4);
        case "xl":
          return (rows = 6);
      }
      return rows;
    },
    getNumberOfRows() {
      let sliced = [];
      for (
        let i = 0;
        i < Math.ceil(this.drinksArr.length / this.itemsPerRow);
        i++
      ) {
        sliced.push(
          this.drinksArr.slice(
            i * this.itemsPerRow,
            i * this.itemsPerRow + this.itemsPerRow
          )
        );
      }
      return sliced;
    },
  },
};
</script>
