/**
 * Module dependencies.
 */
import * as express from 'express';
import * as compression from 'compression'; // compresses requests
import * as bodyParser from 'body-parser';
import streamJSONArray from './streamJSONArray'

export function set(app: express.Application): void {
	app.use(compression());
	app.use(bodyParser.json());

  app.get('*', streamJSONArray());
}
