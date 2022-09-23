let firstLoan = {
    id: '202',
    customerName: 'Abdulrahman Kabia',
    phoneNumber: '7038786534',
    address: 'Sterling Va',
    loanAmount: 370,
    interest: 6,
    loanTermYears: 4,
    loanType: 'Student loans',
    description: 'IFT 458'
}

let secondLoan = {
    id: '203',
    customerName: 'Wurie Mariama',
    phoneNumber: '57178650037',
    address: 'Herndon Va',
    loanAmount: 400,
    interest: 6,
    loanTermYears: 4,
    loanType: 'Equity loans',
    description: 'IFT 458'
}

let thirdLoan = {
    id: '204',
    customerName: 'Mohamed Jalloh',
    phoneNumber: '7034567832',
    address: 'Laurel MD',
    loanAmount: 200,
    interest: 6,
    loanTermYears: 4,
    loanType: 'Mortgage loans',
    description: 'IFT 458'
}

let fourthLoan = {
    id: '205',
    customerName: 'Halley Kunu',
    phoneNumber: '5718757623',
    address: 'Reston Va',
    loanAmount: 550,
    interest: 6,
    loanTermYears: 4,
    loanType: 'Equity loans',
    description: 'IFT 458'
}

let fifthLoan = {
    id: '206',
    customerName: 'Mary Boakye',
    phoneNumber: '7034567834',
    address: 'South Riding Va',
    loanAmount: 400,
    interest: 6,
    loanTermYears: 4,
    loanType: 'Student loans',
    description: 'IFT 458'
}



function calculatedLoanAmount(loan) {
    const i = loan.interest / (100 * 12);
    const n = 1 / ((1 + i) ** (loan.loanTermYears * 12));
    const pv = (loan.loanAmount / i) * (1 - n)
    return pv;
}

function displayLoanDetails(loan) {
    console.log(loan);
    console.log(`The calculated loan is: ${calculatedLoanAmount(loan)}.\n`);
}

displayLoanDetails(firstLoan);
displayLoanDetails(secondLoan);
displayLoanDetails(thirdLoan);
displayLoanDetails(fourthLoan);
displayLoanDetails(fifthLoan);