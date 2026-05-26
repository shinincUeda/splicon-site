import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      {children}
      <Footer lang="en" />
    </>
  );
}
