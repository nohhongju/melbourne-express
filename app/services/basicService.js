export default function BasicService(){
  const calcBmi = (payload) => {
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
  return{
    getBmi(req,_res){
      const {name, height, weight} = req.body
            console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            console.log(`이름 : ${name}`)
            console.log(`키 : ${height}`)
            console.log(`몸무게 : ${weight}`)
            const json = calcBmi({name, height, weight})
            console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
            return json
        
    }
  }
}

/** 
exports.getcalc = (req, res) => {
  const {num1, opcode, num2} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`첫번쨰 숫자 값 : ${num1}`)
  console.log(`연산자 값 : ${opcode}`)
  console.log(`두번째 숫자 값 : ${num2}`)
  const json = calc({num1, opcode, num2})
  console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
  res.status(200).json({'result':'ok'})
}*/