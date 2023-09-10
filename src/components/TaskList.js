import {useEffect, useState} from 'react'
import {Button, Card, CardContent, Typography} from '@mui/material'
import {useNavigate} from 'react-router-dom'

export default function TaskList() {

const [tasks,setTasks] = useState([])  
const navigate = useNavigate()

  const loadTasks = async () => {
  const response = await fetch('http://localhost:3000/tasks')
  const data = await response.json();
  console.log(data);
  setTasks(data);
};

const handleDelete = async (id) => {
try {
  await fetch(`http://localhost:3000/tasks/${id}`, {
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
  loadTasks()

 },[])

  return (
    <>
     <h1>Organizaciones</h1>
        {tasks.map((task) => (
          <Card style ={{
            marginBottom:".7rem",
            backgroundColor: '#1e272e'
          }}
          key={task.id}
          >
            <CardContent style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{color:'whitesmoke'}}>
              <Typography>{task.nombre}</Typography>
              <Typography>{task.descripcion}</Typography>
              </div>
              <div>
              <Button variant='contained' color='inherit' onClick={()=> navigate(`/tasks/${task.id}/edit`)}>
                EDITAR
              </Button>
              <Button variant='contained' color='warning' onClick={()=> handleDelete(task.id)} style={{marginLeft:".5rem"}}>
                ELIMINAR
              </Button>

              </div>

            </CardContent>
          </Card>


        ))}

    </>
  )
}
