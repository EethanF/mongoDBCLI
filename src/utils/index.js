class Movie {
    constructor(title, actor ="not specified"){
        this.title = title;
        this.actor = actor;
    }
    async add(collection) { //have to pass collection if i want to add something
        await collection.insertOne(this);
        return "Success";
        //insert information to database
    }
    async list(collection) {
        return await collection.find().toArray();
        //list all movies in the db
    }
    async update(collection) {
        const filter = {title: `${this.title}`};
        const updateDoc = {
            $set: { //set this key to the value I give
              actor: `${this.actor}`
            },
          };
        return await collection.updateOne(filter, updateDoc);
    }
    async delete(collection){
        const filter = {title: `${this.title}`};
        return await collection.deleteOne(filter);
    }
    async searchTitle(collection){
        const filter = {title: `${this.title}`};
        return await collection.findOne(filter)
    }
    async searchActor(collection){
        const filter = {actor: `${this.actor}`};
        return await collection.findOne(filter)
    }
};

module.exports = Movie;