import ThemeContainer from './ThemeContainer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeContainer>{children}</ThemeContainer>
      </body>
    </html>
  );
};

export default RootLayout;
