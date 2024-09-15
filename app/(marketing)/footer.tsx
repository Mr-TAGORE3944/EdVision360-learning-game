import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2 ">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/hr.svg"
            alt="Coraisian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/es.svg"
            alt="Coraisian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/fr.svg"
            alt="Coraisian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/it.svg"
            alt="Coraisian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button className="w-full" size="lg" variant="ghost">
          <Image
            src="/jp.svg"
            alt="Coraisian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>
      </div>
    </footer>
  );
}

export default Footer
