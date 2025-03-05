import { UserRole } from '../user/user.interface';

export type TJwtPayload = {
  userId: string;
  name: string;
  email: string;
  role: UserRole;
}
