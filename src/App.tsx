import AuthLayout from "./components/layout/AuthLayout";
import { useTheme } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {

  const { setTheme, theme } = useTheme();
  return (
    <>
      <AuthLayout>
        <div className="min-h-screen flex flex-col justify-center items-center gap-2">
          <p className="">Hello world</p>
          <Button size="sm" variant={'default'}>
            Oke
          </Button>
          <Button size={'sm'} onClick={() => {
            if (theme === 'dark') {
              setTheme('light')
            } else {
              setTheme('dark')
            }

          }}>{theme} Mode</Button>
          <h1>Hisbil Islami</h1>
        </div>
      </AuthLayout>
    </>
  );
}

export default App;
