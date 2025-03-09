
import './App.css'
import EmployeeCard from './components/EmployeeCard'

function App() {
  const employee=[
    {
      photo:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
      name:'rajesh',
      job:'receptionist',
      department:'technical',
      email:'rajesh@gmail.com',
    },
    {photo:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
      name:'rakesh',
      job:'receptionist',
      department:'technical',
      email:'rakesh@gmail.com',},
    {photo:'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
      name:'rajesh',
      job:'receptionist',
      department:'technical',
      email:'rajesh@gmail.com',},
  ]
  return (
    <>
    <h1>Employee details</h1>
    {employee.map((data)=>(
      <EmployeeCard photo={data.photo} name={data.name} job={data.job} department={data.department} email={data.email}/>


    ))}

    
    </>
  )
}

export default App
