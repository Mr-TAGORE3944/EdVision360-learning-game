"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { usePracticeModal } from "@/app/lesson/store/use-practice-modal";
import { useEffect, useState } from "react";
import Image from "next/image";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();
  useEffect(() => setIsClient(true), []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md bg-white p-5">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5 ">
            <Image src="/heart.svg" alt="Mascot" height={100} width={100} />
          </div>
          <DialogTitle className="text-center font-bold">
            Practice lesson
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Use practice lessons to regain hearts and points. You cannot loose
            hearts or points in practice lessons.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full items-center justify-center">
            <Button
              size="lg"
              variant="primary"
              className="w-full"
              onClick={close}
            >
              I understand!
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
