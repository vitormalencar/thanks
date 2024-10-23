"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { addMessage } from "../actions/messageActions";

export default function MessageForm() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Convert the image to a base64 string
    let imageBase64: string | undefined = undefined;

    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      imageBase64 = await new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve(reader.result as string);
        };
        reader.onerror = () => {
          reject("Failed to read file!");
        };
      });
    }

    setIsSubmitting(true);

    const result = await addMessage(name, message, imageBase64);
    if (result.success) {
      setName("");
      setMessage("");
      setImage(null);
      setIsDialogOpen(false); // Close the dialog upon success
      setIsSubmitting(false);
      router.refresh(); // Refresh the page to show the new message
    } else {
      setIsSubmitting(false);
      alert(`Error: ${result.error}`);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-lg">
          <PlusCircle size={32} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a Goodbye Message</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <div className="relative">
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="image">Image (optional)</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
