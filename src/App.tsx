// import logo from './logo.svg';
import Header from './components/Header';
import ChatList from './components/chat/List';
import ChatBox from './components/chat/ChatBox';
import './App.css';

function App(): JSX.Element {
  return (
    <div className='h-screen'>
      <Header />
      <ChatList />
      <ChatBox />
    </div>
  );
}

export default App;
