import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"

import Footer from './components//footer'
import PageContainers from './containers/PageContainers'
import { useSelector } from 'react-redux'
import Cart from "./components/cart/index"
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
            <Route path="/detail" element={<Detail />} />
          </Routes>
          { drawer && <Cart/>}
          <Footer />
        </BrowserRouter>
      </PageContainers>
    </>
  )
}


