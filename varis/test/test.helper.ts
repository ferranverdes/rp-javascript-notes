import * as mongoose from 'mongoose';
import { User, UserDocument } from '../src/models/user';

/**
 * To avoid use mongoose Promise implementation.
 *
 * DeprecationWarning: Mongoose: mpromise (mongoose's default promise library)
 * is deprecated, plug in your own promise library instead:
 * http://mongoosejs.com/docs/promises.html
 */
(<any>mongoose).Promise = Promise;

/**
 * Runs before all tests.
 */
before(async () => {
	await mongoose.connect('mongodb://myTester:xyz123@127.0.0.1:27017/test');
});

/**
 * Runs before each test.
 */
beforeEach(async () => {
	await User.remove({});
});
