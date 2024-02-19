export type RootStackParamList = {
  // 앞이 스크린 명, 뒤가 넘겨줄 파라미터
  Signup: undefined;
  Signin: undefined;
  Home: undefined;
  Loading: undefined;
  Chat: {
    userIds: string[];
    other: User;
  };
};

export interface User {
  userId: string;
  email: string;
  name: string;
}

export enum Collections {
  USERS = 'users',
  CHATS = 'chats',
}

export interface Chat {
  id: string;
  userIds: string[];
  users: User[];
}
