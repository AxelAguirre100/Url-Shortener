import mongoose, { mongo } from "mongoose";
import shortid from "shortid";

const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: {
        type: Number,
        require: true,
        default: 0
    }
})

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema)

export default ShortUrl;