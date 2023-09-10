import { useEffect, useState } from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom';


export default function UserList() {
     const navigate = useNavigate();

    const [tasks, setTasks] = useState([])
    // funcion que pide los datos al backend
    const loadUser = async () => {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        setTasks(data)
    }
 
    const handleDelete = async (id) => {
        try {
          await fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
          })
          //const data = await rest.json();
          //console.log(res)
         setTasks( tasks.filter(task => task.id !== id));
          
        } catch (error) {
          console.log(error);
        }
        };

    useEffect(() => {
        loadUser()
    }, [])


    return (
        <>
            <h1> Admin-Usuarios </h1>
            {
            tasks.map((task) =>(
               <Card style = {{marginBottom: ".5rem", backgroundColor:'#1e272e'}} key={task.id} > 
                <CardContent style={{display:"flex", justifyContent:"space-between"}}>
                  <div style={{color: "white"}}>
                    <Typography>{task.nombre}</Typography>
                    <Typography>{task.correo}</Typography>
                    <Typography>{task.id_org}</Typography>               
                    
                  </div>  

                <div>
                <Button variant='contained' color='inherit' onClick={()=> navigate(`/users/${task.id}/edit`)}>
                    EDITAR
                </Button> 
                <Button variant='contained' color='warning' onClick={()=> handleDelete(task.id)} style={{marginLeft: ".5rem"}}>
                    BORRAR
                </Button>   

                </div>


                </CardContent>
               </Card> 
            ))

            }

        </>
    )

}