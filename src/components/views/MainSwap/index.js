import React from 'react';
import { TabView } from '@components/widgets';
import { ChangeCrypto } from '..';
import { HeaderIcon } from '@components/widgets';
import { colors } from '@common/styles';
import { Languages as LanguagesActions } from '@common/actions';
import { inject, observer } from 'mobx-react';

@inject('languages')
@observer
export class MainSwap extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
          title: navigation.getParam('title'),
      })

      render() {

        return (
          <ChangeCrypto navigation = {this.props.navigation} gasParam = {this.props.navigation.getParam('gasParam')} togethers = {this.props.navigation.getParam('togethers')} />
          );
        }
}
