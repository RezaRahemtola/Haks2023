import Button from "@/src/components/Button";
import {
  Table, TableCaption,
  TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr
} from '@chakra-ui/react';

const ListAssociation = () => {
  const values = [ "Cancer reaserch", "UNICEF", "Cancer reaserch", "UNICEF" ];
    return (<TableContainer width={700} mt={0}>
      <Table variant='simple'>
        <TableCaption>List of associations</TableCaption>
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
                Stack to support
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
    </TableContainer>);
}
export default ListAssociation;
