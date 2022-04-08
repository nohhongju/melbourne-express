module.exports = mongoose => mongoose.model('board',
    mongoose.Schema(
        {
            passengerId : String,
            name : String,
            teamId : String,
            subject : String,
        }, {timestamps: true}
    )
)