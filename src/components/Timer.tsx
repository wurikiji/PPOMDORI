import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {getElapsedTime} from '../functions/utils';

interface IPpomState {
    elapsed: String;
};

class PpomTimer extends React.Component<any, IPpomState>{
    started: boolean;
    timerId: number;
    startMs: number;
    constructor(props: any) {
        super(props);
        this.started = false;
        this.timerId = 0;
        this.startMs = 0;
        this.onPress = this.onPress.bind(this);
        this.state= {
            elapsed: "00:00:00.00"
        }
    }

    private onPress() {
        if (this.started) {
            this.started = false;
            clearInterval(this.timerId);
        } else {
            this.started = true;
            this.startMs = Date.now();
            this.timerId = setInterval(() => {
                let current = Date.now();
                let diff:number = current - this.startMs;
                let elapsed = getElapsedTime(diff);
                this.setState({
                    elapsed
                });
            }, 100);
        }
    }
    public render() {
        return (
            <View>
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: "center"
                    }}
                >
                    {this.state.elapsed}{"\n"}
                </Text>
                <Button title="시작" 
                    onPress={() => this.onPress()}
                />
            </View>
        );
    }
}

export default PpomTimer;