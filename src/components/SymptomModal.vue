<template>
  <div class="backdrop">
    <div class="outContainer">
      <div class="container">
        <div>
          <h2>What Are You Currently Feeling?</h2>
          <div class="nameInfo">
            <input placeholder="Your Name" class="name" v-model="name" />
          </div>
          <div class="infoForm">
            <select class="sexForm" v-model="sex">
              <option value="" disabled selected>Sex</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <input
              placeholder="Age Ex. 1989"
              class="ageForm"
              type="number"
              v-model="age"
            />
          </div>
          <div class="symptomForm">
            <select class="symptoms" v-model="symptom" @change="addSymptom">
              <option value="" disabled selected>Choose your Symptoms</option>
              <option
                v-for="(symptom, index) in listofSymptoms"
                :key="index"
                @change="addSymptom"
              >
                {{ symptom.Name }}
              </option>
            </select>
          </div>
        </div>
        <hr />
        <div class="curSympCon">
          <h3>Symptoms currently experiencing:</h3>
          <div v-if="allSymptoms.length <= 0">
            <p>No Symptoms</p>
          </div>
          <div class="currentSymptom">
            <p v-for="(symptom, index) in allSymptoms" :key="index">
              {{ symptom }}
            </p>
          </div>
        </div>
        <hr />
        <div class="btns">
          <button @click="clearList" class="clearBtn">Clear Symptoms</button>
          <button @click.self="closeModal" class="canBtn">Cancel</button>
          <button
            v-if="this.sex === '' || this.age === '' || this.name === ''"
            class="diagBtn"
          >
            Diagnose
          </button>
          <button v-else @click.self="getPatientData" class="diagBtn">
            Diagnose
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["symptoms"],
  data() {
    return {
      listofSymptoms: [],
      symptom: "",
      sex: "",
      age: "",
      name: "",
      allSymptoms: [],
    };
  },
  methods: {
    addSymptom() {
      this.allSymptoms.push(this.symptom);
      for (let a = 0; a <= this.listofSymptoms.length; a++) {
        if (this.listofSymptoms[a].Name === this.symptom) {
          let index = a;
          this.listofSymptoms.splice(index, 1);
          break;
        }
      }
      this.symptom = "";
    },
    clearList() {
      this.allSymptoms = [];
      this.listofSymptoms = [];
      for (let a = 0; a < this.symptoms.length; a++) {
        this.listofSymptoms.push(this.symptoms[a]);
      }
    },
    closeModal() {
      this.$emit("close");
    },
    getPatientData() {
      this.$emit(
        "getPatientData",
        this.allSymptoms,
        this.age,
        this.sex,
        this.name
      );
      this.$emit("close");
    },
  },
  mounted() {
    for (let a = 0; a < this.symptoms.length; a++) {
      this.listofSymptoms.push(this.symptoms[a]);
    }
  },
};
</script>

<style scoped>
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.outContainer {
  display: flex;
  justify-content: center;
}
.container {
  width: 550px;
  padding: 15px 25px 15px 25px;
  background: white;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 100px;
}
.symptomForm {
  display: flex;
  margin-bottom: 15px;
}
.nameInfo {
  display: flex;
  margin-bottom: 15px;
}
.name {
  box-sizing: border-box;
  font-size: 15px;
  padding: 10px;
  width: 100%;
}
.symptoms {
  width: 100%;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
}
.addBtn {
  font-size: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  border: none;
}
.infoForm {
  display: flex;
  margin-bottom: 15px;
}
.ageForm {
  width: 100%;
  font-size: 15px;
  padding: 10px;
}
.sexForm {
  width: 30%;
  font-size: 15px;
  padding: 10px;
  margin-right: 15px;
}
.curSympCon {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 200px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.curSympCon h3 {
  margin: 0px;
  margin-bottom: 15px;
}
.curSympCon p {
  margin: 0px;
}
.currentSymptom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.currentSymptom p {
  margin: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-style: solid;
  padding: 10px;
  padding-right: 15px;
  padding-left: 15px;
  border-radius: 10px;
}
.btns {
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
  margin-top: 15px;
}
.clearBtn {
  border-radius: 5px;
  background: #d9d9d9;
  font-size: 20px;
  padding: 10px;
  border-width: 2px;
  border: none;
  margin-right: 24px;
}
.canBtn {
  border-radius: 5px;
  background: #d9d9d9;
  font-size: 20px;
  padding: 10px;
  border-width: 2px;
  border: none;
  margin-right: 24px;
}
.diagBtn {
  border-radius: 5px;
  background: green;
  color: white;
  border: none;
  font-size: 20px;
  padding: 10px;
}
</style>
