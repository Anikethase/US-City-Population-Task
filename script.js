function AddRow(){
  var x = document.forms["myForm"]["city"].value;
  var y = document.forms["myForm"]["state"].value;
  var z = document.forms["myForm"]["population"].value;
      if (x == "") {
        alert("city must be filled out");
        return false;
      }
      if (y == "") {
        alert("state must be filled out");
        return false;
      }
      if (z == "") {
        alert("population be filled out");
        return false;
      }
  var city = document.getElementById("city").value;
  var state =document.getElementById("state").value;
  var population =document.getElementById("population").value;

  var table = document.getElementById("tblInformation");

  var row = table.insertRow(0);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = city;
  cell2.innerHTML = state;
  cell3.innerHTML = population;
   document.getElementById("city").value="";
  document.getElementById("state").value="";
  document.getElementById("population").value="";
}

function sortCity(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("populationTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;       
    for (i = 1; i < (rows.length - 1); i++) {           
      shouldSwitch = false;          
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];        
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {        
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;      
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

function sortPopulation(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("populationTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;       
    for (i = 1; i < (rows.length - 1); i++) {           
      shouldSwitch = false;          
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];        
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {        
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;      
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}