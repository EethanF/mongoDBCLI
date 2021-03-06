class Movie {
    constructor(title, actor ="not specified", rating ="none as of yet", optInfo ="None"){
        this.title = title;
        this.actor = actor;
        this.optInfo = optInfo;
        this.rating = rating;
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
        //searching by title then updating actor --updateActor --title "title of movie" --actor"what actor you want to update it to"
        const filter = {title: `${this.title}`};
        const updateActor = {
            $set: { //set this key to the value I give
              actor: `${this.actor}`,
            },
          };
        return await collection.updateOne(filter, updateActor); //apply filter then what you want to update the key to
    }
    async updateInfo(collection) {
        //filter is title as I will be searching by title
        const filter = {title: `${this.title}`};
        const updateInfo = {
            $set: { //set this key to the value I give
              optInfo: `${this.optInfo}`,
            },
          };
        return await collection.updateOne(filter, updateInfo); //can do toArray() to view in terminal
    }                                                          //or just view list --list
    async delete(collection){
        //delete using title: --delete --title"insert title here"
        const filter = {title: `${this.title}`};
        await collection.deleteOne(filter);
        return "Success";
    }
    async searchTitle(collection){
        //search using title: --searchTitle --title "insert title here"
        const filter = {title: `${this.title}`};
        return await collection.findOne(filter).toArray();
    }
    async searchActor(collection){
        //search using actor: --searchActor --actor "insert actor name here"
        const filter = {actor: `${this.actor}`};
        return await collection.find(filter).toArray()
         //lists array of movies of specified actor- find movie of actor .toArray or error
    }
    async searchRating(collection){
        //search using rating: --searchRating --rating "insert rating here"
        const filter = {rating: `${this.rating}`};
        return await collection.find(filter).toArray(); //lists array of movies with this.rating
    }
};

module.exports = Movie;