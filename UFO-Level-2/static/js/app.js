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
  function FILTER_TABLE {
    console.log("Table Filtered!");
    
    //Clear tbody
    tbody.html("");

    //Reference to "Form Labels" 
    var userInput = d3.select("#userInput");

    //Grab user input value
    var Input = userInput.property("value");

      //Checks Input in Log
      //console.log(Input);
    
    //Filter Table According to userInput
    var filterTable = tableData.filter(tableData => tableData.datetime === Input || 
                                       tableData => tableData.city === Input ||
                                       tableData => tableData.state === Input ||
                                       tableData => tableData.country === Input ||
                                       tableData => tableData.shape === Input ||
                                       );
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

  button.on("click", function(FILTER_TABLE)
