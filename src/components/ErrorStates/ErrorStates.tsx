import React from 'react';
import ApiError from './ApiError';
import ApiLoading from './ApiLoading';
import GenericError from './GenericError';
import NoContent from './NoContent';

type ErrorStatesProps = {
  apiError: boolean;
  apiLoading: boolean;
  noContent: boolean;
};

function ErrorStates({ apiError, apiLoading, noContent }: ErrorStatesProps) {
  if (apiError) return <ApiError />;
  if (apiLoading) return <ApiLoading />;
  if (noContent) return <NoContent />;

  return <GenericError />;
}

export default ErrorStates;
