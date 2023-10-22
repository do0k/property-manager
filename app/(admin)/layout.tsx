type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer Section</footer>
    </>
  );
};

export default AdminLayout;
