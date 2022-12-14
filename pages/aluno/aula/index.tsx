import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AskAndAnswerBlock } from "../../../components/AskAndAnswerBlock";
import { EllipseBlock } from "../../../components/EllipseBlock";
import { StatusIndicator } from "../../../components/StatusIndicator";
import { useAsk } from "../../../hooks/useAsk";
import { useStudentTopics } from "../../../hooks/useStudentTopics";
import { useTopics } from "../../../hooks/useTopics";
import { Layout } from "../../../Layout";

export const Aula = () => {
  const { data: studentTopics } = useStudentTopics();
  const { data: askData } = useAsk();
  const fakeObj = {
    name: "Matheus",
    aulaIsOn: true,
    isLoading: false,
  };

  const topics = {
    title: "Numeros pares",
    isSelect: true,
  };

  return (
    <Layout>
      <Box width="100%">
        {fakeObj.isLoading ? (
          <Spinner />
        ) : (
          <Box height="100%" width="100%" padding="20px">
            <Heading size="md">Olá {fakeObj.name}</Heading>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              alignContent="center"
            >
              <VStack w="33%">
                <Heading>Topicos</Heading>
                {studentTopics?.map((item) => (
                  <Text key={item.id}>{item.title}</Text>
                ))}
              </VStack>
              {askData ? (
                <AskAndAnswerBlock askData={askData} />
              ) : (
                <p>Aguarde o professor</p>
              )}

              <HStack w="33%">
                <StatusIndicator askIsOn={fakeObj.aulaIsOn} />
              </HStack>
            </Flex>
          </Box>
        )}
      </Box>
      <EllipseBlock />
    </Layout>
  );
};

export default Aula;
