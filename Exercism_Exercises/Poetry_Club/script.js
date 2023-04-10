function frontDoorResponse(lineOfPoetry) {
    return lineOfPoetry[0];
}
const poetryLines = [frontDoorResponse(`stands so high`), frontDoorResponse(`huge hooves too`), frontDoorResponse(`impatiently waits for`), frontDoorResponse(`reins and harness`), frontDoorResponse(`eager to leave`),]
console.log(poetryLines)

function frontDoorPassword(uncapitalizedPassword) {
    return uncapitalizedPassword.toUpperCase();
}
console.log(`The password for the front door was ${frontDoorPassword(poetryLines[0]) + poetryLines[1] + poetryLines[2] + poetryLines[3] + poetryLines[4]}.`);