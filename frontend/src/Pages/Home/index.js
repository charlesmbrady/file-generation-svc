import './style.css';
import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { ScenarioContext } from '../../Contexts/ScenarioContext';
import { FieldContext } from '../../Contexts/FieldContext';
import API from '../../Utilities/API';
import useApi from '../../Hooks/useApi';
import Title from '../../Components/Title/index';
import Info from '../../Components/Info/index';
import StepControls from '../../Components/StepControls/index';
import FieldPill from './components/FieldPill/index';

export default function Home() {
  const { scenario } = useContext(ScenarioContext);
  const { field, setField } = useContext(FieldContext);

  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to={`/${redirect}`} />;
  }

  const addField = () => {
    setField({
      name: '',
      datatype: '',
    });
    setRedirect('newField');
  };
  const nextStep = () => {
    setRedirect('generate');
  };

  return (
    <div>
      <Title>.csv generator</Title>
      <Info>
        Click the button below to add fields to your spreadsheet file.
      </Info>
      <h3 className='lightType'>Fields:</h3>

      {scenario.fields.length > 0 &&
        scenario.fields.map((field, i) => (
          <FieldPill name={field.name} index={i} key={i} />
        ))}
      {scenario.fields.length == 0 && (
        <h5 className='surpressed'>
          No fields added yet... Click the "Add Field" button below.
        </h5>
      )}
      <StepControls>
        <button className='secondary' onClick={() => addField()}>
          Add Field
        </button>
        <button className='positive' onClick={() => nextStep()}>
          Next Step
        </button>
      </StepControls>
    </div>
  );
}
