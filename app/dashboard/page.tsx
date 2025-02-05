import Image from "next/image"
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
    return  (
      <main>
        <h1></h1>
        <div className={styles.shape} />
          <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bodi Insurance</strong>  танилцуулга {' '}
           
            
          </p>
            
            

        <div>  
          <Image
        src="/images/bodi_1.jpg"
        width={600}
        height={600}
        
        alt="Description"
      />
      </div>
       </main>
    )}
