const  score = (rolls) => {
    let len = rolls.length
    let index=0;
    let result =0,counter=0;
    let arr = []
    while(index<len && counter<10) {
        if(rolls[index]<10 && (rolls[index]+rolls[index+1])!=10) {
            result += rolls[index]+rolls[index+1];
            counter+=1;
            // arr.push([rolls[index],rolls[index+1]])
        }
        else if(rolls[index]+rolls[index+1]==10) {
            result += rolls[index]+rolls[index+1]+rolls[index+2];
            counter+=1;
        }
        else {
            if(rolls[index]==10) {
            result+= rolls[index]+rolls[index+1]+rolls[index+2];
            counter+=1;
            }
        }
        index+=2;
    }
return result;
}

// console.log(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]));
// console.log(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]));
// console.log(score([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// console.log(score([8, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

module.exports = {
    score:score
}
