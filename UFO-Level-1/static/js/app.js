  // from data.js
  var tableData = data;

  // Get a reference to the table body
  var tbody = d3.select("tbody");
  
  // Console.log the weather data from data.js
  console.log(data);
  
  tableData.forEach((UFO_Data) => {
    var row = tbody.append("tr");
    Object.entries(UFO_Data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

  //FILTER TABLE SECTION

  //Reference to the Button
  var button = d3.select("#filter-btn");

  //Button Click Handler, function is run on click, rather than a defined function
  button.on("click", function() {
    console.log("Table Filtered!");
    
    //Clear tbody
    tbody.html("");
    
    //Reference to "Enter a Date" 
    var input = d3.select("#datetime");
    
    //Grab user input value
    var userInput = input.property("value");
      //Checks Input in Log
      //console.log(userInput);
    
    //Filter Table According to userInput
    var filterTable = tableData.filter(tableData => tableData.datetime === userInput);
    console.log(filterTable);
    
    //Add filterTable to tbody to display table
    filterTable.forEach((UFO_Data) => {
      var row = tbody.append("tr");
      Object.entries(UFO_Data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  });