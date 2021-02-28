<template>
  <div>
    <v-dialog max-width="500px">
      <template v-slot:activator="{ on, attrs }">
          <v-card v-bind="attrs" v-on="on">
            <v-img :src="item.strDrinkThumb"/>
            
                <v-card-title>{{item.strDrink}}</v-card-title>
            </v-card>
      </template>

      <v-card >
        <v-img
      :src="item.strDrinkThumb"
    ></v-img>
    <v-card-title>{{item.strDrink}}</v-card-title>
    </v-card>
    </v-dialog>
  </div>
</template>
    <!-- <div>
    <v-card >
        <v-img
      :src="item.strDrinkThumb"
    ></v-img>
    <v-card-title>{{item.strDrink}}</v-card-title>
    </v-card>
    </div> -->

<script>
    export default {
    props: ['item']
    }
</script>