var penguinParadise=d3.json("classData.json")

var successFCN=  function(penguin)
{
console.log("penguins", penguin);
drawTable(penguin)}

var failureFCN= function(error)
{console.log("error", error)}

penguinParadise.then(successFCN, failureFCN)

var quizmean=function(penguin)
{var getQuizgrades=function(quiz){
  return quiz.grade
}
var quizGrades=penguin.quizes.map(getQuizgrades)
var quizmean=d3.mean(quizGrades)
return quizmean}


var homeworkmean=function(penguin)
{var gethwgrades=function(homework){
  return homework.grade
}
var hwGrades=penguin.homework.map(gethwgrades)
var homeworkmean=d3.mean(hwGrades)
return homeworkmean}

var testmean=function(penguin)
{var gettestgrades=function(test){
  return test.grade
}
var testGrades=penguin.test.map(gettestgrades)
var testmean=d3.mean(testGrades)
return testmean}

var finalmean=function(penguin)
{var getfinalgrades=function(final){
  return final.grade
}
var finalGrades=penguin.final.map(getfinalgrades)
var finalmean=d3.mean(finalGrades)
return finalmean}

var drawTable= function(penguin)
{
  console.log ("hi", penguin)
var rows=d3.select("#tab")
  .selectAll("tr")
  .data(penguin)
  .enter()
  .append("tr")

  rows.append("td")
  .append("img")
  .attr ("src", function(penguin)
  {return "imgs/"+ penguin.picture})

  rows.append("td")
  .text(quizmean)

rows.append("td")
.text(homeworkmean)

rows.append("td")
.text(testmean)

rows.append("td")
.text(finalmean)

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
                        charB.homeworkmean)
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
                        charB.finalmean)
        {
            return 1;
        }
        else    //char is <=100
        {
            return -1;
        }


