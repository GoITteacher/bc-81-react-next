export interface RegisterBody {
  email: string;
  name: string;
  password: string;
  typeAccount: string;
}

export interface LoginBody {
  email: string;
  password: string;
}
