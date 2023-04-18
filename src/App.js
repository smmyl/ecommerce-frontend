import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Profile from './components/Profile'
import About from './components/About';
import HomePage from './components/HomePage'
import Contact from './components/Contact';
const App = () => {
  
  const [items, setItems] = useState([])
  const [home, setHome] = useState(true)
  const [profile, setProfile] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)

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
    setContact(false)
  }
  const profileToggle = () => {
    setHome(false)
    setProfile(true)
    setAbout(false)
    setContact(false)
  }

  const aboutToggle = () => {
    setAbout(true)
    setHome(false)
    setProfile(false)
    setContact(false)
  }

  const contactToggle = () => {
    setAbout(false)
    setHome(false)
    setProfile(false)
    setContact(true)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
     <div className='container'>
     <div class='swiftshop'>
        <h1>SwiftShop</h1>
      </div>
      {home ? (
        <>
          <HomePage
            items={items}
            homeToggle={homeToggle}
            profileToggle={profileToggle}
            aboutToggle={aboutToggle}
            contactToggle={contactToggle}
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
            contactToggle={contactToggle}
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
          contactToggle={contactToggle}
          />
        </>
      ) : (
        <>
        </>
      )}
      {contact ? (
        <>
          <Contact 
          aboutToggle={aboutToggle}
          homeToggle={homeToggle}
          profileToggle={profileToggle}
          contactToggle={contactToggle}
          />
        </>
      ) : (
        <>
        </>
      )}
      </div>
    </>
  )
}

export default App;
