<template>
  <div v-if="showSymptomModal">
    <SymptomModal
      :symptoms="symptoms"
      @close="openSymptomModal"
      @getPatientData="getPatientData"
    />
  </div>

  <div>
    <h1 class="appTitle">iHealthy</h1>
  </div>

  <div v-if="!diagnosisForm" class="introCont">
    <div class="introHeader">
      <h2>Greetings and Welcome to iHealthy</h2>
      <br />
      <p>
        iHealthy is a simple application with a ton of funtionality! It's very
        important that we stay up to date on our knowledge of diseases and
        conditions, especially when it occurs on ourselves. Getting sick is not
        a great feeling and often times it goes unnoticed whether it be lack of
        knowledge or just lack of resources. This won't solve all problems but
        will alleviate some.
      </p>
      <br />
      <p>
        That's where iHealthy comes in. To put it simply iHealthy is simple
        symptom checker that can give a diagnosis based on given symptoms. Many
        conditions and illnesses have the same symptoms. As a result, the
        results given by this application are ranked by accuracy giving you a
        better understanding as to what you may be experiencing. Not only does
        it give you the condition but provides a small summary of what the
        condition is and how it imapcts you. Once a diagnosis is given, the
        application also gives a list of doctors and specialists one would need
        to visit in order to take the next step in resolving your condition or
        issue.
      </p>
      <br />
      <p>
        The goal of this application is to help users understand what conditions
        they are experiencing, provide knowledege and encourage them to seek
        treatment. In addition to preventing diseases and illness, the
        application can also teach users different conditions and illnesses, who
        to talk and consult if the conditions become worse and to educate the
        different kinds of illnesses and how it impacts our bodies.
      </p>
      <br />
      <p>Click on the button below for a diagnosis</p>
    </div>
  </div>

  <br />

  <div v-if="diagnosisForm" class="diaContainer">
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
            <h3 class="termInfo" @click="showAddDetail(index)">Click Here</h3>
          </div>

          <div>
            <div
              v-for="(term, index) in this.defList[index]"
              :key="index"
              class="addDetail"
            >
              <div class="termOne">
                <p class="word">{{ term.word1 }}</p>
                <p class="def">{{ term.def1 }}</p>
              </div>
              <div class="termTwo">
                <p class="word">{{ term.word2 }}</p>
                <p class="def">{{ term.def2 }}</p>
              </div>
            </div>
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
          class="docInfo"
          v-for="(diagnosis, index) in this.diagnosis"
          :key="index"
        >
          <div class="condInfo">
            <h3>{{ diagnosis.Issue.ProfName }}</h3>
            <h3>{{ diagnosis.Issue.Name }}</h3>
          </div>
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

  <br />

  <button class="getDiagnosis" @click="openSymptomModal">
    Get a Diagnosis
  </button>
</template>

<script>
import SymptomModal from "./SymptomModal.vue";

export default {
  data() {
    return {
      diagnosisForm: false,
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
      def2: "",
      defList: [],
      APItoken: process.env.VUE_APP_MEDICAPI_KEY,
      termToken: process.env.VUE_APP_DICTIONARY_KEY,
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
    },
    getDiagnosis() {
      this.diagnosisForm = true;
      this.termsList = [];
      this.defList = [];
      this.allList = [];
      fetch(
        `https://healthservice.priaid.ch/diagnosis?symptoms=${JSON.stringify(
          this.symptomsID
        )}&gender=${this.sex}&year_of_birth=${this.age}&token=${
          this.APItoken
        }&format=json&language=en-gb`
      )
        .then((response) => response.json())
        // .then((data) => console.log(data))
        .then((data) => (this.diagnosis = data))

        .then(() => {
          for (let a = 0; a <= this.diagnosis.length - 1; a++) {
            this.termsList.push({
              term1: this.diagnosis[a].Issue.Name,
              term2: this.diagnosis[a].Issue.ProfName,
            });
          }
        })

        .then(() => {
          for (let b = 0; b <= this.termsList.length - 1; b++) {
            fetch(
              `https://www.dictionaryapi.com/api/v3/references/medical/json/${this.termsList[b].term1}?key=${this.termToken}`
            )
              .then((response) => response.json())
              .then((data) => (this.def = data[0].shortdef))
              .catch((err) => console.log(err.message));

            fetch(
              `https://www.dictionaryapi.com/api/v3/references/medical/json/${this.termsList[b].term2}?key=${this.termToken}`
            )
              .then((response) => response.json())
              .then((data) =>
                this.defList.push([
                  {
                    show: false,
                    word1: this.termsList[b].term1,
                    word2: this.termsList[b].term2,
                    def1: this.def,
                    def2: data[0].shortdef,
                  },
                ])
              )
              .catch((err) => console.log(err.message));
          }
        })
        .catch((err) => console.log(err.message));
    },
    showAddDetail(number) {
      let allDetail = document.getElementsByClassName("addDetail");
      if (allDetail[number].style.display === "block") {
        allDetail[number].style.display = "none";
      } else {
        allDetail[number].style.display = "block";
      }
    },
  },
  mounted() {
    fetch(
      `https://healthservice.priaid.ch/symptoms?token=${this.APItoken}&format=json&language=en-gb`
    )
      .then((response) => response.json())
      .then((data) => (this.symptoms = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.appTitle {
  color: #cce6e6;
  font-size: 60px;
}
.introCont {
  display: flex;
  justify-content: center;
}
.introHeader {
  max-width: 600px;
  margin-left: 15px;
  padding: 25px;
  background: #e6f2f2;
  margin-right: 15px;
}
.getDiagnosis {
  width: 300px;
  border: none;
  font-size: 30px;
  padding: 15px;
  border-radius: 15px;
  background: #ff4d56;
  color: white;
}
.diaContainer {
  display: flex;
  justify-content: center;
}
.diagnosisForm {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-style: solid;
  width: 700px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  background: #eef2fc;
  border-radius: 3px;
  border-color: #4360b6;
}
.patientInfo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
.addDetail {
  display: none;
  flex-direction: column;
  border-style: solid;
  border-width: thin;
  text-align: left;
  padding: 15px;
}
.addInfo {
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
}
.termOne {
  display: flex;
  margin-bottom: 30px;
}
.termTwo {
  display: flex;
}
.word {
  width: 125px;
  padding-right: 15px;
}
.def {
  width: 85%;
}
.docInfo {
  display: flex;
  flex-direction: row;
}
.docInfo h3 {
  margin: 0px;
}
.condInfo {
  border-style: solid;
  border-width: thin;
  text-align: left;
  width: 35%;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 12px;
}
.specInfo {
  border-style: solid;
  border-width: thin;
  text-align: left;
  width: 65%;
  padding-left: 7px;
}
</style>
