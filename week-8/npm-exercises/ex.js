var validator = require('validator');
const { faker } = require('@faker-js/faker');   

makeHuman = num => {
    res = []
    for (let i = 0; i < num; i++){
        res.push(
            {   
                username: faker.internet.userName(),
                avatar: faker.image.avatar(),
                company: faker.company.name()
            })
    }
    return res;
  } 

const validate = ()=> {
    let isEmail = validator.isEmail("shoobert@dylan")
    let isMobilePhone = validator.isMobilePhone("786-329-9958", "en-US")

    let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
    let text = "I'M SO EXCITED!!!~!"
    let removeChars = validator.blacklist(text, blacklist)

    return [isEmail, isMobilePhone, removeChars]
}

console.log(validate())
console.log(makeHuman(2))