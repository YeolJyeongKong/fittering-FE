import Image from 'next/image';
import back from 'public/icon/left_black.svg';
import UserEditLinks from './UserEditLinks';

export default function MyPageCommon() {
  return (
    <>
      <div
        className={`z-0 bg-bean-head-color h-72 md:h-40 w-[100vw] absolute left-0`}
      ></div>

      <div className="z-10 h-72 md:h-40">
        <div className="relative py-4 text-center md:text-left md:pb-0 md:top-4">
          <Image
            className="absolute left-0 inline-block md:hidden"
            src={back}
            alt="<"
          />
          <span className="inline-block md:text-left font-bold md:text-lg">
            My Page
          </span>
        </div>
        <div className="relative top-2 md:top-8">
          <span className="font-bold text-xl md:text-2xl">
            열졍콩님, <br className="md:hidden" />
            안녕하세요
          </span>
          <span className="absolute right-0 text-custom-gray-800 font-bold underline decoration-custom-gray-800 md:hidden">
            로그아웃
          </span>
        </div>
        <UserEditLinks />
      </div>
    </>
  );
}