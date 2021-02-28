<template>
    <div>
    <v-card max-width="350">
        <v-img
      height="250"
      max-width="350"
      :src="item.strDrinkThumb"
    ></v-img>
    <v-card-title>{{item.strDrink}}</v-card-title>
    </v-card>
    </div>
</template>

<script>
    export default {
    props: ['item']
    }
</script>