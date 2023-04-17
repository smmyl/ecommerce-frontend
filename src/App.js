import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './components/Profile'
import About from './components/About';
import HomePage from './components/HomePage'
const App = () => {
  
  const [items, setItems] = useState([])
  const [home, setHome] = useState(true)
  const [profile, setProfile] = useState(false)
  const [about, setAbout] = useState(false)

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
  
  const homeToggle = () => {
    setHome(true)
    setProfile(false)
    setAbout(false)
  }
  const profileToggle = () => {
    setHome(false)
    setProfile(true)
    setAbout(false)
  }

  const aboutToggle = () => {
    setAbout(true)
    setHome(false)
    setProfile(false)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      <h1 id='logo'>SwiftShop</h1>
      {home ? (
        <>
          <HomePage
            items={items}
            homeToggle={homeToggle}
            profileToggle={profileToggle}
            aboutToggle={aboutToggle}
          />
        </>
      ) : (
        <>
        </>
      )}
      {profile ? (
        <>
          <Profile 
            items={items}
            homeToggle={homeToggle}
            profileToggle={profileToggle}
            aboutToggle={aboutToggle}
            handleCreate={handleCreate}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <>
        </>
      )}

      {about ? (
        <>
          <About 
          aboutToggle={aboutToggle}
          homeToggle={homeToggle}
          profileToggle={profileToggle}
          />
        </>
      ) : (
        <>
        </>
      )}

      {/* <Add handleCreate={handleCreate}/> */}
      {/* <div className='items'>
        {items.map((item) => {
          return (
            <div className='item' key={item.id}>
              <img src = {item.image}></img>
              <h3>Name: {item.name}</h3>
              <h4>Price: {item.price}</h4>
              <h4>Gender: {item.gender}</h4>
              <h4>Size: {item.clothing_size}</h4>
              <p>Description: {item.description}</p>
              <Edit handleDelete={handleDelete} handleUpdate={handleUpdate} item={item}/>
            </div>
          )
        })}
      </div> */}
    </>
  )
}
export default App;
