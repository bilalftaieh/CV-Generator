import './styles/styles.css'
import InputContainer from './Components/InputContainerComponents/InputContainer'
import { AppDataProvider } from './Components/AppDataContext'
import DisplayContainer from './Components/DisplayContainerComponents/DisplayContainer'
import FloatingButton from './Components/FloatingButton'


function App() {
  


  return(
    <>
    <AppDataProvider>
    <div className='container'>
        <InputContainer/>
        <DisplayContainer/>
        <FloatingButton/>
      </div>
    </AppDataProvider>
      
    </>
  )
}

export default App
