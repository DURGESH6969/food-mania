import React from 'react';
import {useRouteError} from "react-router-dom";
import errorImage from '../assets/error-pic.jpg';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className='error'>
      <img src={errorImage} alt="Error Occurred" />
      <h2>Oops! Something Went Wrong</h2>
      <h3>{err.status}: {err.statusText}</h3>
      <p>We're sorry, but it seems that an error has occurred.</p>
      <p>Please try again later.</p>
    </div>
  );
};

export default Error;
