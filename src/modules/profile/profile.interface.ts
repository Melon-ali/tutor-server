import { Types } from 'mongoose';
import { UserRole } from '../user/user.interface';

export type TReview = {
  studentId: Types.ObjectId;
  comment: string;
  rating: number;
  createdAt?: Date;
}

export type TAvailability = {
  day: string; 
  startTime: string;
  endTime: string;
}

export type TRates = {
  hourlyRate: number;
  discount?: number;
}

export type TProfile = {
  userId: Types.ObjectId;
  image?: string;
  bio?: string;
  subjects: string[];
  role: UserRole;
  experience?: number;
  rates: TRates;
  availability: TAvailability[];
  ratings?: number;
  reviews: TReview[];
  requestRole?: UserRole;
  isVerified?: boolean;
  callToAction?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
