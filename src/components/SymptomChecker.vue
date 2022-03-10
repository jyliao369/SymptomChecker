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
    <button @click="openSymptomModal">Get A Diagnosis</button>
  </div>

  <br />

  <div class="diaContainer">
    <div class="diagnosisForm">
      <div>
        <h2>Patient Chart</h2>
      </div>
      <div class="patientInfo">
        <h3>Name: {{ this.name }}</h3>
        <h3>Sex: {{ this.sex }}</h3>
        <h3>Age (Year): {{ this.age }}</h3>
      </div>
      <div>
        <h2>Current Symptoms Include:</h2>
      </div>
      <div class="symptomsInfo">
        <h3 v-for="(symptom, index) in this.patientSym" :key="index">
          {{ symptom }}
        </h3>
      </div>
      <div>
        <h2>Potential Issues and Conditions:</h2>
        <p class="issueDis">
          Below are potential issues and conditions you may have based on the
          provided symptoms. These conditions have a percentage dictating the
          accuracy of the condition related to the symptoms provided. Many
          conditions and issues can have the same symptoms thus the conditions
          presented have a percentage to determine which condition is more
          likely. DISCLAIMER: This is not a replacement for an OFFICIAL
          diagnosis. Please, see a doctor for serious conditions or for an
          official diagosis.
        </p>
      </div>
      <div class="diaInfo">
        <div>
          <h2>Accuracy (%):</h2>
        </div>
        <div>
          <h2>Condition Name:</h2>
        </div>
      </div>
      <div>
        <div v-for="(diagnosis, index) in this.diagnosis" :key="index">
          <h3>
            {{ diagnosis.Issue.Accuracy }}% - {{ diagnosis.Issue.ProfName }} -
            {{ diagnosis.Issue.Name }}
          </h3>
        </div>
      </div>
      <div><h2>Specialists and Doctors:</h2></div>
    </div>
  </div>
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
      name: "",
      patientSym: [],
      diagnosis: [],
      conditions: [],
      specialisation: [],
      SymptomKey:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDY5MzQ4OTAsIm5iZiI6MTY0NjkyNzY5MH0.QPWOwWDWz2ktWIq6rD-nFHtI9MBVIFrYvuliJwP_TPY",
      DiagnosisKey:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDY5MzQ4OTAsIm5iZiI6MTY0NjkyNzY5MH0.QPWOwWDWz2ktWIq6rD-nFHtI9MBVIFrYvuliJwP_TPY",
    };
  },
  components: {
    SymptomModal,
  },
  methods: {
    openSymptomModal() {
      this.showSymptomModal = !this.showSymptomModal;
    },
    getPatientData(symptoms, age, sex, name) {
      this.age = age;
      this.sex = sex;
      this.name = name;
      this.patientSym = symptoms;
      this.symptomsID = [];
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
        // .then((data) => console.log(data))
        .then((data) => (this.diagnosis = data))
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
<style scoped>
.diaContainer {
  display: flex;
  justify-content: center;
}
.diagnosisForm {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  width: 750px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
}
.patientInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.issueDis {
  text-align: left;
}
.diaInfo {
  display: flex;
  flex-direction: row;
}
</style>
