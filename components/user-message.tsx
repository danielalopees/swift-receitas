"use client";
import React from "react"
import Image from "react-bootstrap/Image";

interface UserMessageProps {
  message: string
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="flex items-start justify-end">
      <div className="bg-red-600 text-white rounded-lg p-3 shadow-sm max-w-[85%]">
        <p>{message}</p>
      </div>
      <Image 
        src="https://i.pravatar.cc/150?img=5" 
        roundedCircle 
        className="ms-2"
        style={{ width: '32px', height: '32px' }} 
      />
    </div>
  )
}
