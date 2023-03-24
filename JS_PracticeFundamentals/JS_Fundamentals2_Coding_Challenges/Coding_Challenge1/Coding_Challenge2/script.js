/*Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%*/
const bills = [125, 555, 44]
function calcTip(bill) {
    if(bill > 50) {
        if(bill < 300){
            const tip = bill * 0.15;
            return tip;
        } else {
            const tip = bill * 0.2;
            return tip;
        }
    } else {
        const tip = bill * 0.2;
        return tip;
    }
}

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]]
console.log(`Your bills were $${bills} so the required tip is $${tip} so the totals are ${total}.`)