"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-oid="puitjdz">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-oid="87:.u6m">
            <div className="grid gap-1" data-oid="abs-xjr">
              {title && <ToastTitle data-oid="9ob69em">{title}</ToastTitle>}
              {description && (
                <ToastDescription data-oid="jgjxiz3">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose data-oid="jlsqlef" />
          </Toast>
        );
      })}
      <ToastViewport data-oid="vo25vo5" />
    </ToastProvider>
  );
}
