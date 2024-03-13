export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  role: string;
  userId: string;
  email: string;
}
