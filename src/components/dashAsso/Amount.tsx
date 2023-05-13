import Button from "@/src/components/Button";
import { useDappContext } from "@/src/contexts/dapp";
import convertTezosToUsd from "@/src/utils/convert";
import getBalanceAssociation from "@/src/utils/getBalanceAssociation";
import claimGifts from "@/src/utils/claimGifts";
import { Text, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const AmountWithdraw = () => {
  const { storage, Tezos, address } = useDappContext();
  const [value, setValue] = useState(0.0);
  const [dollarValue, setDollarValue] = useState(0.0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedValue = await getBalanceAssociation(storage, Tezos, address);
      if (fetchedValue === undefined) return;
      setValue(fetchedValue);
    };

    fetchData();
  }, [storage, Tezos, address]);

  useEffect(() => {
    const fetchDollarValue = async () => {
      if (value === null) return;

      const valueInDollars = await convertTezosToUsd(value);
      if (valueInDollars === undefined) return;

      setDollarValue(valueInDollars);
    };

    fetchDollarValue();
  }, [value]);

  const onClaimGifts = async () => {
    // recupere la variable association avec en clé l'addresse du wallet de l'association
    // si il y a une valeur c'est bien qu'elle est register
    // Je recupère le svalueInDollarsmart contract et je claim le gift

    const contractAddress = storage.associations.get(address);
    if (contractAddress === undefined) return;
    const contract = await Tezos.wallet.at(contractAddress);
    await claimGifts(contract);
  }

  return (
    <VStack>
      <Text fontSize="50px">
        {value.toString()} <Text as='u'>XTZ</Text>
      </Text>
      <Button variant="special" size="xl" onClick={onClaimGifts}>
        Claim
      </Button>
      <Text fontSize="15px" mt="9px">
        ( {dollarValue.toFixed(2)} $ )
      </Text>
    </VStack>
  );
};

export default AmountWithdraw;