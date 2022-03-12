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
    <button @click="getMedicalTerm">Get Term</button>
    <button @click="testFetch">test</button>
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

      <br />

      <div class="diagnosisResult">
        <div class="diaHeader">
          <h3 class="accInfo">Accuracy (%):</h3>
          <h3 class="conInfo">Condition Name:</h3>
          <h3 class="termInfo">Add. Info</h3>
        </div>

        <div
          class="diaInfo"
          v-for="(diagnosis, index) in this.diagnosis"
          :key="index"
        >
          <div class="info">
            <h3 class="accInfo">{{ diagnosis.Issue.Accuracy }}%</h3>
            <h3 class="conInfo">
              {{ diagnosis.Issue.ProfName }} - {{ diagnosis.Issue.Name }}
            </h3>
            <h3 @click="showDetail(index)" class="termInfo">Click Here</h3>
          </div>
          <div class="term" v-if="this.defList[index].show">
            <p>
              {{ this.termsList[index].term1 }} - {{ this.defList[index].def1 }}
            </p>
            <p>
              {{ this.termsList[index].term2 }} -
              {{ this.defList[index].def2 }}
            </p>
          </div>
        </div>
      </div>

      <br />

      <div class="docRec">
        <div>
          <h2>Doctors and Specialists:</h2>
          <p class="docDis">
            Below are a list of recommended doctors and specialists you may want
            to consult for more information or for conformation on your
            conditions. The each specialisation/doctor recommendation is split
            based on the issue or condition. DISCLAIMER: this is not a
            substitute for an official diagnosis. If you are feeling serious
            illness or side effects please see a doctor right away.
          </p>
        </div>
      </div>

      <br />

      <div class="docResult">
        <div class="docInfo">
          <h3 class="condInfo">Conditions:</h3>
          <h3 class="specInfo">Doctors and Specialists:</h3>
        </div>

        <div
          class="diaInfo"
          v-for="(diagnosis, index) in this.diagnosis"
          :key="index"
        >
          <h3 class="condInfo">
            {{ diagnosis.Issue.ProfName }} - {{ diagnosis.Issue.Name }}
          </h3>
          <div class="specInfo">
            <h3
              v-for="(doctor, index) in diagnosis.Specialisation"
              :key="index"
            >
              {{ index + 1 }}. {{ doctor.Name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {{ this.defList }}
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
      termsList: [],
      def: "",
      defList: [],
      APItoken:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDcxMjI2MDYsIm5iZiI6MTY0NzExNTQwNn0.hdmuDVj-f5iWZa3pxBRrNj2vmYYQOmnpbk3qV5MfvmU",
      termToken: "20ede4fa-246b-439a-a38d-d9f84101fd1b",
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
      this.age = Date().split(" ")[3] - age;
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
      // this.getMedicalTerm();
    },
    getDiagnosis() {
      try {
        fetch(
          `https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=${JSON.stringify(
            this.symptomsID
          )}&gender=${this.sex}&year_of_birth=${this.age}&token=${
            this.APItoken
          }&format=json&language=en-gb`
        )
          .then((response) => response.json())
          // .then((data) => console.log(data))
          .then((data) => (this.diagnosis = data))

          .then(() => {
            this.termsList = [];
            for (let a = 0; a <= this.diagnosis.length - 1; a++) {
              this.termsList.push({
                term2: this.diagnosis[a].Issue.Name,
                term1: this.diagnosis[a].Issue.ProfName,
              });
            }
          })

          .then(() => {
            this.defList = [];
            for (let a = 0; a <= this.termsList.length - 1; a++) {
              fetch(
                `https://www.dictionaryapi.com/api/v3/references/medical/json/${this.termsList[a].term1}?key=${this.termToken}`
              )
                .then((response) => response.json())
                .then((data) => {
                  if (data[0].shortdef === "") {
                    this.def = "";
                  } else {
                    this.def = data[0].shortdef;
                  }
                })
                .catch((err) => console.log(err.message));

              fetch(
                `https://www.dictionaryapi.com/api/v3/references/medical/json/${this.termsList[a].term2}?key=${this.termToken}`
              )
                .then((response) => response.json())
                .then((data) =>
                  this.defList.push({
                    show: false,
                    def1: this.def,
                    def2: data[0].shortdef,
                  })
                )
                .catch((err) => console.log(err.message));
            }
          })
          .catch((err) => console.log(err.message));
      } catch (err) {
        console.log(err);
      }
    },
    showDetail(number) {
      this.defList[number].show = !this.defList[number].show;
    },
    // testFetch() {
    //   fetch(
    //     `https://www.dictionaryapi.com/api/v3/references/medical/json/meteorism?key=20ede4fa-246b-439a-a38d-d9f84101fd1b`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => console.log(data[0].shortdef))
    //     .catch((err) => console.log(err.message));
    // },
  },
  mounted() {
    fetch(
      `https://sandbox-healthservice.priaid.ch/symptoms?token=${this.APItoken}&format=json&language=en-gb`
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
  padding-bottom: 30px;
}
.patientInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.issueDis,
.docDis {
  text-align: left;
}
.diagnosisResult {
  display: flex;
  flex-direction: column;
}
.diaInfo h3,
p {
  margin: 0px;
}
.diaHeader {
  display: flex;
  flex-direction: row;
}
.diaHeader h3 {
  margin: 0px;
}
.info {
  display: flex;
  flex-direction: row;
}
.accInfo {
  border-style: solid;
  border-width: thin;
  width: 20%;
  text-align: left;
  padding-left: 7px;
  padding-bottom: 12px;
}
.conInfo {
  border-style: solid;
  border-width: thin;
  width: 65%;
  text-align: left;
  padding-left: 7px;
}
.termInfo {
  display: flex;
  border-style: solid;
  border-width: thin;
  width: 15%;
  align-items: center;
  justify-content: center;
}
.term {
  border-style: solid;
  border-width: thin;
  text-align: left;
  padding: 15px;
}
</style>
