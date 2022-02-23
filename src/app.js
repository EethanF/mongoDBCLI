const { Db } = require("mongodb");
const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const Movie = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add){
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.optInfo);
            console.log(await movie.add(collection)); //add should be taking collection
            //take movie info, add it to the mongo db database and console.log a success message.
        }
        else if (yargsObj.list){
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.optInfo);
            console.log(await movie.list(collection));
            //list all movies in database
        }
        else if (yargsObj.updateActor){
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.optInfo);
            console.log(await movie.updateActor(collection));
        }
        else if (yargsObj.updateInfo){
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.optInfo);
            console.log(await movie.updateInfo(collection));
        }
        else if(yargsObj.delete){
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.optInfo);
            console.log(await movie.delete(collection));
        }
        else if (yargsObj.searchTitle){
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.optInfo);
            console.log(await movie.searchTitle(collection));
        }
        else if (yargsObj.searchActor){
            const movie = new Movie(yargsObj.title, yargsObj.actor, yargsObj.optInfo);
            console.log(await movie.searchActor(collection));
        }
        else {
            console.log("incorrect command");
        }
        await client.close();
    } catch (error) {
        console.log(error)
        await client.close();
    }
};

app(yargs.argv);

//crud - create, read, operate and delete