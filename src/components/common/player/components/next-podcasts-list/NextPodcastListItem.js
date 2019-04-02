// @flow

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styled from 'styled-components';
import FastImage from 'react-native-fast-image';

import Icon from '~/components/common/Icon';
import appStyles from '~/styles';

const Wrapper = styled(View)`
  width: 100%;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('20%')}px;
  margin-vertical: ${({ theme }) => theme.metrics.smallSize}px;
  margin-horizontal: ${({ theme }) => theme.metrics.smallSize}px;
  flex-direction: row;
`;

const TextContentWrapper = styled(View)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('61%')}px;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled(View)`
  width: 90%;
  height: 100%;
  justify-content: center;
  padding-horizontal: ${({ theme }) => theme.metrics.smallSize}px;
`;

const PodcastImage = styled(FastImage).attrs(({ uri }) => ({
  source: { uri },
}))`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('20%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('20%')}px;
  border-radius: 6px;
`;

const Title = styled(Text).attrs({
  numberOfLines: 2,
})`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  font-family: CircularStd-Black;
`;

const AuthorName = styled(Text).attrs({
  numberOfLines: 2,
})`
  margin-top: ${({ theme }) => theme.metrics.extraSmallSize}px;
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: ${({ theme }) => theme.metrics.mediumSize * 1.2}px;
  font-family: CircularStd-Bold;
`;

type AuthorProps = {
  name: string,
};

type PodcastProps = {
  imageURL: string,
  author: AuthorProps,
  title: string,
  id: string,
};

type Props = {
  removeFromPlaylist: Function,
  podcast: PodcastProps,
};

const NextPodcastListItem = ({
  removeFromPlaylist,
  podcast,
}: Props): Object => (
  <Wrapper>
    <PodcastImage
      uri={podcast.imageURL}
    />
    <TextContentWrapper>
      <TextWrapper>
        <Title>{podcast.title}</Title>
        <AuthorName>{podcast.author.name}</AuthorName>
      </TextWrapper>
      <TouchableOpacity
        onPress={() => removeFromPlaylist(podcast.id)}
        hitSlop={{
          bottom: appStyles.metrics.smallSize,
          right: appStyles.metrics.smallSize,
          left: appStyles.metrics.smallSize,
          top: appStyles.metrics.smallSize,
        }}
      >
        <Icon
          name="close"
          size={20}
        />
      </TouchableOpacity>
    </TextContentWrapper>
  </Wrapper>
);

export default NextPodcastListItem;
