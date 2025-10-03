import Image from "react-bootstrap/Image";
import { ChefHat } from "lucide-react";

interface ChefMessageProps {
  message: string;
  isIntro?: boolean;
}

export function ChefMessage({ message, isIntro = false }: ChefMessageProps) {
  return (
    <div className="d-flex align-items-start">
      <Image 
        src="/images/swift-logo.svg" 
        roundedCircle 
        className="me-2 bg-danger p-1"
        style={{ width: '32px', height: '32px' }} 
      />
      <div className={`bg-white rounded p-3 shadow-sm w-100 ${isIntro ? "bg-light-subtle" : ""}`}>
        <p className="mb-0">{message}</p>
      </div>
    </div>
  );
}
