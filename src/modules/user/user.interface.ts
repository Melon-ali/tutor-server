import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export enum UserRole {
  ADMIN = 'admin',
  STUDENT = 'student',
  TUTOR = 'tutor',
}

export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: 'in-progress' | 'blocked';
}

export interface UserModel extends Model<TUser> {
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isUserExistsByEmail(email: string): Promise<TUser>;
  checkUserExist(userId: string): Promise<TUser>;
  isUserExistsByCustomId(id: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLE;
