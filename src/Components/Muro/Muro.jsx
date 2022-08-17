import React from 'react'
import Publicacion from '../Post/Post'

export default function Muro() {
    const posts=
        [{
            nombre:"Mario",
            apellido: "Melendez P.",
            comentario:"Hey, espero que nos veamos pronto o que que por lo menos nos sentemos a conversar"
        }, {
            nombre:"Shayen",
            apellido: "Arno",
            comentario:"Bendecida"
        },
        {
            nombre:"Paiquer",
            apellido: "Ortiz",
            comentario:"Vamos para La Romana"
        }, 
        {
            nombre:"Kimberly",
            apellido: "De leon",
            comentario:"Yei"
        },
        {
            nombre:"Alexis",
            apellido: "Mendez",
            comentario:"siii"
        }
        ]
    
    return (
        <div  className="muro">
            
        {posts?.map((Post) => (
        <Publicacion
          post={Post}
          key={Post.comentario + Math.random(1000)}
        />
      ))}
        </div>
    )
}
