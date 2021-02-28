<template>
  <div>
    <v-dialog max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on">
          {{ isLogged ? "Logout" : "Login" }}
        </v-btn>
      </template>

      <v-card>
        <v-form class="px-10 py-10">
          <v-text-field
            v-model="current.name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field type="password" label="Password"></v-text-field>
          <v-btn color="primary">
            Login
          </v-btn>
          <p class="font-weight-regular mt-10">
            don't have account? click <span><a href="">Here</a></span> to
            register
          </p>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
