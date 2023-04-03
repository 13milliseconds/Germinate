import React from "react";
import { Container, Text, Heading, Button, View } from "native-base";

export default SettingsScreen =  () => {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Container center safeArea>
          <Heading>
            <Text color="emerald.500"> Settings</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            This is a page
          </Text>
        </Container>
      </View>
}