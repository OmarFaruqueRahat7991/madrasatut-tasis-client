import React from 'react'
import { Button, Navbar } from "flowbite-react";
import photo from "../../../Assets/logo.png"

export const Navbar2 = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img alt="" className="mr-3 h-6 sm:h-9" src={photo} />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Madrasatut Ta'sis
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
