import Button from "@/src/components/Button";
import { useDappContext } from "@/src/contexts/dapp";
import convertTezosToUsd from "@/src/utils/convert";
import getBalanceAssociation from "@/src/utils/getBalanceAssociation";
import { Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const AmountWithdraw = () => {
  const { storage } = useDappContext();
  const value = getBalanceAssociation(storage);
  const [dollarValue, setDollarValue] = useState(0.0);

  useEffect(() => {
    const fetchDollarValue = async () => {
      const valueInDollars = await convertTezosToUsd(value);
      if (valueInDollars === undefined)
        return;
      setDollarValue(valueInDollars);
    };

    fetchDollarValue();
  }, []);

  return (
    <VStack>
      <Text fontSize="50px">
        {value.toString()} <Text as='u'>XTZ</Text>
      </Text>
      <Button variant="special" size="xl" id="ipc-landing-navbar-start-button">
        Claim
      </Button>
      <Text fontSize="15px" mt="9px">
        ( {dollarValue.toFixed(2)} $ )
      </Text>
    </VStack>
  );
};

export default AmountWithdraw;