(function(){"use strict";var s={940:function(s,t,e){var i=e(963),o=e(252);function n(s,t,e,i,n,a){const l=(0,o.up)("SymptomChecker");return(0,o.wg)(),(0,o.j4)(l)}var a=e(577);const l=s=>((0,o.dD)("data-v-da11d5a4"),s=s(),(0,o.Cn)(),s),d={key:0},c=l((()=>(0,o._)("div",null,[(0,o._)("h1",{class:"appTitle"},"iHealthy")],-1))),r={key:1,class:"introCont"},m=l((()=>(0,o._)("div",{class:"introHeader"},[(0,o._)("h2",null,"Greetings and Welcome to iHealthy"),(0,o._)("br"),(0,o._)("p",null," iHealthy is a simple application with a ton of funtionality! It's very important that we stay up to date on our knowledge of diseases and conditions, especially when it occurs on ourselves. Getting sick is not a great feeling and often times it goes unnoticed whether it be lack of knowledge or just lack of resources. This won't solve all problems but will alleviate some. "),(0,o._)("br"),(0,o._)("p",null," That's where iHealthy comes in. To put it simply iHealthy is simple symptom checker that can give a diagnosis based on given symptoms. Many conditions and illnesses have the same symptoms. As a result, the results given by this application are ranked by accuracy giving you a better understanding as to what you may be experiencing. Not only does it give you the condition but provides a small summary of what the condition is and how it imapcts you. Once a diagnosis is given, the application also gives a list of doctors and specialists one would need to visit in order to take the next step in resolving your condition or issue. "),(0,o._)("br"),(0,o._)("p",null," The goal of this application is to help users understand what conditions they are experiencing, provide knowledege and encourage them to seek treatment. In addition to preventing diseases and illness, the application can also teach users different conditions and illnesses, who to talk and consult if the conditions become worse and to educate the different kinds of illnesses and how it impacts our bodies. "),(0,o._)("br"),(0,o._)("p",null,"Click on the button below for a diagnosis")],-1))),h=[m],p=l((()=>(0,o._)("br",null,null,-1))),u={key:2,class:"diaContainer"},y={class:"diagnosisForm"},f=l((()=>(0,o._)("div",null,[(0,o._)("h2",null,"Patient Chart")],-1))),g={class:"patientInfo"},w=l((()=>(0,o._)("div",null,[(0,o._)("h2",null,"Current Symptoms Include:")],-1))),v={class:"symptomsInfo"},_=l((()=>(0,o._)("div",null,[(0,o._)("h2",null,"Potential Issues and Conditions:"),(0,o._)("p",{class:"issueDis"}," Below are potential issues and conditions you may have based on the provided symptoms. These conditions have a percentage dictating the accuracy of the condition related to the symptoms provided. Many conditions and issues can have the same symptoms thus the conditions presented have a percentage to determine which condition is more likely. DISCLAIMER: This is not a replacement for an OFFICIAL diagnosis. Please, see a doctor for serious conditions or for an official diagosis. ")],-1))),b=l((()=>(0,o._)("br",null,null,-1))),I={class:"diagnosisResult"},k=l((()=>(0,o._)("div",{class:"diaHeader"},[(0,o._)("h3",{class:"accInfo"},"Accuracy (%):"),(0,o._)("h3",{class:"conInfo"},"Condition Name:"),(0,o._)("h3",{class:"termInfo"},"Add. Info")],-1))),D={class:"info"},L={class:"accInfo"},S={class:"conInfo"},C=["onClick"],z={class:"termOne"},M={class:"word"},N={class:"def"},W={class:"termTwo"},Y={class:"word"},H={class:"def"},j=l((()=>(0,o._)("br",null,null,-1))),x=l((()=>(0,o._)("div",{class:"docRec"},[(0,o._)("div",null,[(0,o._)("h2",null,"Doctors and Specialists:"),(0,o._)("p",{class:"docDis"}," Below are a list of recommended doctors and specialists you may want to consult for more information or for conformation on your conditions. The each specialisation/doctor recommendation is split based on the issue or condition. DISCLAIMER: this is not a substitute for an official diagnosis. If you are feeling serious illness or side effects please see a doctor right away. ")])],-1))),A=l((()=>(0,o._)("br",null,null,-1))),O={class:"docResult"},Z=l((()=>(0,o._)("div",{class:"docInfo"},[(0,o._)("h3",{class:"condInfo"},"Conditions:"),(0,o._)("h3",{class:"specInfo"},"Doctors and Specialists:")],-1))),F={class:"condInfo"},T={class:"specInfo"},P=l((()=>(0,o._)("br",null,null,-1))),R=l((()=>(0,o._)("br",null,null,-1))),J=l((()=>(0,o._)("br",null,null,-1))),G=l((()=>(0,o._)("br",null,null,-1))),V=l((()=>(0,o._)("br",null,null,-1)));function X(s,t,e,i,n,l){const m=(0,o.up)("SymptomModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.showSymptomModal?((0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(m,{symptoms:n.symptoms,onClose:l.openSymptomModal,onGetPatientData:l.getPatientData},null,8,["symptoms","onClose","onGetPatientData"])])):(0,o.kq)("",!0),c,n.diagnosisForm?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",r,h)),p,n.diagnosisForm?((0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",y,[f,(0,o._)("div",g,[(0,o._)("h3",null,"Name: "+(0,a.zw)(this.name),1),(0,o._)("h3",null,"Sex: "+(0,a.zw)(this.sex),1),(0,o._)("h3",null,"Age (Year): "+(0,a.zw)(this.age),1)]),w,(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.patientSym,((s,t)=>((0,o.wg)(),(0,o.iD)("h3",{key:t},(0,a.zw)(s),1)))),128))]),_,b,(0,o._)("div",I,[k,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.diagnosis,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"diaInfo",key:t},[(0,o._)("div",D,[(0,o._)("h3",L,(0,a.zw)(s.Issue.Accuracy)+"%",1),(0,o._)("h3",S,(0,a.zw)(s.Issue.ProfName)+" - "+(0,a.zw)(s.Issue.Name),1),(0,o._)("h3",{class:"termInfo",onClick:s=>l.showAddDetail(t)},"Click Here",8,C)]),(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.defList[t],((s,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"addDetail"},[(0,o._)("div",z,[(0,o._)("p",M,(0,a.zw)(s.word1),1),(0,o._)("p",N,(0,a.zw)(s.def1),1)]),(0,o._)("div",W,[(0,o._)("p",Y,(0,a.zw)(s.word2),1),(0,o._)("p",H,(0,a.zw)(s.def2),1)])])))),128))])])))),128))]),j,x,A,(0,o._)("div",O,[Z,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.diagnosis,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"docInfo",key:t},[(0,o._)("div",F,[(0,o._)("h3",null,(0,a.zw)(s.Issue.ProfName),1),(0,o._)("h3",null,(0,a.zw)(s.Issue.Name),1)]),(0,o._)("div",T,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.Specialisation,((s,t)=>((0,o.wg)(),(0,o.iD)("h3",{key:t},(0,a.zw)(t+1)+". "+(0,a.zw)(s.Name),1)))),128))])])))),128))])])])):(0,o.kq)("",!0),P,(0,o._)("button",{class:"getDiagnosis",onClick:t[0]||(t[0]=(...s)=>l.openSymptomModal&&l.openSymptomModal(...s))}," Get a Diagnosis "),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.defList,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"failsafe",key:t},[(0,o._)("p",null,(0,a.zw)(s),1),R])))),128)),J,G,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.termsList,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"failsafe",key:t},[(0,o._)("p",null,(0,a.zw)(s.term1)+" - "+(0,a.zw)(s.term2),1),V])))),128))],64)}const B=s=>((0,o.dD)("data-v-1a712fbe"),s=s(),(0,o.Cn)(),s),$={class:"backdrop"},E={class:"outContainer"},K={class:"container"},U=B((()=>(0,o._)("h2",null,"What Are You Currently Feeling?",-1))),Q={class:"nameInfo"},q={class:"infoForm"},ss=B((()=>(0,o._)("option",{value:"",disabled:"",selected:""},"Sex",-1))),ts=B((()=>(0,o._)("option",null,"Male",-1))),es=B((()=>(0,o._)("option",null,"Female",-1))),is=[ss,ts,es],os={class:"symptomForm"},ns=B((()=>(0,o._)("option",{value:"",disabled:"",selected:""},"Choose your Symptoms",-1))),as=B((()=>(0,o._)("hr",null,null,-1))),ls={class:"curSympCon"},ds=B((()=>(0,o._)("h3",null,"Symptoms currently experiencing:",-1))),cs={key:0},rs=B((()=>(0,o._)("p",null,"No Symptoms",-1))),ms=[rs],hs={class:"currentSymptom"},ps=B((()=>(0,o._)("hr",null,null,-1))),us={class:"btns"},ys={key:0,class:"diagBtn"};function fs(s,t,e,n,l,d){return(0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",E,[(0,o._)("div",K,[(0,o._)("div",null,[U,(0,o._)("div",Q,[(0,o.wy)((0,o._)("input",{placeholder:"Your Name",class:"name","onUpdate:modelValue":t[0]||(t[0]=s=>l.name=s)},null,512),[[i.nr,l.name]])]),(0,o._)("div",q,[(0,o.wy)((0,o._)("select",{class:"sexForm","onUpdate:modelValue":t[1]||(t[1]=s=>l.sex=s)},is,512),[[i.bM,l.sex]]),(0,o.wy)((0,o._)("input",{placeholder:"Age Ex. 1989",class:"ageForm",type:"number","onUpdate:modelValue":t[2]||(t[2]=s=>l.age=s)},null,512),[[i.nr,l.age]])]),(0,o._)("div",os,[(0,o.wy)((0,o._)("select",{class:"symptoms","onUpdate:modelValue":t[4]||(t[4]=s=>l.symptom=s),onChange:t[5]||(t[5]=(...s)=>d.addSymptom&&d.addSymptom(...s))},[ns,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.listofSymptoms,((s,e)=>((0,o.wg)(),(0,o.iD)("option",{key:e,onChange:t[3]||(t[3]=(...s)=>d.addSymptom&&d.addSymptom(...s))},(0,a.zw)(s.Name),33)))),128))],544),[[i.bM,l.symptom]])])]),as,(0,o._)("div",ls,[ds,l.allSymptoms.length<=0?((0,o.wg)(),(0,o.iD)("div",cs,ms)):(0,o.kq)("",!0),(0,o._)("div",hs,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.allSymptoms,((s,t)=>((0,o.wg)(),(0,o.iD)("p",{key:t},(0,a.zw)(s),1)))),128))])]),ps,(0,o._)("div",us,[(0,o._)("button",{onClick:t[6]||(t[6]=(...s)=>d.clearList&&d.clearList(...s)),class:"clearBtn"},"Clear Symptoms"),(0,o._)("button",{onClick:t[7]||(t[7]=(0,i.iM)(((...s)=>d.closeModal&&d.closeModal(...s)),["self"])),class:"canBtn"},"Cancel"),""===this.sex||""===this.age||""===this.name?((0,o.wg)(),(0,o.iD)("button",ys," Diagnose ")):((0,o.wg)(),(0,o.iD)("button",{key:1,onClick:t[8]||(t[8]=(0,i.iM)(((...s)=>d.getPatientData&&d.getPatientData(...s)),["self"])),class:"diagBtn"}," Diagnose "))])])])])}var gs={props:["symptoms"],data(){return{listofSymptoms:[],symptom:"",sex:"",age:"",name:"",allSymptoms:[]}},methods:{addSymptom(){this.allSymptoms.push(this.symptom);for(let s=0;s<=this.listofSymptoms.length;s++)if(this.listofSymptoms[s].Name===this.symptom){let t=s;this.listofSymptoms.splice(t,1);break}this.symptom=""},clearList(){this.allSymptoms=[],this.listofSymptoms=[];for(let s=0;s<this.symptoms.length;s++)this.listofSymptoms.push(this.symptoms[s])},closeModal(){this.$emit("close")},getPatientData(){this.$emit("getPatientData",this.allSymptoms,this.age,this.sex,this.name),this.$emit("close")}},mounted(){for(let s=0;s<this.symptoms.length;s++)this.listofSymptoms.push(this.symptoms[s])}},ws=e(744);const vs=(0,ws.Z)(gs,[["render",fs],["__scopeId","data-v-1a712fbe"]]);var _s=vs,bs={data(){return{diagnosisForm:!1,showSymptomModal:!1,symptoms:[],symptomsID:[],sex:"",age:"",name:"",patientSym:[],diagnosis:[],conditions:[],specialisation:[],termsList:[],def:"",def2:"",defList:[],APItoken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InN0YXJyeWtuaWdodDM2OUBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjEwNDAxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIyLTAzLTA2IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NDc3MDcyOTYsIm5iZiI6MTY0NzcwMDA5Nn0._IbRJ8ZHd0n5817wRP_kPGsaAV8wcGV2Cdhhm0jQ7l0",termToken:"20ede4fa-246b-439a-a38d-d9f84101fd1b"}},components:{SymptomModal:_s},methods:{openSymptomModal(){this.showSymptomModal=!this.showSymptomModal},getPatientData(s,t,e,i){this.age=Date().split(" ")[3]-t,this.sex=e,this.name=i,this.patientSym=s,this.symptomsID=[];for(let o=0;o<=s.length-1;o++)for(let t=0;t<=this.symptoms.length;t++)if(s[o]===this.symptoms[t].Name){this.symptomsID.push(this.symptoms[t].ID);break}this.getDiagnosis()},getDiagnosis(){this.termsList=[],this.defList=[],this.allList=[],fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=${JSON.stringify(this.symptomsID)}&gender=${this.sex}&year_of_birth=${this.age}&token=${this.APItoken}&format=json&language=en-gb`).then((s=>s.json())).then((s=>this.diagnosis=s)).then((()=>{for(let s=0;s<=this.diagnosis.length-1;s++)this.termsList.push({term1:this.diagnosis[s].Issue.Name,term2:this.diagnosis[s].Issue.ProfName})})).then((()=>{for(let s=0;s<=this.termsList.length;s++)fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${this.termsList[s].term1}?key=${this.termToken}`).then((s=>s.json())).then((s=>{void 0===s[0].length?this.def=s[0].shortdef:this.def="No Entry"})).catch((s=>console.log(s.message))),fetch(`https://www.dictionaryapi.com/api/v3/references/medical/json/${this.termsList[s].term2}?key=${this.termToken}`).then((s=>s.json())).then((t=>{void 0===t[0].length?this.defList.push([{word1:this.termsList[s].term1,word2:this.termsList[s].term2,def1:this.def,def2:t[0].shortdef}]):this.defList.push([{word1:this.termsList[s].term1,word2:this.termsList[s].term2,def1:this.def,def2:"No Entry"}]),this.diagnosisForm=!0})).catch((s=>console.log(s.message)))})).catch((s=>console.log(s.message)))},showAddDetail(s){let t=document.getElementsByClassName("addDetail");"block"===t[s].style.display?t[s].style.display="none":t[s].style.display="block"}},mounted(){fetch(`https://sandbox-healthservice.priaid.ch/symptoms?token=${this.APItoken}&format=json&language=en-gb`).then((s=>s.json())).then((s=>this.symptoms=s)).catch((s=>console.log(s.message)))}};const Is=(0,ws.Z)(bs,[["render",X],["__scopeId","data-v-da11d5a4"]]);var ks=Is,Ds={components:{SymptomChecker:ks}};const Ls=(0,ws.Z)(Ds,[["render",n]]);var Ss=Ls;(0,i.ri)(Ss).mount("#app")}},t={};function e(i){var o=t[i];if(void 0!==o)return o.exports;var n=t[i]={exports:{}};return s[i](n,n.exports,e),n.exports}e.m=s,function(){var s=[];e.O=function(t,i,o,n){if(!i){var a=1/0;for(r=0;r<s.length;r++){i=s[r][0],o=s[r][1],n=s[r][2];for(var l=!0,d=0;d<i.length;d++)(!1&n||a>=n)&&Object.keys(e.O).every((function(s){return e.O[s](i[d])}))?i.splice(d--,1):(l=!1,n<a&&(a=n));if(l){s.splice(r--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var r=s.length;r>0&&s[r-1][2]>n;r--)s[r]=s[r-1];s[r]=[i,o,n]}}(),function(){e.d=function(s,t){for(var i in t)e.o(t,i)&&!e.o(s,i)&&Object.defineProperty(s,i,{enumerable:!0,get:t[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){e.o=function(s,t){return Object.prototype.hasOwnProperty.call(s,t)}}(),function(){var s={143:0};e.O.j=function(t){return 0===s[t]};var t=function(t,i){var o,n,a=i[0],l=i[1],d=i[2],c=0;if(a.some((function(t){return 0!==s[t]}))){for(o in l)e.o(l,o)&&(e.m[o]=l[o]);if(d)var r=d(e)}for(t&&t(i);c<a.length;c++)n=a[c],e.o(s,n)&&s[n]&&s[n][0](),s[n]=0;return e.O(r)},i=self["webpackChunksymptom_checker"]=self["webpackChunksymptom_checker"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(940)}));i=e.O(i)})();
//# sourceMappingURL=app.61f76376.js.map