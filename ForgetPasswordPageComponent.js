import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import LoginPageComponent from './LoginPageComponent';

export default class ForgetPasswordPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
    return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>忘记密码返回</Text>
                </TouchableOpacity>
            </View>
    );
    }
}