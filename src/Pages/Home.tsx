import Imagen from "../assets/fondoRick&Morty.jpg"

const Home = () => {
  return (
    <div>
      <img src={Imagen} alt="Rick & Morty" style={{width: "100%", height: "100%"}}/>
    </div>
  )
}

export default Home