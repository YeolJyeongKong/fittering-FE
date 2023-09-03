import Link from 'next/link';

type Props = {
  href: string;
};

export default function AllLink({ href }: Props) {
  return (
    <Link
      className="absolute right-0 bottom-[0.2rem] text-xs text-custom-gray-400"
      href={href}
    >
      {'전체 >'}
    </Link>
  );
}
