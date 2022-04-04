const bcrypt = require('bcrypt');


const PW = 'fatospass11';
const encryptedPW = bcrypt.hashSync(PW, 10); //비밀번호 암호화
console.log("encryptedPW :: ", encryptedPW);  //=> true


bcrypt.compare(PW , '$2b$10$y/G.BZ/2DYmXy4Ueb0gOhuqDKRo4ZEyo44dx1UWyJtYmXVhJUIXRm', (err, same) => {
    console.log(same);  //=> true
  })


  //$2b$10$8lwW7ZQkV0IPIPHqcpRVsejbT9t2SEZR/3K3QV.DSQXv6y/b68f66