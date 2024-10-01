"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">My Website</h1>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/services">Services</Link>
      </div>
    </div>
  );
};

export default Navbar;
