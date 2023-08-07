import React, { ReactElement, ReactNode } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { User } from "@/models/User";
import Link from "next/link";
function UserSearchModal({
  isOpen,
  onClose,
  user,
}: {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}): ReactElement {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{user?.username}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <List>
            <ButtonGroup>
              <Button as={Link} href={`/message/${user?.email}`}>
                Message
              </Button>
              <Button>Add to Project</Button>
              <Button>Pin</Button>
            </ButtonGroup>
          </List>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default UserSearchModal;
