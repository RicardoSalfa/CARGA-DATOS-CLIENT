import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'


export default function Natbar() {

  const navigate = useNavigate()

  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position='Static' color = 'transparent'>
          <Container>
            <Toolbar>
              <Typography variant='h6' sx={{flexGrow:1}}>
                  <Link to="/" style={{textDecoration:"none", color:"#eee"}}>BACKEND FORESTAL</Link>
              </Typography>
            
            <Button variant='contained' color='primary' onClick={( )=> navigate('/tasks/new')}>
              Crear Organización

            </Button>
            <Button variant='contained' color='primary' onClick={( )=> navigate('/users/new')} style={{marginLeft:".5rem"}}>
              Crear usuarios

            </Button>
            <Button variant='contained' color='primary' onClick={( )=> navigate('/users')} style={{marginLeft:".5rem"}}>
              Admin-Usuarios

            </Button>
            <Button variant='contained' color='primary' onClick={( )=> navigate('/carga')} style={{marginLeft:".5rem"}}>
              Carga Datos

            </Button>
            </Toolbar>
            
          </Container>  
          
        </AppBar>

    </Box>

  )
}
