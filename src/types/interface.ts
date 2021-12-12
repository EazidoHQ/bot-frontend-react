export interface IMessage {
  is_user: boolean;
  message: string;
  expect_response?: boolean;
  response?: IMessageResponse;
  suggestions?: Array<string>;
}

export interface IMessageResponse {
  type: 'text' | 'email' | 'url';
  question: string;
}
