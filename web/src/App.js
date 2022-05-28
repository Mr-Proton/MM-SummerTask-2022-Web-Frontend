import Nav from "./Components/topNav";
import './index.css'
import MakeCard from './Components/makeCard'
import data from './Components/data'

function App() {

  var cards=data.map(items =>(
    <MakeCard {...items} />
  ))

  return (
    <>
    <Nav />
    <div className="main-body">
      <div className="cards">
        {cards}
      </div>
    </div>
    </>
  )
}

export default App;
