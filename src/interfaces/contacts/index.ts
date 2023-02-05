export interface ICreateContact {
  email: string;
  name: string;
  phone: string;
}

export interface IUpdateContact {
  email?: string;
  name?: string;
  phone?: string;
}
