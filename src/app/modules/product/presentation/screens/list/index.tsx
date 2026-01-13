import { useCallback } from 'react';

import { ListRenderItem } from 'react-native';

import { ProductCard } from '@app/modules/product/presentation/components/card';

import { ProductEntity } from '@app/modules/product/domain/entities/product';
import { Header } from '@app/modules/product/presentation/screens/list/header';

import * as S from './index.styles';
import { useProductsStore } from '@app/modules/product/hooks/store/product.store';

export function ProductListScreen() {
  const { data } = useProductsStore();

  const renderItem = useCallback<ListRenderItem<ProductEntity>>(({ item }) => {
    return <ProductCard product={item} />;
  }, []);

  return (
    <S.Wrapper>
      <Header />

      <S.List data={data} renderItem={renderItem} keyExtractor={item => item.id} />
    </S.Wrapper>
  );
}
