import React from "react";
import { Container, Text, Heading, Button, View } from "native-base";

export default HomeScreen =  () => {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Container center safeArea>
          <Heading>
            <Text color="emerald.500"> Germinate</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            Keep track of your seeds, seedling and plant from see to fruit.
          </Text>
          <Button>Let's get started</Button>
        </Container>
      </View>
}