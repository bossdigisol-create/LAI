import { ViewTransition } from "react";

// Wraps a page so client-side navigations fade the old page out and lift the new one in.
// The header and footer live in the root layout and stay put.
export default function PageTransition({ children }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
