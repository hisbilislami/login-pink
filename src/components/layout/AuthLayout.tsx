
type LayoutProps = {
  children: React.ReactNode;

}
const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
    </>
  )
}

export default AuthLayout
