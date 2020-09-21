  // from data.js
  var tableData = data;

  // Get a reference to the table body
  var tbody = d3.select("tbody");
  
  // Console.log the weather data from data.js
  console.log(data);
  
  tableData.forEach((UFO_Info) => {
    var row = tbody.append("tr");
    Object.entries(UFO_Info).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  