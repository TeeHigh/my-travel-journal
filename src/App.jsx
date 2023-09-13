import Header from './components/Header'
import Main from './components/Main'


function App({openModal}) {
  return (
    <div className='page'>
      
      <Header/>
      <Main openModal={openModal}/>
    </div>
  )
}

export default App
