const inpbx_doc = document.getElementById("inpbx");
const inpbx2_doc = document.getElementById("inpbx2");
const inpdate_doc = document.getElementById("inpdate");
const addbtn_doc = document.getElementById("addbtn");
const table_doc = document.getElementById("table");
const dltbtn_doc = document.getElementById("dltbtn");

let exp_list = [];

if (localStorage.length != 0) {
  exp_list = JSON.parse(localStorage.getItem("expense"));
}

if(exp_list.length!=0){
//for(let k=0;k<exp_list.length;k++){
getFromStorage();
//}
}

addbtn_doc.addEventListener("click", function () {
  add_list();
  addrow();
  addtostorage();
});

function add_list() {
  let expName = inpbx_doc.value;
  let amount = inpbx2_doc.value;
  let date = inpdate_doc.value;

  let list_obj = { exp: `${expName}`, amt: `${amount}`, dte: `${date}` };

  exp_list.push(list_obj);
}

function addrow() {
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  for (let i = 0; i < exp_list.length; i++) {
    td1.innerHTML = `${exp_list[i].exp}`;
    td2.innerHTML = `${exp_list[i].amt}`;
    td3.innerHTML = `${exp_list[i].dte}`;
  }

  row.append(td1);
  row.append(td2);
  row.append(td3);

  if (
    inpbx_doc.value == "" ||
    inpbx2_doc.value == "" ||
    inpdate_doc.value == ""
  ) {
    alert("hey");
  } else {
    table_doc.appendChild(row);
  }
}

function addtostorage() {
  localStorage.setItem("expense", JSON.stringify(exp_list));
}

function getFromStorage() {
  /* let newexp_list = Array.from(exp_list); */
  

  /* if(newexp_list.length!=0){
    exp_list = Array.from(newexp_list);
    } */

  /* let row = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td"); */

  let row = []
  let td1 = []
  let td2 = []
  let td3 = []

  for (let f=0;f<exp_list.length;f++){

    row.push(document.createElement("tr"));
    td1.push(document.createElement("td"));
    td2.push(document.createElement("td"));
    td3.push(document.createElement("td"));

 

  //for (let i = 0; i < exp_list.length; i++) {
    td1[f].innerHTML = `${exp_list[f].exp}`;
    td2[f].innerHTML = `${exp_list[f].amt}`;
    td3[f].innerHTML = `${exp_list[f].dte}`;
  //}


  row[f].append(td1[f]);
  row[f].append(td2[f]);
  row[f].append(td3[f]);

  table_doc.appendChild(row[f]);
  }
  
}



dltbtn_doc.addEventListener("click",function(){
    localStorage.clear();
    exp_list = [];
    window.location.reload();
})