import { Header } from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
