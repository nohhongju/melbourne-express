export default function BoardModel(mongoose){
    const boardSchema = mongoose.Schema(
            {
                title : String,
                name : String,
                team : String,
                subject : String,
            }, {timestamps: true}
        )
            return mongoose.model('board', boardSchema)
}