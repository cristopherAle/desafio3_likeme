require('dotenv').config()

const { pool} = require('./conexion')


const getPosts = async ()=>{
    const result = await pool.query('SELECT * FROM posts')
    console.log(result.rows)
    return result.rows
}

const agregarPost = async (titulo, img, descripcion, likes) =>{
    const consulta = "INSERT INTO posts values(DEFAULT, $1, $2, $3, $4)"
    const values = [titulo, img, descripcion, likes]
    const result = await pool.query(consulta, values)
    console.log("Post Agregado")
    return result 
}

module.exports={
    getPosts,
    agregarPost
}
