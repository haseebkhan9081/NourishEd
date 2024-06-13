import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href={'/'}>
      <div className="w-2/5 md:w-1/5 lg:w-2/5 xl:w-1/5">
        <Image
          src={'/Logo.png'}
          alt='logo'
          width={150}
          height={100}  
          layout="responsive"  
          className="mx-auto"
        />
      </div>
    </Link>
  );
}

export default Logo;
