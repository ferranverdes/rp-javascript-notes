import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Transform } from 'stream';

class ArrayTransform extends Transform {
	private _index: number = 0;

	constructor(options: object) {
		super(options);
	}
	_transform(obj: any, encoding: string, callback: any) {
		this.push((!this._index++ ? '[' : ',') + JSON.stringify(obj));
		callback();
	}
	_flush(callback: any) {
		this.push(!this._index ? '[]' : ']');
		callback();
	}
}

export default function streamJSONArray(): RequestHandler {
	const arrayTransform = new ArrayTransform({
		objectMode: true
	});

	return (req: Request, res: Response, next: NextFunction) => {
		((<any>res).streamJSONArray = arrayTransform).pipe(res.type('json'));
		next();
	};
}

/**
 * Usage example:

 Model
 .find()
 .cursor()
 .on('error', err => {
   res.status(500).send({
     message: err.message
   });
 })
 .pipe(res.streamJSONArray);

 */
