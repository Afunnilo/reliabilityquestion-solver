function question_one() {
    let question_type = prompt('What are you looking for? reliability or failure rate');
    let question_type_lower = question_type.toLowerCase();
    if (question_type_lower == "reliability") {
        let hazard_rate = prompt('what is the hazard rate?');
        let time = prompt('what is the time to failure?')
        let base = -1 * hazard_rate * time ;
        let reliability = Math.exp(base);
        alert("The reliability is " + reliability)
        console.log('Reliability = ' + reliability)
        
    } else if (question_type_lower = "failure_rate") {
        let hazard_rate = prompt('what is the hazard rate?');
        let time = prompt('what is the time to failure?')
        let base = -1 * hazard_rate * time ;
        let reliability = Math.exp(base)
        let failure_rate = 1 - reliability;
       alert('The Failure rate is '+ failure_rate)
       console.log('Failure Rate = ' + failure_rate)
    }
}

function question_two(){

    let question_type = alert("We are looking for reliability at 50 hours.")
        let hazard_rate = prompt('what is the hazard rate?');
        let time = prompt('what is the time to failure?')
        let base = -1 * hazard_rate * time ;
        let reliability = Math.exp(base);
        alert("The reliability is " + reliability)
        let MTTF = 1 / hazard_rate
        alert("The mean time to failure is "+ MTTF + "hours");
        console.log('Reliability = ' + reliability + " and MTTF = " + MTTF + " hours")
        

}

function question_three(){
    let type = prompt( "Is this a series or parallel arrangement?")
    if (type == "parallel") {
    let n = prompt('How many subsystems are there?');
    let p = prompt('What is the probability of each subsystem?')
    let R = 1 - p**n;
    alert('The reliability of the system is '+  R)
    console.log('Reliability = '+ R) }
    else {
        alert('try again')
    }
}

function question_four(){
    let n = parseFloat(prompt('How many components are there?'));
    if (n ==  5) {
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
    }
    else {
        alert('Try again')
    }
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

    
}