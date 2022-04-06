const {bmi} = require('../services/basic.service');
const {calc} = require('../services/basic.service');

exports.getbmi = (req, res) => {
    const {name, height, weight} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 값 : ${name}`)
    console.log(`키 값 : ${height}`)
    console.log(`몸무게 값 : ${weight}`)
    const json = bmi({name, height, weight})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.status(200).json({'result':'ok'})
  }

  exports.getcalc = (req, res) => {
    const {num1, opcode, num2} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`첫번쨰 숫자 값 : ${num1}`)
    console.log(`연산자 값 : ${opcode}`)
    console.log(`두번째 숫자 값 : ${num2}`)
    const json = calc({num1, opcode, num2})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.status(200).json({'result':'ok'})
  }