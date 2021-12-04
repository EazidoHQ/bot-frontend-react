export interface IMessage {
  message: string;
  sender: boolean;
  response?: IMessageResponse;
}

export interface IMessageResponse {
  expected: 'text' | 'email' | 'url';
  question: string;
}
