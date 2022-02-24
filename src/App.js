import { useState } from 'react'
import Navbar from './component/Navbar/Nav'
import Container from './component/Container/Container'
import SearchInput from './component/Search/Search'
import Info from './component/Info/Info'
import Todos from './component/Todos/Todos'
import Empty from './component/Empty/Empty'

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {title : "Susu Beruang", count : 1},
    {title : "Chitatos", count : 1},
    {title : "Teh botol sosro", count : 1},
  ])

  const handleSubmit = (e) => {
    // yaitu mencegah  before behavior dari submit berupa browser refresh
    e.preventDefault()

    if(!value){
      alert('Mohon,isi form dengan benar')
      return
    }
    // spread opearator todos
    const addedTodos = [...todos,{
      title: value,
      count : 1
    }]
    setTodos(addedTodos)
    setValue('')
  }

  const handeAdditionalCount = (index) => {
    // spread react hooks
    const newTodos = [...todos]
    newTodos[index].count = newTodos[index].count + 1
    setTodos(newTodos)
  }
  const handleSubtractionCount = (index) => {
    const newTodos = [...todos]
    if(newTodos[index].count > 0){
      // selama list form countnya lebih dari o maka akan tetap ada
      newTodos[index].count = newTodos[index].count - 1
    }else{
      // dan jika list form countnya dibawah 0 makan akan dihapus index array
      newTodos.splice(index,1)
    }
    setTodos(newTodos)
  }
  const getTotalCounts = () => {
    // ada dua callbaks function di reduce
    // paramater pertama adalah sebuah callbacs funtion yaitu total dan num

    // paramater kedua adalah starting value atau default value
    const totalCounts = todos.reduce((total,num) => {
      return total + num.count
    }, 0)
    return totalCounts
  }
  return (
    // react fragment adalah cara dimana kita dapat mewrap 2 elemen atau lebih tanpa harus membuat oute div lain
    <>
      <Navbar/>
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          // sebuah set value untuk mentrigger/memasukkan target value dari input/ teks yang kita tulis dalam form
          onChange={(e) => setValue(e.target.value)}
          value = {value}
        />
        <Info
          todosLength={todos.length}
          totalCounts ={getTotalCounts()}
          onDelete={() => setTodos([])}
        />
        {/* jika todos ini tidak kosong, maka dia akan membuat/merender sebuah elemen baru yang datanya 
          diambil dari array object todos
        */}
        {todos.length > 0 ? (
          <Todos 
            todos={todos}
            onSubtractionCount = {(index) => handleSubtractionCount(index)}
            onAdditionalCount = {(index) => handeAdditionalCount(index)}
          />
        ):(
          <Empty/>
        )}
      </Container>
    </>
  )
}

export default App;
