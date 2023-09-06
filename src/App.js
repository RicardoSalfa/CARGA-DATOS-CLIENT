import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import Menu from './components/Navbar'
import {Container} from '@mui/material'


function App() {
return (
<BrowserRouter>
    <Menu />

    <Container>
    <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/tasks/new' element={<TaskForm/>}/>
        {/* FALTA LA RUTA EDITAR */}
      </Routes>

  </Container>

</BrowserRouter>
  );
}

export default App;
