class Movie {
    constructor(title, actor ="not specified", optInfo = "None"){
        this.title = title;
        this.actor = actor;
        this.optInfo = optInfo;
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
    async updateActor(collection) {
        const filter = {title: `${this.title}`};
        const updateActor = {
            $set: { //set this key to the value I give
              actor: `${this.actor}`,
            },
          };
        return await collection.updateOne(filter, updateActor);
    }
    async updateInfo(collection) {
        //filter is title as I will be searching by title
        const filter = {title: `${this.title}`};
        const updateInfo = {
            $set: { //set this key to the value I give
              optInfo: `${this.optInfo}`,
            },
          };
        return await collection.updateOne(filter, updateInfo);
    }
    async delete(collection){
        //delete using title: --delete --title"insert title here"
        const filter = {title: `${this.title}`};
        return await collection.deleteOne(filter);
    }
    async searchTitle(collection){
        //search using title: --searchTitle --title "insert title here"
        const filter = {title: `${this.title}`};
        return await collection.findOne(filter)
    }
    async searchActor(collection){
        //search using actor: --searchActor --actor "insert actor name here"
        const filter = {actor: `${this.actor}`};
        return await collection.findOne(filter)
    }
};

module.exports = Movie;