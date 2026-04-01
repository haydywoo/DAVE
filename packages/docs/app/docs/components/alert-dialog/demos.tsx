'use client';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  Button,
} from '@dave/react';
import { Preview } from '@/components/Preview';

const defaultCode = `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="secondary">Open dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This will publish your changes and make them visible to all users.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Publish</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;

const destructiveCode = `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="secondary">Delete account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete account</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. Your account and all data will be permanently removed.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete account</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;

export function AlertDialogDemos() {
  return (
    <>
      <Preview code={defaultCode}>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="secondary">Open dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This will publish your changes and make them visible to all users.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Publish</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Destructive</h3>
      <Preview code={destructiveCode}>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="secondary">Delete account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete account</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Your account and all data will be permanently removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Delete account</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Preview>
    </>
  );
}
