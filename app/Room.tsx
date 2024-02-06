"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";

// Liveblocks uses the concept of rooms, 
// separate virtual spaces where collaborate. 
// To create a real-time experience, 
// multiple users must be connected 
// to the same room.

export function Room({ children }: { children: ReactNode }) {
  return (
    <RoomProvider id="my-room" initialPresence={{}}>
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}