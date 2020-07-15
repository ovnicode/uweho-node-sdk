export default interface IUser {
  profilePicture?: string;
  username: string;
  admin: boolean;
  online: boolean;
  socketId: string | undefined;
  email: string;
  emailVerifiedAt?: Date;
  locale: string | undefined;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  lockedAt?: Date;
}
