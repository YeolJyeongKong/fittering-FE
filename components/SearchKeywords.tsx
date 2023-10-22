'use client';

import { Malls, Products } from '@/service/search';
import SearchKeyword from './SearchKeyword';

type Props = {
  keyword: string;
  keywords:
    | {
        type: 'malls';
        data: Malls[];
      }
    | {
        type: 'products';
        data: Products[];
      };
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchKeywords({
  keyword,
  keywords: { type, data },
  setSearchInput,
  setKeyword,
}: Props) {
  if (data.length === 0) return null;

  return (
    <div>
      <span className="block text-xs pl-4 py-1">
        {type === 'malls' ? '쇼핑몰' : '상품'}
      </span>
      <ul className="">
        {data.map((result) => (
          <SearchKeyword
            key={result.id}
            href={`/${type}/${result.id}`}
            name={result.name}
            image={result.image}
            keyword={keyword}
            setSearchInput={setSearchInput}
            setKeyword={setKeyword}
          />
        ))}
      </ul>
    </div>
  );
}