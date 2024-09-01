const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://nilupradhan141:nilupradhan@cluster0.9uz5m1o.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';
const mongoURI = 'mongodb://nilupradhan141:nilupradhan@ac-lgctwbi-shard-00-00.9uz5m1o.mongodb.net:27017,ac-lgctwbi-shard-00-01.9uz5m1o.mongodb.net:27017,ac-lgctwbi-shard-00-02.9uz5m1o.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-11md7a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) {
            console.log("---", err);
        } else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {
                    if (err) {
                        console.log(err);
                    } else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
                // if(err){
                //     console.log(err);
                // }else{
                // console.log(data);

                // global.food_items = data;
                // console.log(global.food_items);
                // }
            })
        }
    });
}
mongoose.set('strictQuery', true);

module.exports = mongoDB;




