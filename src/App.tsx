import Header from "./components/header";
import SideBar from "./components/sideBar";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full">
        <SideBar />
        <main className="flex-1 bg-gray-100 p-4">
          <p>Seu conteúdo aqui</p>
          <Button>Teste Button</Button>
        </main>
      </div>
    </div>
  )
}


