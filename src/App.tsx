import { useTheme } from "./components/theme-provider";
import { Button } from "./components/ui/button";

function App() {

  const { setTheme, theme } = useTheme();
  return (
    <>
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
    </>
  );
}

export default App;
