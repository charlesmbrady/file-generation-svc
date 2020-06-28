import './style.css';
import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FieldContext } from '../../Contexts/FieldContext';
import { ScenarioContext } from '../../Contexts/ScenarioContext';
import API from '../../Utilities/API';
import useApi from '../../Hooks/useApi';
import Title from '../../Components/Title/index';
import Info from '../../Components/Info/index';
import StepControls from '../../Components/StepControls/index';
import _ from 'lodash';
import SmallDatatypeCard from './components/smallDataypeCard/index';

export default function AddField() {
  const { field, setField } = useContext(FieldContext);
  const { scenario, setScenario } = useContext(ScenarioContext);
  const [redirect, setRedirect] = useState(false);
  const datatypes = [
    'AccountName',
    'AccountType',
    'AnnualRevenue',
    'BillingCity',
    'BillingCountry',
    'BillingPostalCode',
    'BillingState',
    'BillingStreet',
    'CloseDate',
    'Email',
    'FirstName',
    'ForecastCategory',
    'Industry',
    'LastName',
    'LeadSource',
    'LeadStatus',
    'NumberOfEmployees',
    'OpportunityStage',
    'OpportunityType',
    'Phone',
    'Probability',
    'Title',
  ];

  if (redirect) {
    return <Redirect to={`/${redirect}`} />;
  }

  const back = () => {
    setField({
      name: '',
      dataType: '',
    });
    setRedirect('fields');
  };

  const nextStep = () => {
    let tempScenario = _.cloneDeep(scenario);

    //add new field
    tempScenario.fields.push(field);

    //set the scenario context with new field
    setScenario(tempScenario);

    //clear the field context and redirect
    setField({
      name: '',
      dataType: '',
    });
    setRedirect('fields');
  };

  const handleNameUpdate = (e) => {
    setField({ ...field, name: e.target.value });
  };

  return (
    <div className='addFieldPage'>
      <Title>Add a Field</Title>
      <Info>Name this field and select a dataype.</Info>
      <label htmlFor='fieldName'>Name</label>
      <input
        name='fieldName'
        type='text'
        value={field.name || ''}
        onChange={(e) => handleNameUpdate(e)}
      />

      <div className='well'>
        {datatypes.map((datatype, i) => (
          <SmallDatatypeCard key={i} datatype={datatype} />
        ))}
      </div>

      <StepControls>
        <button className='surpressedBackground' onClick={() => back()}>
          Back
        </button>
        <button className='positive' onClick={() => nextStep()}>
          Next Step
        </button>
      </StepControls>
    </div>
  );
}
