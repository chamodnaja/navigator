import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Friend from '../components/profile/friend';

export default function Profile() {
  return (
      <ScrollView>
        <View style={styles.container}>
            <Friend/>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
