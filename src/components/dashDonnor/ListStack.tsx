import Button from "@/src/components/Button";
import {
  Table, TableCaption,
  TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr
} from '@chakra-ui/react';

const ListStack = () => {
  const values = [ "Cancer reaserch", "UNICEF", "Cancer reaserch", "UNICEF" ];
    return (<div>
      <Text mt={10} size="2xl" variant="gradient" id="ipc-landing-navigation-name">
        Running stacking:
      </Text>
      <TableContainer width={700} mt={10}>
      <Table variant='simple'>
        <TableCaption>Stacking list</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          { values.map((element, index) => (
            <Tr key={index}>
            <Td><Text as='b'>{element}</Text></Td>
            <Td isNumeric>
              <Button
                variant="special"
                size="xl"
                buttonType="left-icon"
                id="ipc-landing-navbar-start-button"
              >
                Withdraw
              </Button>
            </Td>
          </Tr>)) }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Name</Th>
            <Th isNumeric></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer></div>);
}
export default ListStack;
