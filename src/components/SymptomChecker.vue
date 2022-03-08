<template>
  <div v-if="showSymptomModal">
    <SymptomModal
      :symptoms="symptoms"
      @close="openSymptomModal"
      @getDiagnosis="getDiagnosis"
    />
  </div>
  <div>
    <h1>SymptomU or uHealth or iHealthy</h1>
    <h3>{{ symptoms }}</h3>
  </div>
  <button @click="openSymptomModal">Get A Diagnosis</button>
</template>

<script>
import SymptomModal from "./SymptomModal.vue";

export default {
  data() {
    return {
      showSymptomModal: false,
      symptoms: [],
      symptomsID: [],
    };
  },
  components: {
    SymptomModal,
  },
  methods: {
    openSymptomModal() {
      this.showSymptomModal = !this.showSymptomModal;
    },
    getDiagnosis(symptoms) {
      let patientSymp = symptoms;
      console.log(patientSymp);
      console.log(patientSymp.length);
      // THIS WILL GET THE IDs FOR SYMPTOMS
      for (let a = 0; a <= patientSymp.length - 1; a++) {
        for (let b = 0; b <= this.symptoms.length; b++) {
          if (patientSymp[a] === this.symptoms[b].Name) {
            this.symptomsID.push(this.symptoms[b].ID);
            break;
          }
        }
      }
      console.log(this.symptomsID);
    },
  },
  // mounted() {
  //   fetch(
  //     "https://healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6Ijc3NjUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjQ2NjkwNjM3LCJuYmYiOjE2NDY2ODM0Mzd9.GpYEZYWfDPSy31pBPWOM2zHvWs1WhfvteiA5kWrDq1k&format=json&language=en-gb"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => (this.symptoms = data))
  //     .catch((err) => console.log(err.message));
  // },
  mounted() {
    fetch(
      "https://sandbox-healthservice.priaid.ch/symptoms?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDY3ODkxOTgsIm5iZiI6MTY0Njc4MTk5OH0.6PaMaBSoqVnXcwWS5D6ejzHoSdKPatlmAFJo4-2Bb34&format=json&language=en-gb"
    )
      .then((response) => response.json())
      .then((data) => (this.symptoms = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
