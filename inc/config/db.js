const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected!');
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = {connectDB}