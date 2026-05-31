import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="ja" />
      {children}
      <Footer lang="ja" />
    </>
  );
}
