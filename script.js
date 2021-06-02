function question_one() {
    alert("We are looking for the reliability")
    let failure_rate = prompt('What is the failure rate?');
    let time = prompt('What is the time to failure?')
    let base = -1 * failure_rate * time ;
    let reliability = Math.exp(base);
    alert("The Reliability is " + reliability)
    console.log('Reliability = ' + reliability)
    document.getElementById('answer_one').innerHTML = 'Reliability = ' + reliability;
}

function question_two(){

    let question_type = alert("We are looking for reliability at 50 hours.")
    let n = parseFloat(prompt('What is the number of subsystems'))
        let failure_rate = prompt('What is the failure rate of each subsystem?');
        let time = prompt('What is the time to failure?')
        let failure_rate_total = n * failure_rate

        let base = -1 * failure_rate_total * time ;
        let reliability = Math.exp(base);
        alert("The Reliability is " + reliability)
        let MTTF = 1 / failure_rate_total
        alert("The mean time to failure is "+ MTTF + "hours");
        console.log('Reliability = ' + reliability + " and MTTF = " + MTTF + " hours");
        document.getElementById('answer_two').innerHTML = 'Reliability = ' + reliability + " and MTTF = " + MTTF + " hours"
        

}

function question_three(){
    alert('This is a parallel connection')
    let n = prompt('How many subsystems are there?');
    let p = prompt('What is the probability of each subsystem?')
    let R = 1 - p**n;
    alert('The reliability of the system is '+  R)
    console.log('Reliability = '+ R);
    document.getElementById('answer_three').innerHTML = 'The reliability of the system is '+  R
 
}

function question_four(){
    let n = parseFloat(prompt('Enter the number of components'));
    let ft1 = parseFloat(prompt('Enter the failure time of component 1'));
    let ft2 = parseFloat(prompt('Enter the failure time of component 2'));
    let ft3 = parseFloat(prompt('Enter the failure time of component 3'));
    let ft4 = parseFloat(prompt('Enter the failure time of component 4'));
    let ft5 = parseFloat(prompt('Enter the failure time of component 5'));
    let sum = ft1 + ft2 + ft3 + ft4 + ft5 
    let MTTF = sum / n
    alert("The MTTF is "+ MTTF + " hours")
    let failure_rate = 1 / MTTF
    alert('The failure rate is ' + failure_rate + " failures per 100 hours")
    let t = prompt("reliability at what?")
    let base = -1 * failure_rate * t/100;
    let R =  Math.exp(base)
    alert("The reliability is " + R)
    let prob = parseFloat(prompt("What is the probability of failure?"));
    let success = 1 - prob;
    let natLog = Math.log(success);
    let time = natLog * MTTF * -1;
    alert('The time  is ' + time + " x 100 hours")
    console.log("MTTF = "+ MTTF + "," + "Failure rate = " + failure_rate +"," + " failures per 100 hours" + "," + " Reliability = " + R + " and Time = " + time)
    document.getElementById('answer_four').innerHTML = "MTTF = "+ MTTF + "," + "Failure rate = " + failure_rate  + " failures per 100 hours" + "," + " Reliability = " + R + " and Time = " + time + " x 100 hours"


} 

function question_five(){
    let switches = parseFloat(prompt('Enter the number of switches'));
    let failed = parseFloat(prompt('How many switches failed?'));
    let cycles = parseFloat(prompt('What is the total number of test cycles?'))
    let ft1 = parseFloat(prompt('Enter the no. of cycles of failure of component 1'));
    let ft2 = parseFloat(prompt('Enter the no. of cycles of failure of component 2'));
    let ft3 = parseFloat(prompt('Enter the no. of cycles of failure of component 3'));
    let ft4 = parseFloat(prompt('Enter the no. of cycles of failure of component 4'));
    let ft5 = parseFloat(prompt('Enter no. of cycles of failure of component 5'));
    let ft6 = parseFloat(prompt('Enter no. of cycles of failure of component 6'));
    let sum = ft1 + ft2 + ft3 + ft4 + ft5 + ft6
    let notFailed = (switches - failed) * cycles
    let MTTF = (sum + notFailed) / switches
    alert('The mean number of cycles to failure is '+  MTTF)
    let failure_rate = 1 / MTTF
    alert('The failure rate is '+ failure_rate)
    let reliability = parseFloat(prompt('What is the reliability? (in decimal)' ))
    let natLog = Math.log(reliability);
    let time = Math.round(-1 * natLog / failure_rate)
    alert('The number of cycles at which reliability is 95 percent is ' + time)
    let cycleNumber = parseFloat(prompt('Reliability at how many cycles?'))
    let base =  -1 * failure_rate * cycleNumber
    let R = Math.exp(base)
    alert ('The reliability at 4000 cycles is ' + R)
    console.log("MTTF = "+ MTTF + "," + "Failure rate = "+ failure_rate + "," + "t = " + time + " cycles" + ", R(4000) = "+ R)
    document.getElementById('answer_five').innerHTML = "MTTF = "+ MTTF + "," + "Failure rate = "+ failure_rate + "," + "t = " + time + " cycles" + ", R(4000) = "+ R
}

function question_six(){
    let time = parseFloat(prompt('What is the time? (in hours)'));
    let MTTF = parseFloat(prompt('What is the mean life of the tube? (in hours)'));
    let cost = parseFloat(prompt('What is the production cost?'));
    let sell = parseFloat(prompt('What is the selling price'))
    let rework = parseFloat(prompt('What is the cost of replacement?'))
    let failure_rate = 1 / MTTF
    alert('The failure rate is '+  failure_rate);
    let profit = sell - cost
    alert('The profit is '+ profit);
    let base = -1 * failure_rate * time
    let R = Math.exp(base);
    alert('The reliability is ' + R);
    let F = 1 - R
    alert('The probability of failure is '+ F);
    let costOfReplacement = F * rework
    alert('The cost of replacement is '+ costOfReplacement)
    let totalProfit = profit - costOfReplacement
    alert('Therefore, the manufacturers expected profit is '+ totalProfit)
    console.log('totalProfit = ' +  totalProfit)
    document.getElementById('answer_six').innerHTML = 'Therefore, the manufacturers expected profit is '+ totalProfit + " Naira"

    
}

document.getElementById("question_one").onclick = function() {question_one()};
document.getElementById("question_two").onclick = function() {question_two()};
document.getElementById("question_three").onclick = function() {question_three()};
document.getElementById("question_four").onclick = function() {question_four()};
document.getElementById("question_five").onclick = function() {question_five()};
document.getElementById("question_six").onclick = function() {question_six()};
