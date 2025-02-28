import React from "react"

const CustomContainer = () => {
  return (
    <div className="plasmo-flex plasmo-h-screen plasmo-w-full plasmo-bg-white">
      <aside className="plasmo-w-64 plasmo-bg-gray-200 plasmo-p-4">
        <h2 className="plasmo-text-lg plasmo-font-bold">My CRM</h2>
        {/* Add your sidebar items here */}
        <ul>
          <li>Dashboard</li>
          <li>Contacts</li>
          <li>Tasks</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main className="plasmo-flex-1 plasmo-p-4">
        <h1 className="plasmo-text-2xl">Welcome to My CRM</h1>
        {/* Main content goes here */}
      </main>
    </div>
  )
}

export default CustomContainer 