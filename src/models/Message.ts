import { User } from './User'; // Import the User model if needed

export interface Message {
  /**
   * @type number
   * @memberof Message
   */
  message_id: number;
  sender_id: number;
  recipient_id: number;
  message_text: string;
  sent_at: Date;
  sender: User; // Assuming you have a User type for the sender
  recipient: User; // Assuming you have a User type for the recipient
}

//change to dto
//change to messageresponse.ts
//make menu's that u click custom components