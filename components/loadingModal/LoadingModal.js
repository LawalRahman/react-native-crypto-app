import { Center, HStack, Heading, Modal, Spinner } from "native-base";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

const LoadingModal = (props, ref) => {
  const [showModal, setShowModal] = useState(false);

  const open = useCallback(() => {
    setShowModal(true);
  }, []);
  const close = useCallback(() => {
    setShowModal(false);
  }, []);
  useImperativeHandle(ref, () => ({
    open: () => open(),
    close: () => close(),
  }));
  return (
    <Center>
      <Modal
        isOpen={showModal}
        onClose={close}
        _backdrop={{
          bg: "black",
        }}
      >
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <HStack space={2} alignItems="center" justifyContent={"center"}>
              <Spinner accessibilityLabel="Loading" size={"lg"} />
              <Heading color="primary.500" fontSize="md">
                Loading
              </Heading>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default forwardRef(LoadingModal);
