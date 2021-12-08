import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";
import AppButton from "./AppButton";
export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      color="#5C7AEA"
      onClick={handleSubmit}
      style={{ flex: 0, height: 70 }}
    />
  );
}

const styles = StyleSheet.create({});
