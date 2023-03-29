const Thing = require("../model/stuff.model");
/*
 * ajouter des stuffs
 */
module.exports.addStuff = async (req, res, next) => {
  console.log(req.file);
  if (!req.body) {
    res.status(400).json({ message: "veillez entrer des données" });
  }
  try {
    const thing = new Thing({
      ...req.body,
    });
    thing
      .save()
      .then(() => res.status(200).json({ reponse: "donne bien envoyés" }))
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    res.status(400).json({ error: "une erreur est survenu" });
  }
};
/**
 *
 *obtenir tout les stuffs
 */
module.exports.getStuffs = async (req, res) => {
  try {
    const stuffs = await Thing.find();
    if (!stuffs) {
      res.status(400).json({ stuffs: [] });
    }
    res.status(200).json(stuffs);
  } catch (error) {
    res.status(400).json({ error });
  }
};
//supprimer un stuff
module.exports.deleteStuffs = async (req, res) => {
  try {
    const stuff = await Thing.findById(req.params.id);
    if (!stuff) {
      res.status(400).json({ message: "ce stuff n'existe pas" });
    }
    await stuff.remove();
    res.status(200).json({ message: "supprimé avec success" });
  } catch (error) {
    res.status(400).json({ error });
  }
};
//obtenir un stuff
module.exports.getStuff = async (req, res) => {
  const stuff = await Thing.findById(req.params.id);
  if (!stuff) {
    res.status(400).json({ message: "ce stuff n'existe pas" });
  }
  res.status(200).json(stuff);
};
//mettre a joour un stuff
module.exports.updateStuffs = async (req, res) => {
  try {
    const stuff = await Thing.findById(req.params.id);
    console.log(stuff);
    if (!stuff) {
      res.status(400).json({ message: "ce stuff n'existe pas" });
    }
    const updatedStuff = await Thing.findByIdAndUpdate(stuff, req.body, {
      new: true,
    });
    res.status(200).json(updatedStuff);
  } catch (error) {
    res.status(400).json({ error });
  }
};
