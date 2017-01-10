import React, { PropTypes } from 'react';
import styled from 'styled-components';

const TweetList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 60%;
`;

const Tweet = styled.li`
  list-style: none;
  width: 60%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-bottom: none;
  padding: 2em;
`;

const Author = styled.span`
  font-size: 30px;
  margin-bottom: .3em;
`;

const Content = styled.span`

`;

const drawTweets = tweets => tweets.map(tweet =>
  <Tweet key={tweet.id}>
    <Author>{tweet.author}</Author>
    <Content>{tweet.tweet}</Content>
  </Tweet>
);

const TweetsContainer = ({ tweets }) =>
  <TweetList>
    {drawTweets(tweets)}
  </TweetList>
;

TweetsContainer.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default TweetsContainer;
