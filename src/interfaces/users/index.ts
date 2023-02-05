export interface ICreateUser {
  email: string;
  password: string;
  name: string;
  phone: string;
  createdAt: Date;
  isAdm: boolean;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUpdateUser {
  email?: string;
  password?: string;
  name?: string;
  phone?: string;
}
