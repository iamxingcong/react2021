import React, {
    Component
} from 'react';
import {
    ActivityIndicator,
    FlatList,
    Text,
    View
} from 'react-native';

export default class Netnews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch('http://172.20.10.8:3000/api/wp_terms')
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json.message

                });
            })
            .catch((error) => console.error(error))
            .finally(() => {
                this.setState({
                    isLoading: false
                });
            });
    }


    componentWillUnmount() {
        this.setState = function() {
            return null;
        };
    }

    render() {
        const {
            data,
            isLoading
        } = this.state;

        return (
            <View style={{  padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ name }, index) => name +''}
            renderItem={({ item }) => (
              <Text>{item.name}</Text>
            )}
          />
        )}
      </View>
        );
    }
};