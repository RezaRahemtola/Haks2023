import Button from "@/src/components/Button";
import { Text, VStack } from '@chakra-ui/react';

const AmountWithdraw = () => {
  const value = 53.2;
  const dollarValue = 47.56;

    return ( <VStack>
              <Text fontSize="50px">{value} <Text as='u'>XTZ</Text></Text>
              <Button
                variant="special"
                size="xl"
                id="ipc-landing-navbar-start-button"
              >
                Claim
              </Button>
              <Text fontSize="15px" mt="9px"> ( {dollarValue} $ )</Text>
            </VStack>);
}

export default AmountWithdraw;
