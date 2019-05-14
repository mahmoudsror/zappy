const path = require('path');
const bcrypt = require('bcrypt');
const Models =require(path.resolve('models','index.js'));
module.exports={
  SetUp:done=>{
    Models.users.create({
      first_name:'TestFirstName',
      last_name: 'TestLastName',
      email:'mahmoudsror@gmail.com',
      country_code: 'EG',
      phone_number: '+201021299954',
      gender:'male',
      birthdate: '1993-06-29',
      password:bcrypt.hashSync('123456', 10),
      avatar: 'logo.png'
      }).then((user,err)=>{
        if(err){
          console.log(err)
          
        }
        done()
      })
  },
  tearDown:done=>{
    Models.users.destroy({
      where: {},
      truncate: true
    }).then(user=>{
      done()
    })
  }
}