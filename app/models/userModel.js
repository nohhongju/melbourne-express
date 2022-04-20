
module.exports = mongoose => mongoose.model('user',
        mongoose.Schema(
            {
                userid: String,
                password: String,
                email: String,
                name: String,
                phone: String,
                birth: String,
                address: String
            }, {timestamps: true}
        )
    )

