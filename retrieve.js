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
  .attr ("src", function(penguin)
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

quizmean.sort(function(charA,charB)
    {
        if(charA.quizmean ==
                        charB.quizmean)
        {
            return 0;
        }
        else if (charA.quizmean > 
                        charB.quizmean))
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }
    });

testmean.sort(function(charA,charB)
    {
        if(charA.testmean ==
                        charB.testmean)
        {
            return 0;
        }
        else if (charA.testmean > 
                        charB.testmean))
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }

homeworkmean.sort(function(charA,charB)
    {
        if(charA.homeworkmean ==
                        charB.homeworkmean)
        {
            return 0;
        }
        else if (charA.homeworkmean > 
                        charB.homeworkmean))
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }

finalmean.sort(function(charA,charB)
    {
        if(charA.finalmean ==
                        charB.finalmean)
        {
            return 0;
        }
        else if (charA.finalmean > 
                        charB.finalmean))
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }


