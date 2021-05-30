<template>
  <div>
    <div class="title text-center my-10">Apply Here</div>
    <v-row>
      <v-col cols="12" md="4">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
          nesciunt.
        </p>
      </v-col>
      <v-col cols="12" md="8">
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="fullName"
                label="Full Name*"
                :rules="requiredField"
                outlined
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="email"
                label="Email*"
                :rules="validateEmail"
                outlined
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="title"
                label="Applied Title*"
                :rules="requiredField"
                outlined
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-file-input
                v-model="cvFile"
                label="Attach CV*"
                :rules="requiredField"
                outlined
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="coverLetter"
                label="Write Cover Letter*"
                :rules="requiredField"
                outlined
                auto-grow
              />
            </v-col>
          </v-row>

          <div class="d-flex justify-end">
            <v-btn :disabled="!valid" color="primary" class="mr-4">
              Apply now
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    fullName: "",
    email: "",
    title: "",
    cvFile: "",
    coverLetter: "",
    requiredField: [(v) => !!v || 'Field is required'],
    validateEmail: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>

<style lang="scss" scoped>
.title {
  font-family: 'Poppins', sans-serif !important;
}
</style>
