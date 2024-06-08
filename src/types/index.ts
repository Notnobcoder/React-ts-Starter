export type registerType = {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
}

export type loginType = {
  email: string,
  password: string
}
export interface CardDetails {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}


