require('dotenv').config()

const { pool } = require('./conexion')


/* const getPosts = async ()=>{
    const result = await pool.query('SELECT * FROM posts')
    console.log(result.rows)
    return result.rows
} */

const getPosts = async () => {
  try {
    const posts = await pool.query("SELECT * FROM posts");
    return posts.rows;
  } catch (error) {
    console.log(error);
  }
};


const addPost = async (titulo, img, descripcion) => {

try {
    const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)';
    const values = [titulo, img, descripcion, 0];   
    const result = await pool.query(consulta, values);
    console.log("Post agregado");
    return result;
  } catch (error) {
    console.log(error);
  }
}; 




/* const addPost = async (titulo, img, descripcion) =>{
    const consulta = "INSERT INTO posts values(DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, img, descripcion, 0]
    const result = await pool.query(consulta, values)
    console.log("Post Agregado")
    return result 
} 
 */
const editPost = async (id) => {
    try {
      const query =
        "UPDATE posts SET likes = likes + 1 WHERE id = $1";
      const values = [id];
      const resultado = await pool.query(query, values);
      console.log("Like agregado");
      return resultado;
    } catch (error) {
      console.log(error);
    }
  };
  
  const deletePost = async (id) => {
    try {
      const query = "DELETE FROM posts WHERE id = $1";
      const value = [id];
      const result = await pool.query(query, value);
      console.log("Post eliminado")
    } catch (error) {
      console.log(error);
    }
  };


module.exports={
    getPosts,
    addPost,
    editPost,
    deletePost 
}


//alter table posts alter column titulo type varchar


/* const like = async (id) => {
    try{
        const consulta = "UPDATE posts set likes = likes + 1 where id = $1"
        const values = [id]
        const {rows} = await pool.query (consulta, values)
        return rows
    }
    catch (e) {
        console.log(e)
      }
}

const eliminarPost  = async (id) => {
    const consulta = "Delete from posts where id = $1"
    const values = [id]
    const result = await pool.query(consulta, values)
    return result.rows
}
 */