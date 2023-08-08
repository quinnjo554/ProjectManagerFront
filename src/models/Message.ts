import { User } from './User'; // Import the User model if needed

export interface Message {
  message_id: number;
  sender_id: number;
  recipient_id: number;
  message_text: string;
  sent_at: Date;
  sender: User; // Assuming you have a User type for the sender
  recipient: User; // Assuming you have a User type for the recipient
}