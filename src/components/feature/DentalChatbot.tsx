"use client";

import { useState, useRef, useEffect } from 'react';
import { dentalFAQChatbot, type DentalFAQChatbotInput } from '@/ai/flows/dental-faq-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Sparkles, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export default function DentalChatbot({ initialQuestion }: { initialQuestion?: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuestion && messages.length === 0) {
      handleInitialQuestion(initialQuestion);
    }
  }, [initialQuestion]);
  
  const handleInitialQuestion = async (question: string) => {
    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: 'user', text: question }]);
    setIsLoading(true);
    try {
      const response = await dentalFAQChatbot({ query: question } as DentalFAQChatbotInput);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: response.answer }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), sender: 'bot', text: "Sorry, I'm having trouble connecting. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };


  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await dentalFAQChatbot({ query: userMessage.text } as DentalFAQChatbotInput);
      setMessages((prevMessages) => [...prevMessages, { id: (Date.now() + 1).toString(), sender: 'bot', text: response.answer }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prevMessages) => [...prevMessages, { id: (Date.now() + 1).toString(), sender: 'bot', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-headline flex items-center justify-center">
          <Sparkles className="h-6 w-6 mr-2 text-primary" />
          D-Cure AI Assistant
        </CardTitle>
        <CardDescription>Ask about our services or general dental health questions.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] sm:h-[400px] w-full p-4 border rounded-md mb-4 bg-muted/20" ref={scrollAreaRef}>
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <Sparkles className="h-12 w-12 mb-2" />
              <p>Ask me anything about dental care!</p>
              <p className="text-xs">e.g., "What are dental crowns?"</p>
            </div>
          )}
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 my-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'bot' && (
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Sparkles className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[70%] p-3 rounded-xl text-sm ${
                  msg.sender === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted text-foreground rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                 <Avatar className="h-8 w-8">
                   <AvatarFallback className="bg-accent text-accent-foreground">
                     <User className="h-5 w-5" />
                   </AvatarFallback>
                 </Avatar>
              )}
            </div>
          ))}
          {isLoading && messages.length > 0 && messages[messages.length-1].sender === 'user' && (
            <div className="flex items-start gap-3 my-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Sparkles className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="max-w-[70%] p-3 rounded-lg bg-muted text-foreground rounded-bl-none">
                <span className="italic">D-Cure AI is typing...</span>
              </div>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
          <Input
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-lg"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" className="rounded-lg" disabled={isLoading || !input.trim()}>
            <Send className="h-5 w-5" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
