(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],r=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=i[0]))}return t}var r={},a={app:0},n=[];function s(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=r,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-card",{staticClass:"mx-auto my-8 pa-8",attrs:{width:"600","min-height":"600"}},[0===t.displayView?i("Menu"):t._e(),1===t.displayView?i("Criteria"):t._e(),2===t.displayView?i("CompareItems"):t._e(),i("v-row",{staticClass:"justify-center"},[0!==t.displayView?i("v-btn",{staticClass:"mx-3",attrs:{fab:"",color:"primary"},on:{click:t.prev}},[i("v-icon",[t._v("mdi-chevron-left")])],1):t._e(),2===t.displayView?i("v-btn",{attrs:{fab:"",color:"primary"},on:{click:t.compute}},[i("v-icon",[t._v("mdi-rocket-launch")])],1):i("v-btn",{attrs:{fab:"",color:"primary"},on:{click:t.next}},[i("v-icon",[t._v("mdi-chevron-right")])],1)],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-text-field",{attrs:{label:"Type item title here",rules:t.rules},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addItem(e)}},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),i("v-btn",{staticClass:"ml-4",attrs:{fab:"",color:"success"},on:{click:t.addItem}},[i("v-icon",[t._v("mdi-check")])],1)],1),i("v-row",[t.items.length?i("v-list",[i("v-subheader",[t._v("Items")]),t._l(t.items,(function(e,r){return i("v-list-item",{key:r},[i("v-list-item-content",[t._v(t._s(e))]),i("v-list-item-action",[i("v-btn",{attrs:{icon:"",color:"pink"},on:{click:function(e){return t.deleteItem(r)}}},[i("v-icon",[t._v("mdi-window-close")])],1)],1)],1)}))],2):t._e()],1)],1)},o=[],c=(i("caad"),i("a434"),i("2532"),{name:"Menu",data:function(){var t=this;return{inputData:"",rules:[function(e){return!t.items.includes(e)||"Duplicate item title found"}],items:[]}},created:function(){this.items=this.$store.state.items},methods:{addItem:function(){""!==this.inputData&&(this.items.push(this.inputData),this.$store.commit("setItems",this.items),this.inputData="")},deleteItem:function(t){this.items.splice(t,1),this.$store.commit("setItems",this.items)}},computed:{}}),u=c,l=i("2877"),p=i("6544"),f=i.n(p),h=i("8336"),d=i("a523"),m=i("132d"),v=i("8860"),y=i("da13"),g=i("1800"),b=i("5d23"),_=i("0fd9"),M=i("e0c7"),x=i("8654"),w=Object(l["a"])(u,s,o,!1,null,"55efde0a",null),V=w.exports;f()(w,{VBtn:h["a"],VContainer:d["a"],VIcon:m["a"],VList:v["a"],VListItem:y["a"],VListItemAction:g["a"],VListItemContent:b["a"],VRow:_["a"],VSubheader:M["a"],VTextField:x["a"]});var C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",[i("v-text-field",{attrs:{label:"Type criteria title here",rules:t.rules},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addCriteria(e)}},model:{value:t.inputData,callback:function(e){t.inputData=e},expression:"inputData"}}),i("v-btn",{staticClass:"ml-4",attrs:{fab:"",color:"success"},on:{click:t.addCriteria}},[i("v-icon",[t._v("mdi-check")])],1)],1),i("v-row",[t.criterias.length?i("v-list",[i("v-subheader",[t._v("Criterias")]),t._l(t.criterias,(function(e,r){return i("v-list-item",{key:r},[i("v-list-item-content",[t._v(t._s(e))]),i("v-list-item-action",[i("v-btn",{attrs:{icon:"",color:"pink"},on:{click:function(e){return t.deleteCriteria(r)}}},[i("v-icon",[t._v("mdi-window-close")])],1)],1)],1)}))],2):t._e()],1)],1)},k=[],$={name:"Criteria",data:function(){var t=this;return{inputData:"",criterias:[],rules:[function(e){return!t.criterias.includes(e)||"Duplicate criteria title found"}]}},created:function(){this.criterias=this.$store.state.criterias},methods:{addCriteria:function(){""!==this.inputData&&(this.criterias.push(this.inputData),this.$store.commit("setCriterias",this.criterias),this.inputData="")},deleteCriteria:function(t){this.criterias.splice(t,1),this.$store.commit("setCriterias",this.criterias)}}},I=$,D=Object(l["a"])(I,C,k,!1,null,null,null),O=D.exports;f()(D,{VBtn:h["a"],VContainer:d["a"],VIcon:m["a"],VList:v["a"],VListItem:y["a"],VListItemAction:g["a"],VListItemContent:b["a"],VRow:_["a"],VSubheader:M["a"],VTextField:x["a"]});var j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-alert",{attrs:{border:"left","colored-border":"",type:"info",elevation:"2"}},[t._v(" Type weights for criterias (1-100). Reflects how much each one is important to you. ")]),i("v-row",t._l(t.criterias,(function(e,r){return i("v-text-field",{key:r,staticClass:"flex-wrap, mx-2",attrs:{placeholder:"100",rules:t.weightRules,label:e},model:{value:t.criteriaWeightMap[e],callback:function(i){t.$set(t.criteriaWeightMap,e,i)},expression:"criteriaWeightMap[criteria]"}})})),1),i("v-divider"),i("v-alert",{attrs:{border:"left","colored-border":"",type:"info",elevation:"2"}},[t._v(" Fill the further comparable data for every criteria. Lets use 1-9 grade with next meaning: 1 - equal advantage. 3 - moderate advantage. 5 - significant advantage. 7 - primary advantage. 9 - superior advantage. 2, 4, 6, 8 - intermediate advantage degree. ")]),t._l(t.criterias,(function(e,r){return i("v-row",{key:r},[i("v-chip",{staticClass:"ml-n6",attrs:{color:"blue",filter:"",outlined:""}},[t._v(t._s(e)+" ")]),t._l(t.itemCombinations,(function(r,a){return i("v-text-field",{key:a,staticClass:"mx-2",staticStyle:{"min-width":"50px"},attrs:{rules:t.compareRules,label:r.first+"/"+r.second},on:{input:function(i){return t.setCriteriaMatrixMap(i,e,r)}}})}))],2)})),t._l(t.res,(function(e){return i("v-row",{key:e.name},[i("p",[t._v(t._s(e.item)+"="+t._s(e.percent.toFixed(3)))])])}))],2)},S=[],T=(i("4fad"),i("ac1f"),i("466d"),i("1276"),i("3835")),F=new r["a"],L={name:"CompareItems",created:function(){var t=this;F.$on("compute",(function(){t.compute()}))},data:function(){return{res:[],criteriaWeightMap:{},criteriaMatrixMap:{},weightRules:[function(t){return"undefined"==typeof t?"":null!=t.match(/[a-z]/i)?"Found letter":!(t>100||t<1)||"Out of range [1,100]"}],compareRules:[function(t){return"undefined"==typeof t?"":null!=t.match(/[0-9]+\/[0-9]+/)||"pattern number/number"}]}},computed:{criterias:function(){return this.$store.state.criterias},items:function(){return this.$store.state.items},itemCombinations:function(){for(var t=[],e=0;e<this.$store.state.items.length;e++)for(var i=e+1;i<this.$store.state.items.length;i++)t.push({first:this.$store.state.items[e],second:this.$store.state.items[i]});return t}},methods:{setCriteriaMatrixMap:function(t,e,i){if(null!=t.match(/[0-9]+\/[0-9]+/)){var r=t.split("/",2);e in this.criteriaMatrixMap||(this.criteriaMatrixMap[e]=[]);for(var a=0;a<this.items.length;a++)for(var n=0;n<this.items.length;n++)if("undefined"===typeof this.criteriaMatrixMap[e][a]&&(this.criteriaMatrixMap[e][a]=[]),"undefined"===typeof this.criteriaMatrixMap[e][n]&&(this.criteriaMatrixMap[e][n]=[]),a===n)this.criteriaMatrixMap[e][a][n]=1;else if(this.items[a]===i.first&&this.items[n]===i.second){var s=parseFloat(r[0]),o=parseFloat(r[1]);this.criteriaMatrixMap[e][a][n]=s/o,this.criteriaMatrixMap[e][n][a]=o/s}}},compute:function(){this.res=[];for(var t=[],e=0,i=Object.entries(this.criteriaMatrixMap);e<i.length;e++){var r=Object(T["a"])(i[e],2),a=r[0],n=r[1],s=1;"undefined"!==typeof this.criteriaWeightMap[a]&&(s=parseFloat(this.criteriaWeightMap[a])/100),t=this._sumMatrix(t,this._multScalarToMatrix(s,this._getMagicMatrix(this._getWeightVector(n))))}for(var o=this._getWeightVector(t),c=0;c<this.items.length;c++)this.res.push({item:this.items[c],percent:o[c]});console.log(o)},_getWeightVector:function(t){for(var e=[],i=0,r=0;r<t.length;r++){for(var a=1,n=0;n<t[r].length;n++)a*=t[r][n];a=Math.pow(a,1/t[r].length),e.push(a),i+=a}for(var s=0;s<e.length;s++)e[s]=e[s]/i;return e},_getMagicMatrix:function(t){for(var e=[],i=0;i<t.length;i++)for(var r=0;r<t.length;r++)"undefined"===typeof e[i]&&(e[i]=[]),e[i][r]=t[i]/(t[i]+t[r]);return e},_multScalarToMatrix:function(t,e){for(var i=0;i<e.length;i++)for(var r=0;r<e[i].length;r++)e[i][r]=t*e[i][r];return e},_sumMatrix:function(t,e){if(0===t.length)return e;for(var i=0;i<t.length;i++)for(var r=0;r<t[i].length;r++)t[i][r]=t[i][r]+e[i][r];return t}}},R=L,W=i("0798"),P=i("cc20"),E=i("ce7e"),A=Object(l["a"])(R,j,S,!1,null,null,null),B=A.exports;f()(A,{VAlert:W["a"],VChip:P["a"],VContainer:d["a"],VDivider:E["a"],VRow:_["a"],VTextField:x["a"]});var J={name:"App",components:{CompareItems:B,Criteria:O,Menu:V},computed:{displayView:function(){return this.$store.state.displayView}},methods:{next:function(){var t=this.$store.state.displayView;2!==t&&this.$store.commit("setDisplayView",t+1)},prev:function(){var t=this.$store.state.displayView;this.$store.commit("setDisplayView",t-1)},compute:function(){F.$emit("compute")}},data:function(){return{}},created:function(){this.$store.dispatch("init")}},q=J,z=i("7496"),G=i("b0af"),H=Object(l["a"])(q,a,n,!1,null,null,null),K=H.exports;f()(H,{VApp:z["a"],VBtn:h["a"],VCard:G["a"],VIcon:m["a"],VRow:_["a"]});var N=i("f309");r["a"].use(N["a"]);var Q=new N["a"]({}),U=i("2f62");r["a"].use(U["a"]);var X=new U["a"].Store({state:{displayView:0,items:[],criterias:[],criteriaMatrixMap:{}},mutations:{setDisplayView:function(t,e){t.displayView=e},setItems:function(t,e){t.items=e},setCriterias:function(t,e){t.criterias=e},setCriteriaMatrixMap:function(t,e){t.criteriaMatrixMap=e}},actions:{init:function(t){var e=t.commit;e("setDisplayView",0),e("setItems",[]),e("setCriterias",[]),e("setCriteriaMatrixMap",{})}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({vuetify:Q,store:X,render:function(t){return t(K)}}).$mount("#app")}});
//# sourceMappingURL=app.7c354c15.js.map