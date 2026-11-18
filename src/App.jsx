import { Outlet, useNavigate } from "react-router"
import { navigationLinks } from "./router";


function App () {

  const nav = useNavigate()

  function navigate (e) {
    e.preventDefault();
    
    nav(navigationLinks.about)

  }

  return (

    <div>
      <header>
        <button onClick={() => nav(navigationLinks.home)}>
          Home
        </button>
        <button onClick={() => nav(navigationLinks.about)}>
          About
        </button>

        <a href="/" onClick={navigate} target="blank">123</a>
      </header>


      <Outlet />

      <footer>
        
      </footer>


    </div>

  )
}

export default App