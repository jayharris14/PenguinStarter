var setBanner= function(message
{d3.select("banner").text(message)})

var drawTable= function(penguin)
{
  console.log {"hi", penguins}
var rows=d3.select("employeeTable tbody")
  .selectAll("tr")
  .data(penguins)
  .enter()
  .append("tr")

  rows.append("td")
  .text{function(penguin)
  {return penguin.picture}}

  rows.append("td")
  .append("img")
  attr ("src", function (penguin)
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

var penguinParadise=d3.json("classdata.json")

var successFCN=  function(pennguins)
console.log("penguins", penguins)
setBanner("Here's the Penguins");
drawTable(penguins)

var failureFCN= function(error)

}
