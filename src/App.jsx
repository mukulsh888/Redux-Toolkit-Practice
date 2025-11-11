import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {
  

  return (
   <>
   <h1 className='text-4xl font-bold text-center'>Learn about Redux Toolkit</h1>
   <AddTodo/>
   <Todos/>

   </>
  )
}

export default App
