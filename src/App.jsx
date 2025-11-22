import React from 'react'

import OnboardingFlow from './components/OnboardingFlow.jsx'
import WorkElateDashboard from './components/WorkElateDashboard.jsx'
import { Routes,Route } from 'react-router-dom'
import {  } from 'lucide-react'


const App = () => {
  return (
    <Routes> 
      <Route path='/' element={<OnboardingFlow/>} /> 
      <Route path='/dashboard' element={<WorkElateDashboard/>}/>
    </Routes>
  )
}

export default App