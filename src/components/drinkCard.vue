<template>
    <div>
    <v-card >
        <v-img
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