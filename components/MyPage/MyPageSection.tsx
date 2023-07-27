type Props = {
  sectionName: '최근 본 상품' | '좋아요한 상품' | '내 맞춤 정보 설정';
};

export default function MyPageSection({ sectionName }: Props) {
  return (
    <div className="my-8 pb-2 border-b border-nav-black">
      <span className="font-bold">{sectionName}</span>
    </div>
  );
}
