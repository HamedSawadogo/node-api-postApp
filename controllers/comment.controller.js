const MessageModel = require("../model/comment.model");

const displayErrorMessage = (message, req) => {
  req.status(400).json({ error: message });
};

/**
 *
 *add
 */
module.exports.addComment = async (req, res, status = 400) => {
  const message = new MessageModel({ ...req.body });
  message
    .save()
    .then(() => res.status(200).json({ message: "commentaire crée" }))
    .catch((err) => res.status(400).json({ err }));
};
module.exports.getComments = async (req, res) => {
  const messages = MessageModel.find();
  messages
    .then((messages) => res.status(200).json({ messages }))
    .catch((error) => res.status(400).json({ error }));
};

//delete posted message
module.exports.deleteComment = async (req, res) => {
  if (!req.params.id) {
    displayErrorMessage(
      "veillez entrer l'indentifiant du produit a supprimer",
      req,
      500
    );
  }
  try {
    const message = await MessageModel.findById(req.params.id);
    await message.remove();
    res.status(200).json({ message: "message supprimé avec success" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
module.exports.updateComment = async (req, res) => {
  if (!req.params.id) {
    displayErrorMessage(
      "veillez entrer l'indentifiant du produit a supprimer",
      req,
      500
    );
  }
  try {
    const message = MessageModel.findById(req.params.id);
    const messageUpdated = await MessageModel.findByIdAndUpdate(
      message,
      req.body,
      {
        new: true,
      }
    );
    res.status(400).json({ message: messageUpdated });
  } catch (error) {}
};
module.exports.getComment = async (req, res) => {
  if (!req.params.id) {
    displayErrorMessage(
      "veillez entrer l'indentifiant du produit a supprimer",
      req,
      500
    );
  }
  const message = await MessageModel.findById(req.params.id);
  console.log(message);
  if (!message) {
    res.status(400).json({ message: "ce message n'existe pas" });
  }
  res.status(200).json({ message });
};
