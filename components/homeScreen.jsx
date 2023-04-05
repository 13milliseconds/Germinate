import React from "react";
import { Container, Text, Heading, View } from "native-base";
import LogoutButton from "./logoutButton";


export default HomeScreen =  () => {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Container center safeArea>
          <Heading>
            <Text color="emerald.500">Seeds to Fruit</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            Keep track of your seeds, seedling and plant from see to fruit.
          </Text>
          <LogoutButton />
        </Container>
      </View>
}