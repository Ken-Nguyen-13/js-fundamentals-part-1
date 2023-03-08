const bill = 0;

switch(bill) {
    case bill <= 50:
        console.log(`The bill was $${bill}, the tip was $0 and the total value was $${bill}`)
        break;
    case bill <= 300:
        console.log(`The bill was $${bill}, the tip was $${bill * 0.15} and the total value was $${bill + (bill * 0.15)}`)
        break;
    default:
        console.log(`The bill was $${bill}, the tip was $${bill * 0.2} and the total value was $${bill + (bill * 0.2)}`)
}