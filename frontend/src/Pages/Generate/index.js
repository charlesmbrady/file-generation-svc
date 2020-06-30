import './style.css';
import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { ScenarioContext } from '../../Contexts/ScenarioContext';
import API from '../../Utilities/API';
import Title from '../../Components/Title/index';
import Info from '../../Components/Info/index';
import StepControls from '../../Components/StepControls/index';
import _ from 'lodash';
import { CSVDownload } from 'react-csv';
import LoadingMask from '../../Components/LoadingMask/index';

export default function Generate() {
  const { scenario, setScenario } = useContext(ScenarioContext);
  const [redirect, setRedirect] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    API.newScenario(scenario).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  };

  // Rerender whenever the data is received so the CSV download component works
  useEffect(() => {}, [data]);

  return (
    <div>
      {loading && <LoadingMask />}
      {data != null && data.length > 0 && (
        <CSVDownload data={data} target='_blank' />
      )}
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

        {scenario.recordCount > 0 && scenario.fields.length > 0 ? (
          <button className='positive' onClick={() => generate()}>
            Generate
          </button>
        ) : (
          <button className='inactive' disabled>
            Generate
          </button>
        )}
      </StepControls>
    </div>
  );
}
