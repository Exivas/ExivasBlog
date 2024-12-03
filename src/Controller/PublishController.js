import publish from '../Models/PublishModel.js';

export const getAllPublish = async (req, res) => {
    try {
        const publishs = await publish.findAll({});
        res.json(publishs);
    } catch (e) {
        res.json({ message: e.message });
    }
};

export const getPublishById = async (req, res) => {
    try {
        const id = req.params.id;
        const publishs = await publish.findByPk(id);
        res.json(publishs);
    } catch (e) {
        res.json({ message: e.message });
    }
};

export const createPublish = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPublish = await publish.create({ title, content });
        res.status(201).json({ message: 'Publish created successfully', data: newPublish });
    } catch (error) {
        res.status(500).json({ message: 'Error creating publish', error: error.message });
    }
};

export const updatePublish = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, content } = req.body;
        const publishs = await publish.findByPk(id);
        publishs.title = title;
        publishs.content = content;
        await publishs.save();
        res.json({ message: "Publish updated successfully" });
    } catch (e) {
        res.json({ message: e.message });
    }
};

export const deletePublish = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPublish = await publish.destroy({ where: { id } });
        res.json({ message: "Publish deleted successfully" });
    } catch (e) {
        res.json({ message: e.message });
    }
};  



