import Link from 'next/link';

type Props = {
  sectionName: string;
  displayStyle: string;
};

export default function LineSection({ sectionName, displayStyle }: Props) {
  const href =
    sectionName === '최근 본 상품' ? '/user/recent' : '/favorite_goods';
  return (
    <div
      className={`relative mt-8 pb-2 border-b-[1.5px] border-nav-black ${displayStyle}`}
    >
      <span className="font-bold text-lg">{sectionName}</span>
      {sectionName === '최근 본 상품' || sectionName === '좋아요한 상품' ? (
        <Link
          className="absolute right-0 bottom-[0.5rem] text-xs text-custom-gray-400"
          href={`${href}`}
          aria-label={`${sectionName} 전체 보기로 이동`}
        >
          {'전체 >'}
        </Link>
      ) : null}
    </div>
  );
}
