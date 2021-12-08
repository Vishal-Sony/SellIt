import { useFormikContext, validateYupSchema } from "formik";
import React from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import ImageInputList from "./ImageInputList";

export default function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const handleAdd = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imgUri) => imgUri !== uri)
    );
  };
  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {touched[name] && (
        <Text style={{ color: "red", marginLeft: 10 }}>{errors[name]}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
