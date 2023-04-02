import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("https://nodejs-using-github.herokuapp.com/")
      .then(response => response.json())
      .then(data => {
        setMessage(data.message)
      })
      .catch(err => console.log(err))
  }, [])
  return <div className="App">{message ? message : "Loading.."}</div>
}

export default App
