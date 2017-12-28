import * as mongoose from 'mongoose';
import { UserSchema, UserDocument } from '../schemas/user';

const User = mongoose.model<UserDocument>('user', UserSchema, 'users');
export { User, UserDocument };
