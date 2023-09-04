import { customFetch } from '@/utils/customFetch';

export type MallRankingPreview = {
  id: number;
  name: string;
  image: string;
};

export type MallPreview = {
  id: number;
  name: string;
  image: string;
  description: string;
  view: number;
  isFavorite: boolean;
  products: {
    productId: number;
    productImage: string;
  }[];
};

export type Mall = {
  id: number;
  name: string;
  url: string;
  image: string;
  description: string;
  isFavorite: boolean;
};

export async function getRankedMallPreview(): Promise<MallRankingPreview[]> {
  const response = await customFetch('/malls/rank/preview');
  if (!response.ok) {
    return [];
  }
  return response.json();
}

export async function getMalls(
  filter: 'rank' | 'favorite_malls'
): Promise<MallPreview[]> {
  const response = await customFetch(`/malls/${filter}`);
  if (!response.ok) {
    return [];
  }
  return response.json();
}
