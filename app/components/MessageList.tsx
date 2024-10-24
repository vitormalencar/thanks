// app/components/MessageList.tsx
import { Card, CardContent } from "@/components/ui/card";
import { getMessages, Message } from "../actions/messageActions";

function getRandomRotation() {
  return Math.random() * 10 - 5; // Random rotation between -5 and 5 degrees
}

export default async function MessageList() {
  const messages: Message[] = await getMessages();

  if (messages.length === 0) {
    return <p>No messages yet.</p>;
  }

  return (
    <div className="p-8 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
      {messages.map((msg) => (
        <Card
          key={msg.id}
          className="transform transition-transform duration-200 shadow-lg hover:z-10 hover:scale-105 bg-white"
          style={{ transform: `rotate(${getRandomRotation()}deg)` }}
        >
          <CardContent className="p-4">
            {msg.image && (
              <div className="mb-4">
                <img
                  src={msg.image}
                  alt={`${msg.name}'s image`}
                  className="w-full h-72 object-cover rounded"
                />
              </div>
            )}
            <p className="font-cursive text-lg mb-2">{msg.message}</p>
            <p className="font-cursive text-right text-sm">- {msg.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
