import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './components/Profile'
import Search from './components/Search';
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
    <div class='container'>
      {home ? (
        <>
          <div class='swiftshop'>
            <h1 onClick={homeToggle}>SwiftShop</h1>
          </div>
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
          <div class='swiftshop'>
            <h1 onClick={homeToggle}>SwiftShop</h1>
          </div>
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
    </div>
  )
}
export default App;
