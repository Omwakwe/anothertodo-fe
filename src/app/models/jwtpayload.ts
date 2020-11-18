export interface JWTPayload {
  user_id: number;
  token_type: string;
  jti: number;
  exp: number;
}
