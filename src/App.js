import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './components/Profile'

const App = () => {
let [items, setItems] = useState([])
const [item, setItem] = useState()
const [click, setClick] = useState(false)

  const getItems = () => {
    axios.get('http://localhost:8000/api/items').then((response) => {
      setItems(response.data)
    })
  }

  const handleCreate = (item) => {
    axios.post('http://localhost:8000/api/items', item).then((response) => {
      console.log(response)
      getItems()
    })
  }

  const handleDelete = (event) => {
    axios.delete(`http://localhost:8000/api/items/${event.target.value}`).then((response) => {
        getItems()
    })
  }
  
  const handleUpdate = (item) => {
    console.log(item)
    axios.put('http://localhost:8000/api/items/'+ item.id, item).then((reponse) => {
      getItems()
    })
  }
  const handleChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
  event.preventDefault()
  handleCreate(item)
}

  const showProfile = () => {
    setClick(true)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <h1>App</h1>
      <div className='items'>
        <button onClick={showProfile}>Profile Page</button>
        {click ? <Profile items={items} handleCreate={handleCreate} handleDelete={handleDelete} handleUpdate={handleUpdate} handleChange={handleChange} handleSubmit={handleSubmit} item={item} /> : null}
      </div>
    </>
  )
}
export default App;
