import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  //handleSubmit
} from '@mui/material';
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';


export default function TaskForm() {

      const [task, setTask] = useState({
        nombre: "",
        descripcion: "",
        direccion: "",
        contactos: "",
        correo: "",
      });
      const [loading,setLoading] = useState(false)
      const [editing, setEditing] = useState(false)
      const navigate = useNavigate()
      const params = useParams();


      const handleSubmit = async (e) => {
           e.preventDefault();
          // console.log(task);
          setLoading(true);

        if (editing){
          const response = await fetch(`http://localhost:3000/tasks/${params.id}`,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json",
            },
            body:JSON.stringify(task),
          });
            const data = await response.json();
            console.log(data);
        } else {

          await fetch('http://localhost:3000/tasks',{
            method: "POST",
            body: JSON.stringify(task),
            headers:{
              "Content-Type" : "application/json"
            }
           });

        } 

         setLoading(false) 
         navigate('/')  
          };

const handleChange = e => {
  setTask({...task, [e.target.name]: e.target.value});
          };

const loadTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`)
    const data = await res.json()
    //console.log(data)
    setTask({nombre: data.nombre, descripcion: data.descripcion, direccion: data.direccion, contactos: data.contactos, correo:data.correo})
    setEditing(true)
  };

useEffect(()=> {
  if (params.id){
    loadTask(params.id);
  }
},[params.id])          
            

return (
    <Grid container direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={7}> 
          <Card sx={{mt:10}} style={{
            //backgroundColor:'#1e272e',
            backgroundColor:'#f2f4f6',
            padding: '1rem'
            }}>
             <Typography variant='3' textAlign='center' color='#0a2a42'>
             {editing ? "EDITAR ORGANIZACIÓN": "CREAR ORGANIZACIÓN"}
             </Typography>
              
               <CardContent>
                  <form onSubmit={handleSubmit}>
                   <TextField
                      variant='filled'
                      label='Nombre'
                      sx={{
                        display:'block',
                        margin:'.5rem 0',
                      }}
                      name = "nombre"
                      value={task.nombre}
                      onChange={handleChange}
                      inputProps={{style: {color:'black'}}}
                      inputLabelProps={{style: {color:'white'}}}
                    />
                    <TextField
                      variant='filled'
                      label='Descripcion'
                      sx={{
                        display:'block',
                        margin:'.5rem 0',
                      }}
                      name = "descripcion"
                      value={task.descripcion}
                      onChange={handleChange}
                      inputProps={{style: {color:"black"}}}
                      inputLabelProps={{style: {color:"white"}}}
                   />
                     <TextField
                      variant='filled'
                      label='Dirección'
                      sx={{
                        display:'block',
                        margin:'.5rem 0',
                      }}
                      name = "direccion"
                      value={task.direccion}
                      onChange={handleChange}
                      inputProps={{style: {color:"black"}}}
                      inputLabelProps={{style: {color:"white"}}}
                   />
                      <TextField
                      variant='filled'
                      label='Contacto'
                      sx={{
                        display:'block',
                        margin:'.5rem 0'
                      }}
                      name = "contactos"
                      value={task.contactos}
                      onChange={handleChange}
                      inputProps={{style: {color:"black"}}}
                      inputLabelProps={{style: {color:"white"}}}
                   />
                      <TextField
                      variant='filled'
                      label='Correo'
                      sx={{
                        display:'block',
                        margin:'.5rem 0'
                      }}
                      name = "correo"
                      value={task.correo}
                      onChange={handleChange}
                      inputProps={{style: {color:"black"}}}
                      inputLabelProps={{style: {color:"white"}}}
                   />
                  <Button 
                    variant='contained'
                    color='primary'
                    type='submit'
                    disabled={!task.nombre || !task.descripcion}
                  >
                    {loading ? (
                      <CircularProgress color='inherit' size={24}/>
                       ):(
                        "Guardar"
                        )}
                  </Button>

                  </form>

                 </CardContent>
          </Card>

        </Grid>

    </Grid>
  )
}

