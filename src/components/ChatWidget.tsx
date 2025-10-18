import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <div className="chat-button">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-2 border-white shadow-lg cursor-pointer hover:bg-primary/90 transition-colors">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="chat-tooltip">
        <Card className="p-3">
          <p className="text-gray-700 text-sm">Hi! I'm HAL 2001. Can I help you discover the space opportunities for your company?</p>
        </Card>
      </div>
    </div>
  );
};

export default ChatWidget;
