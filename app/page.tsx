import Header from './components/Header';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div className="min-full bg-gray-200 bg-grid-pattern">
      <Header />

      <MessageForm />
      <MessageList />
    </div>
  );
}






