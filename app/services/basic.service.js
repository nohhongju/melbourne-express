exports.bmi = (payload) => {
    const {name, height, weight} = payload
    
    let _height=Number(height);
    let _weight=Number(weight);
  
    let bmi = _weight*10000/Math.pow(_height,2);
    let output = Math.round(bmi*100)/100;
    var result = {name, height, weight}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if (output<18.5)
      result.bmi = "저체중";
    if (output>=18.5  && output<=25)
      result.bmi = "정상";
    if (output>=25 && output<=30)
      result.bmi = "과체중";
    if (output>30)
      result.bmi = "경도비만";
      console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
    return result
  }

  exports.calc = (payload) => {

    let _num1=Number(num1);
    let _num2=Number(num2);
  
    var result = {num1, opcode, num2}
    console.log(`계산중인 값들 : ${JSON.stringify(result)}`)
    if (opcode == '+')
      result.calc = _num1 + _num2
    if (opcode == '-')
      result.calc = _num1 - _num2
    if (opcode == '*')
      result.calc = _num1 * _num2
    if (opcode == '/')
      result.calc = _num1 / _num2
    if (opcode == '%')
      result.calc = _num1 % _num2
    console.log(`계산끝난 값들 : ${JSON.stringify(result)}`)
    return result
  }