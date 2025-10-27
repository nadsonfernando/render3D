import { useCallback, useMemo } from 'react';

import { ActivityIndicator, ListRenderItem } from 'react-native';

import { ProductCard } from '@app/modules/product/presentation/components/card';

import { useProductsStoreQuery } from '@app/modules/product/store/query/products';
import { ProductEntity } from '@app/modules/product/domain/entities/product';
import { Header } from '@app/modules/product/presentation/screens/list/header';

import * as S from './index.styles';

export function ProductListScreen() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
    isLoading,
    isError,
  } = useProductsStoreQuery();

  const items = useMemo(() => {
    return data?.pages.flatMap(page => page.products) ?? [];
  }, [data]);

  const renderItem = useCallback<ListRenderItem<ProductEntity>>(({ item }) => {
    return <ProductCard product={item} />;
  }, []);

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const ListFooter = useMemo(() => {
    if (!isFetchingNextPage) return null;

    return <ActivityIndicator />;
  }, [isFetchingNextPage]);

  return (
    <S.Wrapper>
      <Header />

      <S.List
        data={items}
        renderItem={renderItem}
        refreshing={isRefetching}
        onRefresh={refetch}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={ListFooter}
      />
    </S.Wrapper>
  );
}
