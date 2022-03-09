<template>
  <div v-if="showSymptomModal">
    <SymptomModal
      :symptoms="symptoms"
      @close="openSymptomModal"
      @getPatientData="getPatientData"
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
      sex: "",
      age: "",
      SymptomKey:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDY4NDg0NjgsIm5iZiI6MTY0Njg0MTI2OH0.HBF5Yvx56Ku_u5w4igSWcOSTB-yzeCevM0-tBSr_VVw",
      DiagnosisKey:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDY4NDg3NDEsIm5iZiI6MTY0Njg0MTU0MX0.JbdWocYa9JVGlw9Yb7uCvjszxlUwgb72F2VVaZM-B1c",
    };
  },
  components: {
    SymptomModal,
  },
  methods: {
    openSymptomModal() {
      this.showSymptomModal = !this.showSymptomModal;
    },
    getPatientData(symptoms, age, sex) {
      console.log("age: " + age);
      this.age = age;
      console.log("sex: " + sex);
      this.sex = sex;
      // THIS WILL GET THE IDs FOR SYMPTOMS
      for (let a = 0; a <= symptoms.length - 1; a++) {
        for (let b = 0; b <= this.symptoms.length; b++) {
          if (symptoms[a] === this.symptoms[b].Name) {
            this.symptomsID.push(this.symptoms[b].ID);
            break;
          }
        }
      }
      this.getDiagnosis();
    },
    getDiagnosis() {
      fetch(
        `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=${JSON.stringify(
          this.symptomsID
        )}&gender=${this.sex}&year_of_birth=${this.age}&token=${
          this.DiagnosisKey
        }&format=json&language=en-gb`
      )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    fetch(
      `https://sandbox-healthservice.priaid.ch/symptoms?token=${this.SymptomKey}&format=json&language=en-gb`
    )
      .then((response) => response.json())
      .then((data) => (this.symptoms = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
