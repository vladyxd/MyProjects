let fString = "";
function fetchNumber(number){
if(!number) number = this;
let string;
if(number / 1000000000000 < 1){
if(number / 1000000000 < 1){
if(number / 1000000 < 1){if(number / 1000 > 1) string = `${number / 1000}K`; else return string = number.toString()}
else string = `${number / 1000000}M`}
else string = `${number/1000000000}B`}
else string = `${number/1000000000000}Q`
return string;
}
Number.prototype.vlady = fetchNumber;
// console.log(Number(1200000).vlady()) -> 1.2M
