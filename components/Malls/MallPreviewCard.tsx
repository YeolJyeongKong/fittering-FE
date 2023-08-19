'use client';

import { MallPreview } from '@/service/malls';
import Image from 'next/image';
import Link from 'next/link';

type Props = { mall: MallPreview };

export default function MallPreview({ mall: { name, image } }: Props) {
  return (
    <div className="text-center">
      <div className="w-24 h-24 md:w-44 md:h-36 mx-auto mb-2">
        <Link href={`/malls/${name.split(' ').join('').toLowerCase()}`}>
          <Image
            className="w-full h-full p-2 md:p-4 rounded-lg object-contain mx-auto border border-custom-gray-100"
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </Link>
      </div>
      <Link
        className="font-semibold text-sm"
        href={`/malls/${name.split(' ').join('').toLowerCase()}`}
      >
        {name}
      </Link>
    </div>
  );
}
