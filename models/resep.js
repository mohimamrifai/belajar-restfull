import mongoose from 'mongoose';


// membuat schema
const Resep = mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    asal: {
        type: String,
        required: true
    }
})

export default mongoose.model('Resep', Resep);