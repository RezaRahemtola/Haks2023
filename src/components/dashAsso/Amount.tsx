import Button from "@/src/components/Button";
import { useDappContext } from "@/src/contexts/dapp";
import getBalanceAssociation from "@/src/utils/getBalanceAssociation";
import { Text, VStack } from '@chakra-ui/react';

const AmountWithdraw = () => {
  const dollarValue = 47.56;
  const { storage } = useDappContext();
	const value = getBalanceAssociation(storage);

    return ( <VStack>
              <Text fontSize="50px">{value.toString()} <Text as='u'>XTZ</Text></Text>
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
