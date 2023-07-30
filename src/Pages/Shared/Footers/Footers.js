import React from 'react';
import { Footer } from "flowbite-react";
import logo from "../../../Assets/logo.png";

export const Footers = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="Logo"
            href="Madrasatut Ta'sis"
            name="Madrasatut Ta'sis"
            src={logo}
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About Us</Footer.Link>
            <Footer.Link href="#">Courses</Footer.Link>
            <Footer.Link href="#">Donate Now</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Madrasatut Ta'sis" href="#" year={2023} />
      </div>
    </Footer>
  );
}
