import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";

import { Layout } from "../../../Layout";

export const Turma = () => {
  const alunos = [
    {
      nome: "Matheus",
      idade: 12,
      score: 50,
    },
    {
      nome: "Jose",
      idade: 12,
      score: 50,
    },
    {
      nome: "DASD",
      idade: 12,
      score: 50,
    },
    {
      nome: "Ds",
      idade: 12,
      score: 50,
    },
    {
      nome: "DSADAS",
      idade: 12,
      score: 50,
    },
  ];
  return (
    <Layout>
      <Box height="100%" width="100%" padding="20px">
        <Heading size="md">Turma</Heading>
        <TableContainer mt="30px">
          <Table variant="simple">
            <TableCaption>Alunas da classe NOME DA TURMA</TableCaption>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Idade</Th>
                <Th isNumeric>Score</Th>
              </Tr>
            </Thead>
            <Tbody>
              {alunos.map((item) => (
                <Tr key={item.nome}>
                  <Td>{item.nome}</Td>
                  <Td>{item.idade}</Td>
                  <Td isNumeric>{item.score}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Turma;
