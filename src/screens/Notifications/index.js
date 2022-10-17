import React from 'react';
// import { View, Text } from 'react-native';
import { VStack, HStack, Box, Button, Text, ScrollView } from 'native-base'
import { Icon } from '@rneui/base'
import { Header, ListItem } from '../../components'
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
    const navigation = useNavigation()
    return (
        <VStack safeArea flex={1}>
            <Header backBtn={() => navigation.goBack()} />
            <ScrollView>
                <VStack px={6} my={2} space={3}>
                    <Text fontSize={34}>Notifications</Text>
                    <ListItem />
                </VStack>
            </ScrollView>
        </VStack>
    );
}

export default Notifications