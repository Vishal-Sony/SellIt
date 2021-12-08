import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";

export default function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={(text) => {
          setFieldValue(name, text);
        }}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {touched[name] && (
        <Text style={{ color: "red", marginLeft: 10 }}>{errors[name]}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
