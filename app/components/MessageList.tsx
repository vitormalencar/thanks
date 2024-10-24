'use client'
import { Card, CardContent } from "@/components/ui/card";
import { getMessages, deleteMessage, Message } from "../actions/messageActions";
import { Trash2 } from "lucide-react"; // Import the trash icon
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
        <MessageCard key={msg.id} message={msg} />
      ))}
    </div>
  );
}

interface MessageCardProps {
  message: Message;
}

function MessageCard({ message }: MessageCardProps) {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const isDev = process.env.NODE_ENV === "development";

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this message?")) {
      setIsDeleting(true);
      const result = await deleteMessage(message.id);
      setIsDeleting(false);
      if (result.success) {

        window.location.reload();

      } else {
        alert(`Error: ${result.error}`);
      }
    }
  };

  return (
    <Card
      className="transform transition-transform duration-200 shadow-lg hover:z-10 hover:scale-105 bg-white relative"
      style={{ transform: `rotate(${getRandomRotation()}deg)` }}
    >
      {isDev && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-red-500"
          onClick={handleDelete}
          disabled={isDeleting}
          aria-label="Delete Message"
        >
          <Trash2 size={20} />
        </Button>
      )}
      <CardContent className="p-4">
        {message.image && (
          <div className="mb-4">
            <img
              src={message.image}
              alt={`${message.name}'s image`}
              className="w-full h-72 object-cover rounded"
            />
          </div>
        )}
        <p className="font-cursive text-lg mb-2">{message.message}</p>
        <p className="font-cursive text-right text-sm">- {message.name}</p>
      </CardContent>
    </Card>
  );
}
