import './style.css';
import React, { useContext } from 'react';
import { FieldContext } from '../../../../Contexts/FieldContext';

export default function SmallDatatypeCard({ datatype }) {
  const { field, setField } = useContext(FieldContext);

  const handleUpdate = () => {
    setField({ ...field, datatype: datatype });
  };
  return (
    <div className='smallDatatypeCard' onClick={() => handleUpdate()}>
      <h4 className='darkHeader'>{datatype}</h4>
    </div>
  );
}
