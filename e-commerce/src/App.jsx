import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"

import Footer from './components//footer'
import PageContainers from './containers/PageContainers'
import { useSelector } from 'react-redux'
import Card from "./components/card/index"
import Search from './components/search'
export default function App() {

  const { drawer } = useSelector(state => state.drawer)

  return (
    <>
      <PageContainers>
        <BrowserRouter>
          <Search/>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
          { drawer && <Card/>}
          <Footer />
        </BrowserRouter>
      </PageContainers>
    </>
  )
}


