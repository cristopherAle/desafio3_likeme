const express = require('express');

const router = express.Router();
const { getPosts, addPost, editPost, deletePost } = require("../consultas");

router.get('/', (req, res) => {
    res.send('Servidor Activo')
})



router.post("/posts", async(req, res) =>{
  try{
      const { titulo, img, descripcion, likes}= req.body
      const result = await addPost(titulo, img, descripcion, likes)
      res.send("Post agregado")
  }catch (error) {
    res.status(500).send(error);
  }

}) 


router.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/posts/like/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await editPost(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete ("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deletePost(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
