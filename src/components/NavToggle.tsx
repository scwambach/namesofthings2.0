"use client";
import { useState } from "react";
import {
  Text,
  Row,
  Heading,
  Br,
  IconButton,
  PixelIcon,
  Modal,
  Header,
  Spacer,
  ModalContent,
  Footer,
  Button,
} from "nes-ui-react";
import Link from "next/link";

export const NavToggle = ({ theRest, firstFiveThings }: any) => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  return (
    <>
      <IconButton
        borderInverted
        color="primary"
        onClick={() => setDemoDialogOpen(true)}
      >
        <Text size="small">Open Modal</Text>
        <PixelIcon name="pixelicon-checkmark" size="small" />
      </IconButton>

      <Modal open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)}>
        <Header>
          <Spacer />
          <Heading dense>All Types of Things</Heading>
          <Spacer />
          <IconButton
            color="error"
            size="small"
            onClick={() => setDemoDialogOpen(false)}
          >
            <PixelIcon name="pixelicon-close" size="small" />
          </IconButton>
        </Header>
        <ModalContent>
          <Text className="py-8" size="large">
            The main things:
          </Text>
          <ul className="flex flex-wrap gap-4">
            {firstFiveThings.map((type: any) => (
              <li key={type}>
                <Button color="primary">
                  <Link href={`/list?typeOfName=${type}`}>{type}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <Text className="py-8" size="large">
            The rest of the things:
          </Text>
          <ul className="flex flex-wrap gap-4">
            {theRest.map((type: any) => (
              <li key={type}>
                <Button color="warning">
                  <Link href={`/list?typeOfName=${type}`}>{type}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </ModalContent>
        <Footer>
          <IconButton color="error" onClick={() => setDemoDialogOpen(false)}>
            <PixelIcon name="pixelicon-close" size="small" />
            <Text size="small">Cancel</Text>
          </IconButton>
          <Spacer />
          <IconButton color="success" onClick={() => setDemoDialogOpen(false)}>
            <Text size="small">Accept</Text>
            <PixelIcon name="pixelicon-checkmark" size="small" />
          </IconButton>
        </Footer>
      </Modal>
    </>
  );
};
