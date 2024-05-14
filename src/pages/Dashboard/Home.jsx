import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import DisplayUsers from '../Users/DisplayUsers';

function Home() {

   
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards d-flex justify-content-around' >
            <div className='card' style={{width:"300px"}}>
                <div className='card-inner'>
                    <h3 className='text-light'>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1 className='text-light'>33</h1>
            </div>
            <div className='card' style={{width:"300px"}}>
                <div className='card-inner'>
                    <h3 className='text-light'>ASSIGNMENTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1 className='text-light'>300</h1>
            </div>
            <div className='card ' style={{width:"300px"}} >
                <div className='card-inner'>
                    <h3 className='text-light'>NOTICE</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1 className='text-light'>12</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3></h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div> */}
        </div>

        {/* <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div> */}
        <DisplayUsers/>
    </main>
  )
}

export default Home