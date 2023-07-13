import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import { createClient, Photo, PhotosWithTotalResults } from 'pexels';
import ImageContainer from 'components/molecules/ImageContainer/ImageContainer';
import { ActivityIndicator, RefreshControl } from 'react-native';
import { API_KEY, NUMBER_PER_PAGE, queryType } from 'utils/consts';

const client = createClient(API_KEY);

const ImagesFeed = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [images, setImages] = useState<Photo[]>([]);
  const pageRef = useRef(0);
  const onEndReachedCalledDuringMomentum = useRef(true);

  const loadNext = () => {
    if (!onEndReachedCalledDuringMomentum.current) {
      return;
    }
    queryImages();
    onEndReachedCalledDuringMomentum.current = false;
  };

  const queryImages = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = (await client.photos.search({
        query: queryType,
        per_page: NUMBER_PER_PAGE,
        page: pageRef.current,
      })) as PhotosWithTotalResults;

      if (pageRef.current === 0) {
        setImages(response.photos);
      } else {
        setImages(prev => [...prev, ...response.photos]);
      }

      pageRef.current++;
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [setImages]);

  useEffect(() => {
    queryImages();
  }, [queryImages]);

  const onRefresh = async () => {
    try {
      setIsRefreshing(true);
      pageRef.current = 0;
      await queryImages();
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setIsRefreshing(false), 1000);
    }
  };

  return (
    <FlashList
      data={images}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      renderItem={({ item }) => <ImageContainer photo={item} />}
      onEndReached={loadNext}
      onEndReachedThreshold={0.2}
      estimatedItemSize={500}
      keyExtractor={item => String(item.id)}
      onMomentumScrollBegin={() => {
        onEndReachedCalledDuringMomentum.current = true;
      }}
      ListFooterComponent={
        isLoading ? <ActivityIndicator color="black" /> : null
      }
    />
  );
};

export default ImagesFeed;
