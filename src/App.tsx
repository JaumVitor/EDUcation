import Header from "./components/header";
import SideBar from "./components/sideBar";

export default function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex h-full">

        {/* Create command in sidebar */}
        <SideBar />
        <main className="flex-1 bg-gray-100 overflow-hidden">
        
        </main>
      </div>
    </div>
  )
}


