function problem3(number) {
  var answer = 0;
  for(let i = 1; i <= number ; i++){
    let numberArr = [...String(i)];
    numberArr.forEach((num) => {
      if(num === '3' || num === '6' || num ==='9') {
        answer++;
      }
    })
  }
  return answer;
}

module.exports = problem3;
