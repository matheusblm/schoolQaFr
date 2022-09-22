import { Box, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { MdSettings, MdOutlineLibraryBooks } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IconType } from "react-icons";
import Link from "next/link";

type OptionsType = {
  title: string;
  link: string;
  icon: IconType;
};

export const Menu = () => {
  const options: OptionsType[] = [
    {
      title: "Aula",
      link: "aluno/aula",
      icon: MdOutlineLibraryBooks,
    },
    {
      title: "Turma",
      link: "aluno/turma",
      icon: FaUserFriends,
    },
    {
      title: "Configurações",
      link: "configuracoes",
      icon: MdSettings,
    },
  ];

  return (
    <HStack justifyContent="space-evenly" borderRadius="10px">
      {options.map((option) => (
        <Link href={option.link} key={option.link}>
          <Box
            _hover={{ opacity: "0.5", transtition: "0.5", cursor: "pointer" }}
          >
            <VStack>
              <Icon as={option.icon} />
            </VStack>
            <Text>{option.title}</Text>
          </Box>
        </Link>
      ))}
    </HStack>
  );
};
