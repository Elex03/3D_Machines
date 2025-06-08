import Navbar from './components/NavBar'
import ModelViewer from './components/ModelViewer'
import InfoPanel from './components/InfoPanel'
import { ModelAnimatedViewer } from './components/ModelAnimatedViewer'

function App() {
  return (
    <div style={{ height: '100vh',width:'100vw', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex' }}>
        <div style={{
          flex: 1,
          background: 'transparent',
          backdropFilter: 'blur(10px)',
          padding: '1rem', 
          
        }}>
          <ModelViewer />
        </div>
        <div style={{flex: 1, display: 'flex', width: '900px'}}>
          <InfoPanel/>
          <ModelAnimatedViewer/>
        </div>
      </div>
    </div>
  )
}

export default App
