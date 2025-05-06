"use client"
import Header from "./components/custom/header";
import Photos from "./components/custom/photos";
import About from "./components/custom/about";
import Reserves from "./components/custom/reserves";
import Local from "./components/custom/local";

export default function Home() {

  return (
    <>
      <div className="flex min-h-screen flex-col" >
        
        <Header />

        <About />

        <Photos />

        <Reserves />

        <Local />

      </div>
    </>
  );
}
