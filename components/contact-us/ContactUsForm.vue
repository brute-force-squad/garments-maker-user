<template>
  <v-form ref="form" v-model="valid" @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="fullName"
          label="Full Name*"
          outlined
          :rules="requiredField"
        />
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="email"
          label="Email*"
          outlined
          :rules="validateEmail"
        />
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="message"
          label="Your Message*"
          outlined
          :rules="requiredField"
        />
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        type="submit"
        :loading="isLoading"
      >
        Send Message
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    valid: true,
    fullName: '',
    email: '',
    message: '',
    requiredField: [(v) => !!v || 'Field is required'],
    validateEmail: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    ...mapState(['isLoading']),
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('createNewContact', {
        fullName: this.fullName,
        email: this.email,
        message: this.message,
      })
      this.$refs.form.reset()
    },
  },
}
</script>

<style lang="scss" scoped></style>
