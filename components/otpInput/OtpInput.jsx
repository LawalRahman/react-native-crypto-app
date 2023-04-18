import { Box, Flex, Input } from "native-base";
import { useRef } from "react";

const OtpInput = ({ isLoading, onComplete }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  return (
    <>
      <Flex gap={5} direction="row" justifyContent={"space-evenly"}>
        <Box w={60}>
          <Input
            autoFocus={true}
            style={{ textAlign: "center" }}
            type="text"
            maxLength={1}
            ref={ref1}
            onChangeText={(val) => {
              if (val) ref2.current.focus();
            }}
            keyboardType="numeric"
          />
        </Box>
        <Box w={60}>
          <Input
            style={{ textAlign: "center" }}
            type="text"
            maxLength={1}
            ref={ref2}
            onChangeText={(val) => {
              if (val) ref3.current.focus();
            }}
            keyboardType="numeric"
          />
        </Box>
        <Box w={60}>
          <Input
            style={{ textAlign: "center" }}
            type="text"
            maxLength={1}
            ref={ref3}
            onChangeText={(val) => {
              if (val) ref4.current.focus();
            }}
            keyboardType="numeric"
          />
        </Box>
        <Box w={60}>
          <Input
            style={{ textAlign: "center" }}
            type="text"
            maxLength={1}
            ref={ref4}
            onChangeText={(val) => {
              if (val) onComplete();
            }}
            keyboardType="numeric"
          />
        </Box>
      </Flex>
    </>
  );
};

export default OtpInput;
