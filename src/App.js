// import logo from './logo.svg';
import Header from './components/Header';
import ChatList from './components/chat/List';
import Input from './components/chat/Input';
import './App.css';

function App() {
  return (
    <div className='h-screen border-2 border-red-500'>
      <Header />
      <ChatList />
      <Input />
    </div>
  );
}

export default App;
