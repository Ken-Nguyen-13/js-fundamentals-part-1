const bill1 = Number(prompt(`What was your bill?`))
const bill2 = Number(prompt(`What was the 2nd person's bill?`))
const bill3 = Number(prompt(`What was the 3rd person's bill?`))

function calcTip(billValue) {
    if(billValue > 50) {
        if(billValue < 300) {
            const tip = billValue * 0.15;
            return tip;
        } else {
            const tip = billValue * 0.2;
            return tip;
        }
    } else {
        const tip = billValue * 0.2;
        return tip;
    }
}
const theTips = [calcTip(bill1), calcTip(bill2), calcTip(bill3)]
const theTotals = [bill1 + theTips[0], bill2 + theTips[1], bill3 + theTips[2]]

console.log(`The bills were $${bill1}, $${bill2}, and $${bill3}. The tips were 
$${theTips[0]}, $${theTips[1]}, and $${theTips[2]}. The totals are 
$${theTotals[0]}, $${theTotals[1]}, $${theTotals[2]}.`)