import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export default function UserForm() {

    const [task, setTask] = useState({
        id_org: "",
        nombre: "",
        correo: "",
        usuario: "",
        password: "",
    });
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const params = useParams();
    const [editing, setEditing] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(task);
        setLoading(true);

        if (editing) {
             await fetch(`http://localhost:3000/users/${params.id}`,{
                method:"PUT",
                headers:{
                  "Content-Type":"application/json",
                },
                body:JSON.stringify(task),
              });
        } else {
            await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    "Content-Type": "application/json",
                },

            })

        }
        setLoading(false);
        navigate('/');

    };

    const handleChange = e => {
        setTask({ ...task, [e.target.name]: e.target.value });

    }

    const loadTask = async (id) => {
        const res = await fetch(`http://localhost:3000/users/${id}`)
        const data = await res.json()
        //console.log(data)
        setTask({ id_org: data.id_org, nombre: data.nombre, correo: data.correo, usuario: data.usuario, password: data.password })
        setEditing(true)
    };


    useEffect(() => {
        if (params.id) {
            loadTask(params.id);
        }
    }, [params.id])


    return (

        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={7}>
                <Card
                    sx={{ mt: 7 }}
                    style={{ backgroundColor: '#1e272e' }}
                >
                    <Typography variant='1' textAlign='center' color={'white'}>
                        Crear Usuario
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                variant='filled'
                                label='ID Organización'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='id_org'
                                value={task.id_org}
                                onChange={handleChange}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}
                            />

                            <TextField
                                variant='filled'
                                label='Nombre'
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='nombre'
                                value={task.nombre}
                                onChange={handleChange}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}

                            />
                            <TextField
                                variant='filled'
                                label='Correo'
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='correo'
                                value={task.correo}
                                onChange={handleChange}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}

                            />

                            <TextField
                                variant='filled'
                                label='usuario'
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='usuario'
                                value={task.usuario}
                                onChange={handleChange}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}

                            />
                            <TextField
                                variant='filled'
                                label='password'
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='password'
                                value={task.password}
                                onChange={handleChange}
                                inputProps={{ style: { color: "white" } }}
                                InputLabelProps={{ style: { color: "white" } }}

                            />


                            <Button variant='contained' color='primary' type='submit' disabled={!task.id_org || !task.nombre}>
                                {loading ? (
                                    <CircularProgress color='inherit' size={24} />
                                ) : (
                                    "CREAR"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>

            </Grid>



        </Grid>

    )






}