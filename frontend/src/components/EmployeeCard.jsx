import React from 'react'

function EmployeeCard({photo,name,job,department,email}) {
  return (
    <div>
      <img src={photo} alt="bla" />
      <h1>{name}</h1>
      <h2>{job}</h2>
      <p>{department}</p>
      <p>{email}</p>

      
    </div>
  )
}

export default EmployeeCard
