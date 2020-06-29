import './style.css';
import React, { useContext } from 'react';
import { FieldContext } from '../../../../Contexts/FieldContext';

export default function SmallDatatypeCard({ datatype }) {
  const { field, setField } = useContext(FieldContext);

  const handleUpdate = () => {
    setField({ ...field, datatype: datatype });
  };
  return (
    <div
      // if field.datatype == this datatype, add a "selected" class which will give highlighted border
      className='smallDatatypeCard'
      onClick={() => handleUpdate()}
    >
      <h4
        className={
          field.datatype == datatype
            ? 'darkHeader selectedDatatype'
            : 'darkHeader'
        }
      >
        {datatype}
      </h4>
    </div>
  );
}
