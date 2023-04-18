import { FormControl, Text } from "native-base";
import OtpInput from "../otpInput/OtpInput";
import { useRef, useState } from "react";
import LoadingModal from "../loadingModal/LoadingModal";
import { useRouter } from "expo-router";

const Otp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const onComplete = () => {
    setIsLoading(true);
    openLoader();
    setTimeout(() => {
      setIsLoading(false);
      closeLoader();
      router.replace("verificationSuccess");
    }, 2000);
  };
  const openLoader = () => ref.current && ref.current.open();
  const closeLoader = () => ref.current && ref.current.close();
  return (
    <>
      <Text fontSize={30} textAlign={"center"} mt={50}>
        Please enter the code
      </Text>
      <Text fontSize={10} textAlign={"center"} mt={5}>
        We sent a code to your email address
      </Text>
      <FormControl mt={50}>
        <OtpInput onComplete={onComplete} isLoading={isLoading} />
      </FormControl>
      <LoadingModal ref={ref} />
    </>
  );
};

export default Otp;
