import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems={"center"}
      flexDir="column"
      p={3}
      bg="#1f1b1b"
      w={{ base: "100%", md: "68%" }}
      // borderRadius="lg"
      // borderWidth="1px"
      // opacity={"60%"}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
