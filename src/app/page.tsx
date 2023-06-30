"use client"

import { useState } from "react";
import { Sidebar } from "./components/Sidebar";

const Page  = () => {
  const [sideBarOpened, setSideBarOpened] = useState(true);

  function closeSideBar(){
    setSideBarOpened(false);
  }

  function handleClearconversations(){

  }

  function handleNewChat(){
    
  }

  return (
    <main className="flex min-h-screen bg-gp-orange">
      <Sidebar
        open={sideBarOpened}
        onClose={closeSideBar}
        onClear={handleClearconversations}
        onNewChat={handleNewChat}
      >
                
      </Sidebar>

      <section className="flex flex-col w-full">
        <button onClick={()=> setSideBarOpened(true)}>Abrir sidebar</button>
      </section>
    </main>
  )
}

export default Page;