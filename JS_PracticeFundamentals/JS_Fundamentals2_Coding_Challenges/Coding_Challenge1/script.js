const calcAverage = (score1, score2, score3) => {
    const avgScore = (score1 + score2 + score3) / 3;
    return avgScore;
}
const dolphinAvgScore = calcAverage(36, 35, 35)
const koalaAvgScore = calcAverage(36, 35, 35)
console.log(`The Dolphins score was ${dolphinAvgScore} points, and the Koalas score was ${koalaAvgScore} points!`)

const checkWinner = (avgDolphin, avgKoala) => {
    avgDolphin >= (avgKoala * 2) ? console.log(`The Dolphins won! ${avgDolphin} vs. ${avgKoala}`) : (avgDolphin * 2) <= avgKoala ? console.log(`The Koalas won! ${avgKoala} vs. ${avgDolphin}`) : console.log(`They both aren't worthy of the magnificent legnendary trophy of gymnastics.`)
}
checkWinner(dolphinAvgScore, koalaAvgScore)