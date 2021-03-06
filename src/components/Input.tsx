import React, { memo } from "react";

// Styling
import styles from "styles/components/input";

// Components
import { KeyboardTypeOptions, TextInput } from "react-native";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  editable: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholder: string;
  secureTextEntry?: boolean;
  loading: boolean;
}

export const Input: React.FC<Props> = memo(
  ({
    value,
    onChangeText,
    editable,
    keyboardType = "default",
    placeholder,
    secureTextEntry,
    loading,
  }): JSX.Element => {
    return (
      <TextInput
        style={[styles.input, loading && styles.disabled]}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        keyboardType={keyboardType}
        placeholder={placeholder}
        textAlign={"center"}
        secureTextEntry={secureTextEntry}
        autoCapitalize='none'
      />
    );
  },
);
