import { FontAwesome5 } from "@expo/vector-icons";
import { Icon, Input } from "native-base";
import { useState } from "react";

const CustomInput = ({ placeholder, name, type, style, maxLength }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {type === "password" ? (
        <Input
          style={style}
          maxLength={maxLength}
          type={show ? "text" : "password"}
          rightElement={
            <Icon
              onPress={() => setShow(!show)}
              as={FontAwesome5}
              name={show ? "eye" : "eye-slash"}
              size={5}
              mr="2"
              color="muted.400"
            />
          }
          placeholder={placeholder}
        />
      ) : (
        <Input placeholder={placeholder} style={style} maxLength={maxLength} />
      )}
    </>
  );
};

export default CustomInput;
