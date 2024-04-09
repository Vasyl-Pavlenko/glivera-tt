import React, { useEffect } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import '../../styles/error.css';

export const ErrorPage = () => {
  const error = useRouteError();
  const history = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      history('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  const handleRetryClick = () => {
    history('/');
  };

  return (
    <div className="error-page">
      <h1 className="error-page__title">Oops!</h1>

      <p className="error-page__subtitle">Sorry, something went wrong.</p>

      {error && (
        <div className="error-details">
          <p className="error-details__text">
            We encountered an error while processing your request.
          </p>
          {error.statusText && (
            <p>
              <strong>Error:</strong> {error.statusText}
            </p>
          )}
          {error.message && (
            <p>
              <strong>Details:</strong> {error.message}
            </p>
          )}
        </div>
      )}

      <p>Please try again later or contact support if the problem persists.</p>

      <button className="error-page__button" onClick={handleRetryClick}>
        Retry
      </button>
    </div>
  );
};
