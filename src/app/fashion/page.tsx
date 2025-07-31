import { Metadata } from "next";
import ClientHome from "./ClientHome";

export const generateMetadata = (): Metadata => {
  return {
    title: "Fashion",
    icons: {
      icon: [{ url: "/fashion/favicon.svg", type: "image/svg+xml" }],
    },
  };
};

export default function Home() {
  return <ClientHome />;
}
