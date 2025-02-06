"use client";

import { FilePlus2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function NoteWidget() {
  return (
    <Drawer>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DrawerTrigger asChild>
              <Button className="rounded-full size-12" variant="outline">
                <FilePlus2 className="" />
              </Button>
            </DrawerTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add note</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DrawerContent>
        <div className="mx-auto w-full max-w-lg p-4">
          <DrawerHeader>
            <DrawerTitle>Add Note</DrawerTitle>
            <DrawerDescription>
              Add important note from video lesson
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4">
            <form action="">
              <Label>Title</Label>
              <Input />
              <Label>Notes</Label>
              <Textarea />
            </form>
          </div>
          <DrawerFooter>
            <Button>Save</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
