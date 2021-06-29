import React, { Suspense, useState } from 'react'
import './App.scss'
import NavBar from './components/NavBar'
import { Switch, Route } from 'react-router-dom'
import * as ROUTES from './constant/routes'


const NotFound = React.lazy(() => import('./pages/NotFound'))
const aboutPage = React.lazy(() => import('./pages/AboutPage'))
const homePage = React.lazy(() => import('./pages/Homepage'))
// const blogPage = React.lazy(() => import('./pages/BlogPage'))
const portfolioPage = React.lazy(() => import('./pages/PortfoliosPage'))
const contactPage = React.lazy(() => import('./pages/ContactPage'))

function App() {

  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle)
  }


  return (
    <div className="App">
          <Suspense fallback={<p>Loading..</p>}>

      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>

      </div>

      <div className="main-content">
        <div className="content">
            <Switch>
              <Route path={ROUTES.HOMEPAGE} exact component={homePage} />
              <Route path={ROUTES.ABOUT} exact component={aboutPage} />
              {/* <Route path={ROUTES.BLOG} exact component={blogPage} /> */}
              <Route path={ROUTES.PORTFOLIO} exact component={portfolioPage} />
              <Route path={ROUTES.CONTACT} exact component={contactPage} />
              <Route component={NotFound} />
            </Switch>

          {/* <HomePage /> */}
        </div>

      </div>
          </Suspense>

    </div>
  );
}

export default App;
