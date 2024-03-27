import UserProfile  from "./components/UserProfile/";
import './App.css'

const userDetailsList =[
  {
    uniqueNo:1,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Esther Howard",
  role:"Software Developer"
},
{
  uniqueNo:2,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
  name:"Floyd Miles",
  role:"Software Developer"
},
{
  uniqueKey:3,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
  name:"Jacab Jones",
  role:"Software Developer"
},
{
  uniqueNo:4,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
  name:"Devon Lanes",
  role:"Software Developer"
}
]
const App = () =>(
<div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem=>(
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
      ))}
    </ul>
  </div>
  )

export default App;