import {BrowserRouter, Route, Routes} from 'react-router-dom'
import TaskList from './components/TaskList.js';
import TaskForm from './components/TaskForm.js';
import userForm from './components/userForm.js'
import Menu from './components/Navbar'
import {Container} from '@mui/material'
import UserForm from './components/userForm.js';
import UserList from './components/UserList.js';
import CargaForm from './components/CargaForm.js';


function App() {
return (
<BrowserRouter>
    <Menu />

    <Container>
    <Routes>
        <Route path='/' element={<TaskList/>}/>
        <Route path='/tasks/new' element={<TaskForm/>}/>
        <Route path='/tasks/:id/edit' element={<TaskForm/>}/>
        <Route path='/users/new' element={<UserForm/>}/>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/users/:id/edit' element={<UserForm/>}/>
        <Route path='/carga' element={<CargaForm/>}/>

        

      </Routes>

  </Container>

</BrowserRouter>
  );
}

export default App;
