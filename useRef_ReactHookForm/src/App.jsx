import React from 'react'
import Form from './component/Form'
import ReacthookForm from './component/ReacthookForm'

const App = () => {
  return (
    <div className='h-screen bg-gray-300 w-full p-5 flex flex-col gap-5'>
      <h1>Hey This is form</h1>
      {/* <Form/> */}
      <ReacthookForm/>
    </div>
  )
}

export default App
