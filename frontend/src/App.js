import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import { ScenarioContext } from './Contexts/ScenarioContext';
import { FieldContext } from './Contexts/FieldContext';
import API from './Utilities/API';
import useApi from './Hooks/useApi';

//********** Pages **********//
import Home from './Pages/Home';
import AddField from './Pages/AddField';
import Generate from './Pages/Generate';

export default function App() {
  // Set ScenarioContext provider values
  const [scenario, setScenario] = useState({
    fields: [],
    recordCount: 0,
  });
  const scenarioValue = useMemo(() => ({ scenario, setScenario }), [
    scenario,
    setScenario,
  ]);

  // Set FieldContext provider values
  const [field, setField] = useState({
    name: '',
    datatype: '',
  });
  const fieldValue = useMemo(() => ({ field, setField }), [field, setField]);

  return (
    <ScenarioContext.Provider value={scenarioValue}>
      <FieldContext.Provider value={fieldValue}>
        <Router>
          <div className='main'>
            <Switch>
              <Route exact path='/fields' component={Home} />
              <Route exact path='/newField' component={AddField} />
              <Route exact path='/generate' component={Generate} />
              <Route path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </FieldContext.Provider>
    </ScenarioContext.Provider>
  );
}
