import React, { useState } from "react";
import { Box, Heading, Input, Button, Stack, Table, Thead, Tbody, Tr, Th, Td, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [gameName, setGameName] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [games, setGames] = useState([]);

  const handleAddGame = () => {
    if (gameName && playerName) {
      const newGame = {
        id: Date.now(),
        name: gameName,
        player: playerName,
        date: new Date().toLocaleDateString(),
      };
      setGames([...games, newGame]);
      setGameName("");
      setPlayerName("");
    }
  };

  const handleDeleteGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <Box maxWidth="800px" margin="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Board Game Tracker
      </Heading>
      <Flex mb={8}>
        <Input placeholder="Game Name" value={gameName} onChange={(e) => setGameName(e.target.value)} mr={4} />
        <Input placeholder="Player Name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} mr={4} />
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddGame}>
          Add Game
        </Button>
      </Flex>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Game Name</Th>
            <Th>Player Name</Th>
            <Th>Date</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {games.map((game) => (
            <Tr key={game.id}>
              <Td>{game.name}</Td>
              <Td>{game.player}</Td>
              <Td>{game.date}</Td>
              <Td>
                <IconButton icon={<FaTrash />} aria-label="Delete Game" onClick={() => handleDeleteGame(game.id)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Index;
