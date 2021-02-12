import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import Config from './config';
import ThemeContext from './components/ThemeContext';
import ToolBar from './components/ToolBar';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem(Config.STORAGE_KEY) || 'light');

  useEffect(() => {
    localStorage.setItem(Config.STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      updateTheme: () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
      },
    }}
    >
      <div className={theme}>
        <Router>
          <div className="nav">
            <NavBar />
            <ToolBar />
          </div>
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Agency_Website/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
            </Switch>
          </main>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
