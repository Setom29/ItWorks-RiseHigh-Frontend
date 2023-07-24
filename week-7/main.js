class Image{
    constructor(url, width, height, db){
        this.url = url
        this.width = width || 150 
        this.height = height || 150    
        this.db = db
    }

    save(){
        this.db.save(JSON.stringify(this))
    }
}

class SQL_DB{
    constructor(){}
    save(str){
        //wicked code that saves to SQL database
    }
}

class Mongo_DB{
    constructor(){}
    save(str){
        //wicked code that saves to Mongo database
    }
}

const sqlDB = new SQL_DB()
const mongoDB = new Mongo_DB()
const pic = new Image("https://a3.amazon.com/93112/ist.png", null, null, sqlDB)

pic.save()