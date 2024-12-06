const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcNetSalary(basicSalary, benefits) {
    // Calculate gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;

    let PAYE; // Variable for tax calculation
    // Calculate PAYE based on gross salary
    if (grossSalary <= 24000) {
        PAYE = grossSalary * 0.10; // 10% tax
    } else if (grossSalary <= 32333) {
        PAYE = (24000 * 0.10) + ((grossSalary - 24000) * 0.25); // 10% for first 24000, 25% for the rest
    } else if (grossSalary <= 500000) {
        PAYE = (24000 * 0.10) + (8333 * 0.25) + ((grossSalary - 32333) * 0.30); // 30% for the rest
    } else if (grossSalary <= 800000) {
        PAYE = (24000 * 0.10) + (8333 * 0.25) + (176667 * 0.30) + ((grossSalary - 500000) * 0.325); // 32.5% for the rest
    } else {
        PAYE = (24000 * 0.10) + (8333 * 0.25) + (176667 * 0.30) + (300000 * 0.325) + ((grossSalary - 800000) * 0.35); // 35% for the rest
    }

    let NHIF; // Variable for health insurance deduction
    // Calculate NHIF based on gross salary
    if (grossSalary <= 5999) {
        NHIF = 150;
    } else if (grossSalary <= 7999) {
        NHIF = 300;
    } else if (grossSalary <= 11999) {
        NHIF = 500;
    } else if (grossSalary <= 19999) {
        NHIF = 600;
    } else if (grossSalary <= 24999) {
        NHIF = 750;
    } else if (grossSalary <= 29999) {
        NHIF = 850;
    } else if (grossSalary <= 34999) {
        NHIF = 900;
    } else if (grossSalary <= 39999) {
        NHIF = 950;
    } else if (grossSalary <= 43999) {
        NHIF = 1000;
    } else if (grossSalary <= 49999) {
        NHIF = 1100;
    } else if (grossSalary <= 59999) {
        NHIF = 1200;
    } else if (grossSalary <= 69999) {
        NHIF = 1300;
    } else if (grossSalary <= 79999) { 
        NHIF = 1400;
    } else if (grossSalary <= 89999) {
        NHIF = 1500;
    } else if (grossSalary <= 99999) {
        NHIF = 1600;
    } else {
        NHIF = 1700; // Default value for higher salaries
    }

    // Calculate NSSF deduction (6% of basic salary, capped at Ksh 7,000)
    const NSSF = basicSalary <= 7000 ? basicSalary * 0.06 : (7000 * 0.06) + ((basicSalary - 7000) * 0.06);
    
    // Calculate net salary by subtracting deductions from gross salary
    const netSalary = grossSalary - (PAYE + NHIF + NSSF);

    // Return the results formatted to two decimal places
    return {
        grossSalary: grossSalary.toFixed(2),
        PAYE: PAYE.toFixed(2),
        NHIF: NHIF.toFixed(2),
        NSSF: NSSF.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

// Ask user for basic salary
rl.question('Enter Basic Salary: ', (basicSalaryInput) => {
    // Ask user for benefits
    rl.question('Enter Benefits: ', (benefitsInput) => {
        const basicSalary = parseFloat(basicSalaryInput); // Convert input to number
        const benefits = parseFloat(benefitsInput); // Convert input to number
        const result = calcNetSalary(basicSalary, benefits); // Calculate salary details

        // Display the results

        console.log(`Gross Salary: Ksh ${result.grossSalary}`);
        console.log(`PAYE Tax: Ksh ${result.PAYE}`);
        console.log(`NHIF Deduction: Ksh ${result.NHIF}`);
        console.log(`NSSF Deduction: Ksh ${result.NSSF}`);
        console.log(`Net Salary: Ksh ${result.netSalary}`);

        rl.close();
    });

});
    