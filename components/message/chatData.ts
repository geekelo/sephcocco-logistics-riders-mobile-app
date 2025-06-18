export interface ChatItem {
  id: string;
  sender: string;
  message: string;
  time: string;
  read: boolean;
}

export const chatData: ChatItem[] = [
  { id: "1", sender: "John Doe", message: "Hey, how are you?", time: "10:45 AM", read: false },
  { id: "2", sender: "Jane Smith", message: "Order has been delivered.", time: "09:12 AM", read: true },
  { id: "3", sender: "Mark", message: "Thanks for your help!", time: "Yesterday", read: true },
  { id: "4", sender: "Support", message: "Please check your email.", time: "2 days ago", read: false },
];
