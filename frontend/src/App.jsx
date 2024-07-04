import About from "./component/About"
import Contact from "./component/Contact"
import Navbar from "./component/Navbar"
import Profile from "./component/Profile"
import Skills from "./component/Skills"


function App() {

  return (
    <>
    <div className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500	w-screen h-screen">
      <Profile/>
      {/* <About/> */}
      {/* <Contact/> */}
      <Skills/>
      <Navbar/>
    </div>
    </>
  )
}

export default App
