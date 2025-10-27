import { useCallback, useMemo } from 'react';

import { ListRenderItem } from 'react-native';

import { ProductCard } from '@app/modules/product/presentation/components/card';

import { useProductsStoreQuery } from '@app/modules/product/store/query/products';
import { ProductEntity } from '@app/modules/product/domain/entities/product';

import * as S from './index.styles';

export function ProductListScreen() {
  const query = useProductsStoreQuery();

  const items = useMemo(() => {
    return query.data?.pages.flatMap(page => page.products) ?? [];
  }, [query.data]);

  const renderItem = useCallback<ListRenderItem<ProductEntity>>(({ item }) => {
    return <ProductCard product={item} />;
  }, []);

  return (
    <S.Wrapper>
      <S.List data={items} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </S.Wrapper>
  );
}
