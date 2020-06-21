import './style.css';
import React from 'react';
import API from '../../Utilities/API';
import useApi from '../../Hooks/useApi';

export default function Home() {
  const [isLoading, data, error] = useApi(API.getData);
  return <div>home page</div>;
}
