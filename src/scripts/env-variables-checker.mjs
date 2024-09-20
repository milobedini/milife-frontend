/* eslint-disable import/extensions */
import nextEnv from '@next/env';
import mandatoryEnvVariables from '../../mandatory-env-variables.mjs';

/** Get Next config. */
const config = nextEnv.loadEnvConfig(process.cwd());

/** Check existence of mandatory variables build-time. */
mandatoryEnvVariables.forEach((variable) => {
  if (!config.combinedEnv[variable]) {
    throw new Error(`env variable "${variable}" is missing`);
  }
});
