import './style.css';
import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ScenarioContext } from '../../Contexts/ScenarioContext';
import API from '../../Utilities/API';
import useApi from '../../Hooks/useApi';
import Title from '../../Components/Title/index';
import Info from '../../Components/Info/index';
import StepControls from '../../Components/StepControls/index';
import _ from 'lodash';
import { CSVDownload } from 'react-csv';

export default function Generate() {
  const { scenario, setScenario } = useContext(ScenarioContext);
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);

  if (redirect) {
    return <Redirect to={`/${redirect}`} />;
  }

  const back = () => {
    setRedirect('fields');
  };

  const handleUpdate = (e) => {
    const newRecordCount = e.target.value;
    let tempScenario = _.cloneDeep(scenario);
    tempScenario.recordCount = parseInt(newRecordCount);

    setScenario(tempScenario);
  };

  const generate = () => {
    //TODO: finish hooking this up with csv generation (it is only getting data now);
    API.newScenario(scenario).then((res) => {
      console.log('got response, check out the data ' + res.data);
      setData(res.data);
    });
  };

  useEffect(() => {}, [data]);

  return (
    <div>
      {data.length > 0 && <CSVDownload data={data} target='_blank' />}
      <Title>Generate File</Title>
      <Info>How many records would you like to generate?</Info>
      <input
        name='recordCount'
        type='number'
        value={scenario.recordCount}
        onChange={(e) => handleUpdate(e)}
      />

      <StepControls>
        <button className='surpressedBackground' onClick={() => back()}>
          Back
        </button>
        <button className='positive' onClick={() => generate()}>
          Generate
        </button>
      </StepControls>
    </div>
  );
}
