import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
  <h1 className='text-black bg-green-500 p-4 rounded-xl mb-4'>Tailwind test</h1>
     <Card title= "BeachWithMountains" description= "Vacation time is precious and more limited than most would like, so how you spend it really matters. For many, the decision is a no-brainer: Head to a beach destination. Few things beat dipping your toes in the ocean with a cold beverage in your hand."/>

     <Card title= "WavesAndMountains" description= "hfqu While taking pictures may come naturally, finding the right beach caption to pair them with might leave some people feeling a bit stranded at sea."/>
    </>
  )
}

export default App
