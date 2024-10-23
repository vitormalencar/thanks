// 'use client'

// import { useState, useCallback } from 'react'
// import { Card, CardContent } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { PlusCircle, Github, Twitter, Linkedin } from 'lucide-react'
// import EmojiPicker from 'emoji-picker-react'

// type Message = {
//   id: number
//   name: string
//   message: string
//   image?: string
//   rotation: number
// }

// const dummyData: Message[] = [
//   { id: 1, name: "Alice", message: "Thank you for everything! 🙏", image: "/placeholder.svg?height=100&width=100", rotation: getRandomRotation() },
//   { id: 2, name: "Bob", message: "You'll be missed! 😢", image: "/placeholder.svg?height=100&width=100", rotation: getRandomRotation() },
//   { id: 3, name: "Charlie", message: "Good luck on your new adventure! 🚀", rotation: getRandomRotation() },
//   { id: 4, name: "Diana", message: "It was a pleasure working with you! 💼", image: "/placeholder.svg?height=100&width=100", rotation: getRandomRotation() },
//   { id: 5, name: "Ethan", message: "Wishing you all the best! 🌟", rotation: getRandomRotation() },
//   { id: 6, name: "Fiona", message: "You've made such a positive impact! 💖", image: "/placeholder.svg?height=100&width=100", rotation: getRandomRotation() },
//   { id: 7, name: "George", message: "We'll never forget your contributions! 🏆", rotation: getRandomRotation() },
//   { id: 8, name: "Hannah", message: "Stay awesome! 😎", image: "/placeholder.svg?height=100&width=100", rotation: getRandomRotation() },
//   { id: 9, name: "Ian", message: "Keep in touch! 📱", rotation: getRandomRotation() },
//   { id: 10, name: "Julia", message: "You've inspired us all! 💡", image: "/placeholder.svg?height=100&width=100", rotation: getRandomRotation() },
//   { id: 11, name: "Kevin", message: "Thanks for being a great colleague! 👍", rotation: getRandomRotation() },
//   { id: 12, name: "Laura", message: "We'll miss your positive energy! ⚡", image: "/placeholder.svg?height=100&width=100", rotation: getRandomRotation() },
// ]

// function getRandomRotation() {
//   return Math.random() * 10 - 5 // Random rotation between -5 and 5 degrees
// }

// export function GoodbyeWallComponent() {
//   const [messages, setMessages] = useState<Message[]>(dummyData)
//   const [name, setName] = useState('')
//   const [message, setMessage] = useState('')
//   const [image, setImage] = useState<File | null>(null)
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false)
//   const [isDialogOpen, setIsDialogOpen] = useState(false)

//   const handleSubmit = useCallback((e: React.FormEvent) => {
//     e.preventDefault()
//     const newMessage: Message = {
//       id: messages.length + 1,
//       name,
//       message,
//       image: image ? URL.createObjectURL(image) : undefined,
//       rotation: getRandomRotation(),
//     }
//     setMessages(prevMessages => [...prevMessages, newMessage])
//     setName('')
//     setMessage('')
//     setImage(null)
//     setIsDialogOpen(false)
//   }, [name, message, image, messages.length])

//   const handleEmojiClick = (emojiObject: { emoji: string }) => {
//     setMessage(prevMessage => prevMessage + emojiObject.emoji)
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 bg-grid-pattern">
//       <header className="bg-white shadow-md py-8">
//         <div className="container mx-auto px-4 flex items-center gap-8">
//           <img
//             src="/placeholder.svg?height=150&width=150"
//             alt="Your Name"
//             className="rounded-full w-32 h-32 object-cover border-4 border-primary"
//           />
//           <div>
//             <h1 className="text-4xl font-bold mb-2">Thank You!</h1>
//             <p className="text-xl text-gray-600 mb-4">
//               It's been an amazing journey. Thank you all for your support and friendship.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="text-gray-600 hover:text-primary">
//                 <Github size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-primary">
//                 <Twitter size={24} />
//               </a>
//               <a href="#" className="text-gray-600 hover:text-primary">
//                 <Linkedin size={24} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="container mx-auto p-4 relative">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
//           {messages.map((msg) => (
//             <Card
//               key={msg.id}
//               className="transform transition-transform duration-200 shadow-lg hover:z-10 hover:scale-105 bg-white"
//               style={{ transform: `rotate(${msg.rotation}deg)` }}
//             >
//               <CardContent className="p-4">
//                 {msg.image && (
//                   <div className="mb-4">
//                     <img src={msg.image} alt={`${msg.name}'s image`} className="w-full h-32 object-cover rounded" />
//                   </div>
//                 )}
//                 <p className="font-cursive text-lg mb-2">{msg.message}</p>
//                 <p className="font-cursive text-right text-sm">- {msg.name}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-lg">
//               <PlusCircle size={32} />
//             </Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add a Goodbye Message</DialogTitle>
//             </DialogHeader>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//               </div>
//               <div>
//                 <Label htmlFor="message">Message</Label>
//                 <div className="relative">
//                   <Textarea
//                     id="message"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     required
//                   />
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="absolute bottom-2 right-2"
//                     onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//                   >
//                     😊
//                   </Button>
//                 </div>
//                 {showEmojiPicker && (
//                   <div className="absolute z-10">
//                     <EmojiPicker onEmojiClick={handleEmojiClick} />
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <Label htmlFor="image">Image (optional)</Label>
//                 <Input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
//               </div>
//               <Button type="submit" className="w-full">Add Message</Button>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </main>
//     </div>
//   )
// }