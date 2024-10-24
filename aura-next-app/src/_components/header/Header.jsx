"use client";

import { useState } from "react";
import Link from "next/link";

navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className='header'>
      Logo
      <nav className='header__nav'>
        <ul className='header__link-list'>
          {navigation.map((item) => (
            <li key={item.name} className='header__link-item'>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
