
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function DisplayUsers() {
    const [users, setUsers]= useState([{
      "Name": "Francene Rizzello",
      "Email": "frizzello0@un.org",
      "Course": "Business Development",
      "Phone": "478-921-4318"
    }, {
      "Name": "Camella Mottram",
      "Email": "cmottram1@oaic.gov.au",
      "Course": "Product Management",
      "Phone": "979-245-5894"
    }, {
      "Name": "Shep Hove",
      "Email": "shove2@accuweather.com",
      "Course": "Product Management",
      "Phone": "652-412-1365"
    }, {
      "Name": "Andria Grinsdale",
      "Email": "agrinsdale3@japanpost.jp",
      "Course": "Sales",
      "Phone": "336-844-3498"
    }, {
      "Name": "Dario Larive",
      "Email": "dlarive4@theatlantic.com",
      "Course": "Services",
      "Phone": "213-969-7148"
    }, {
      "Name": "Sigrid Maxfield",
      "Email": "smaxfield5@google.co.jp",
      "Course": "Support",
      "Phone": "568-472-6877"
    }, {
      "Name": "Lamar Licciardi",
      "Email": "llicciardi6@dmoz.org",
      "Course": "Sales",
      "Phone": "687-868-4014"
    }, {
      "Name": "Clarabelle Archbell",
      "Email": "carchbell7@biglobe.ne.jp",
      "Course": "Business Development",
      "Phone": "898-821-6848"
    }, {
      "Name": "Mab Lideard",
      "Email": "mlideard8@earthlink.net",
      "Course": "Human Resources",
      "Phone": "224-487-7942"
    }, {
      "Name": "Orella Etteridge",
      "Email": "oetteridge9@soup.io",
      "Course": "Engineering",
      "Phone": "721-244-3285"
    }, {
      "Name": "Waldon Lilloe",
      "Email": "wlilloea@squarespace.com",
      "Course": "Research and Development",
      "Phone": "352-953-6248"
    }, {
      "Name": "Evangelina Jewell",
      "Email": "ejewellb@acquirethisname.com",
      "Course": "Engineering",
      "Phone": "481-607-6664"
    }, {
      "Name": "Blythe Schindler",
      "Email": "bschindlerc@pbs.org",
      "Course": "Marketing",
      "Phone": "937-310-3298"
    }, {
      "Name": "Jordon Chate",
      "Email": "jchated@macromedia.com",
      "Course": "Business Development",
      "Phone": "856-286-6782"
    }, {
      "Name": "Melva Giacopini",
      "Email": "mgiacopinie@furl.net",
      "Course": "Accounting",
      "Phone": "355-473-6258"
    }, {
      "Name": "Elvina Kassel",
      "Email": "ekasself@webmd.com",
      "Course": "Research and Development",
      "Phone": "869-174-6493"
    }, {
      "Name": "Salmon Cuttelar",
      "Email": "scuttelarg@virginia.edu",
      "Course": "Product Management",
      "Phone": "335-250-4893"
    }, {
      "Name": "Lizette Childs",
      "Email": "lchildsh@gov.uk",
      "Course": "Product Management",
      "Phone": "893-646-2016"
    }, {
      "Name": "Joe Vittore",
      "Email": "jvittorei@free.fr",
      "Course": "Human Resources",
      "Phone": "462-655-5648"
    }, {
      "Name": "Trina O'Loughnan",
      "Email": "toloughnanj@jigsy.com",
      "Course": "Business Development",
      "Phone": "110-527-5045"
    }]);
      

  return (
    <div  >
    <Link to='/create' className='btn btn-success'>Add Student +</Link>
    <div className='w-full  rounded p-3  border-primary mt-4 ms-5 overflow-scroll' style={{ height:"350px"}}>
      <table className='table'>
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Contact No.</th>
                  <th>Edit Student</th>
                  <th>Delete  User</th>
              </tr>
          </thead>
          <tbody>
              {users.map((user)=>{
               return   <tr>
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.Course}</td>
                      <td>{user.Phone}</td>
                      <td>
                        <Link to='/update' className='btn btn-success'>Update</Link>
                       {/* <button className='btn btn-danger ms-5'>Delete</button> */}
                       </td>
                      <td>
                        {/* <Link to='/update' className='btn btn-success'>Update</Link> */}
                       <button className='btn btn-danger '>Delete</button>
                       </td>

                  </tr>
              }
              )}
          </tbody>
      </table>
    </div>
    </div>

  )
}
