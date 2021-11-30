// import logo from './logo.svg';
import Header from './components/Header';
import ChatList from './components/chat/List';
import Input from './components/chat/Input';
import './App.css';

function App(): JSX.Element {
  return (
    <div className='h-screen'>
      <Header />
      <ChatList />
      <Input />
    </div>
  );
}

export default App;
