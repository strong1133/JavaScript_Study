const bcrypt = require('bcrypt');

const PW = 'jd2022';
const encryptedPW = bcrypt.hashSync(PW, 10); //비밀번호 암호화

console.log(encryptedPW)