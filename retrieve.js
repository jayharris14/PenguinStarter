var penguinParadise=d3.json("classData.json")

var successFCN=  function(penguin)
{
console.log("penguins", penguin);
drawTable(penguin)}

var failureFCN= function(error)
{console.log(penguin)}

penguinParadise.then(successFCN, failureFCN)



var drawTable= function(penguin)
{
  console.log ("hi", penguin)
var rows=d3.select("employeeTable tbody")
  .selectAll("tr")
  .data(penguin)
  .enter()
  .append("tr")

  rows.append("td")
  .text(function(penguin)
  {return penguin.picture})

  rows.append("td")
  .append("img")
  attr ("src", function(penguin)
  {return penguin.picture})

  rows.append("td")
  .text(function(penguin)
{return penguin.quizmean})

rows.append("td")
.text(function(penguin)
{return penguin.homeworkmean})

rows.append("td")
.text(function(penguin)
{return penguin.testmean})

rows.append("td")
.text(function(penguin)
{return penguin.finalgrade})


}
