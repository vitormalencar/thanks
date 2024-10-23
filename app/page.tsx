import Header from './components/Header';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 bg-grid-pattern">
      <Header />
      <MessageForm />
      <MessageList />
    </div>
  );
}
