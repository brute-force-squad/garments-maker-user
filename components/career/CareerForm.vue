<template>
  <div>
    <div class="title text-center my-10">Apply Here</div>
    <v-row>
      <v-col cols="12" md="4">
        <div class="subtitle-1">CORPORATE OFFICE</div>
        <div class="body-2">
          HOUSE # 17, ROAD # 03, SECTOR # 11 UTTARA MODEL TOWN, DHAKA-1230
        </div>
        <br />
        <div class="subtitle-1">CHINA OFFICE</div>
        <div class="body-2">
          NO. 21018-2, 21 F, BUILDING B, WONDER PLAZA, KEQIAO, SHAOXING CITY,
          ZHERJIANG PROV CHINA.
        </div>
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
                label="Post Applied For*"
                :rules="requiredField"
                outlined
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-file-input
                v-model="cvFile"
                outlined
                label="Attach Your Resume*"
                accept="image/* , application/msword , application/vnd.openxmlformats-officedocument.wordprocessingml.document , application/pdf"
                :rules="requiredFile"
                prepend-icon=""
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
    fullName: '',
    email: '',
    title: '',
    cvFile: null,
    coverLetter: '',
    requiredField: [(v) => !!v || 'Field is required'],
    validateEmail: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
}
</script>

<style lang="scss" scoped>
.title,
.subtitle-1,
.body-2 {
  font-family: 'Poppins', sans-serif !important;
}
</style>
