import publish from '../Models/PublishModel.js';

export const getAllPublish = async (req, res) => {
  try {
    const publishes = await publish.findAll({});
    const publishWithHtml = publishes.map((pub) => {
      return {
        ...pub.toJSON(),
        content: convertQuillToHtml(pub.content),
      };
    });
    res.json(publishWithHtml); // Enviar las publicaciones con contenido HTML
  } catch (e) {
    res.json({ message: e.message });
  }
};

// Función para convertir el contenido de Quill (JSON) a HTML
const convertQuillToHtml = (content) => {
  let htmlContent = '';

  if (content && content.ops) {
    content.ops.forEach((op) => {
      if (op.insert) {
        if (typeof op.insert === 'string') {
          htmlContent += op.insert; // Añadir texto plano
        } else if (op.insert.image) {
          htmlContent += `<img src="${op.insert.image}" alt="image" />`; // Añadir imagen en base64
        }
      }
    });
  }

  return htmlContent; // Devolver el contenido en formato HTML
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
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }
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



