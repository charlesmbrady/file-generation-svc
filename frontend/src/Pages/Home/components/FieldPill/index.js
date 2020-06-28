import './style.css';
import React, { useContext } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { ScenarioContext } from '../../../../Contexts/ScenarioContext';
import _ from 'lodash';

export default function FieldPill({ name, index }) {
  const { scenario, setScenario } = useContext(ScenarioContext);

  const removeField = () => {
    let tempScenario = _.cloneDeep(scenario);
    tempScenario.fields.splice(index, 1);

    setScenario(tempScenario);
  };

  return (
    <div className='fieldPill'>
      <h4 className='darkHeader pill'>
        {name}{' '}
        <TiDeleteOutline className='remove' onClick={() => removeField()} />
      </h4>
    </div>
  );
}
