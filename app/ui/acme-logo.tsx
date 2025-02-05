import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      
      <Image className='h-11 w-11 '
      
              src="/images/bodi.jpg.png"
              width={300}
              height={200}
              
              alt="Description"
            />
             {/*   /> */}
      
      <p className="text-[44px]">Bodi Insurance</p>

      
    </div>
  );
}
