import { useEffect, useState } from "react"
import Details from "./Details"
const App = () => {
  const [userName,setUserName] = useState("agneay")
  const [userData,setUserData] = useState(null)
  async function getDetails(){
    const data =await fetch(`https://api.github.com/users/${userName}`)
    const ourData = await data.json()
    if(userData){
      setUserData(ourData)
    }
    console.log(ourData)
  }
  function handleSubmit(){
    getDetails()
    
  }
  useEffect(()=>{
    getDetails()
  },[userName,userData])
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="../public/github.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
      Github Profile Finder
    </a>
  </div>
</nav>
    <div className="spacer"></div>

<div className="container text-center search">
  <div className="row align-items-center">
    <div className="col-6">
      
    <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
  </div>

    </div>
    <div className="col">
      <button type="button" className="btn btn-success" onClick={handleSubmit}>Search</button>
    </div>
    
  </div>
</div>
<div className="spacer"></div>


  {userData !== null? <Details userData={userData}/>: null}
    </div>
  )
}

export default App