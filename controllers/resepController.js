import Resep from "../models/resep.js";

// get resep
export const getResep = async (req, res) => {
    try {
        const data = await Resep.find()
        res.json(data)
    } catch (error) {
        res.json({message: error.message});
    }
}


// get resep by id
export const getResepById = async (req, res) => {
    try {
        const data = await Resep.findById(req.params.id);
        res.status(200).json(data)
    } catch (error) {
        res.json({message: error.message});
    }
}

// save resep
export const saveResep = async (req, res) => {
    const resep = new Resep(req.body);
    try {
        const savedata = await resep.save()
        res.json(savedata)
    } catch (error) {
        res.json({message: error.message});
    }
}


// update resep
export const updateResep = async (req, res) => {
    try {
        const updatedData = await Resep.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedData);
    } catch (error) {
        res.json({message: error.message});
    }
}


// delete
export const deleteResep = async (req, res) => {
    try {
        const deleteData = await Resep.deleteOne({_id: req.params.id});
        res.status(200).json(deleteData);
    } catch (error) {
        res.json({message: error.message});
    }
}