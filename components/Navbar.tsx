'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import { RiMenu2Line, RiCloseLine } from '@remixicon/react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Transcribe', href: 'transcribe' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="flex w-full justify-between items-center px-5 py-4 md:px-8 md:py-5">
        <div className="flex items-center gap-1.5">
          <Link href="/">
            <h1 className="text-3xl font-semibold tracking-tight">
              Meeting<span className="text-primary">Mind</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <RiMenu2Line className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent 
              side="right" 
              className="w-[280px] sm:w-[320px] p-0 border-l border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
                <SheetTitle></SheetTitle>
    
              </div>
              <nav className="flex flex-col px-3 py-6">
                {NAV_ITEMS.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`
                      group flex items-center px-4 py-4 text-lg font-medium
                      text-muted-foreground hover:text-foreground 
                      hover:bg-gray-50 dark:hover:bg-gray-900/50 
                      rounded-2xl transition-all duration-200
                      ${index !== NAV_ITEMS.length - 1 ? 'mb-1' : ''}
                    `}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="absolute bottom-8 left-6 right-6">
                <div className="text-xs text-muted-foreground text-center">
                  MeetingMind © 2026
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar