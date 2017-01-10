import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import TweetsContainer from '../TweetsContainer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
`;

const App = ({ tweets }) =>
<MainContainer>
  <TweetsContainer tweets={tweets} />
</MainContainer>
;

App.propTypes = {
  tweets: PropTypes.array.isRequired,
};

const mapDispatchToProps = ({ tweets }) => ({
  tweets,
});

export default connect(mapDispatchToProps)(App);
