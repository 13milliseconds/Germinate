import React from "react";
import { Container, Text, Heading, View } from "native-base";

export default SeedsScreen =  () => {

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Container center safeArea>
          <Heading>
            <Text color="emerald.500"> Seeds</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            Keep track of your seeds, seedling and plant from see to fruit.
          </Text>
        </Container>
      </View>
}