import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { format, isValid as isValidDate } from "date-fns";

import Input from "./Input";
import Button from "./Button";
import colors from "../constants/colors";

const ExpensesForm = ({
  confirmButtonLabel,
  cancelHandler,
  confirmHandler,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? format(defaultValues.date, "yyyy-MM-dd") : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  const inputHandler = (valueInputProperty, text) => {
    setInputs((prev) => {
      return {
        ...prev,
        [valueInputProperty]: {
          value: text,
          isValid: true,
        },
      };
    });
  };

  const submitHandler = () => {
    const expense = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };
    const amountIsValid = !isNaN(expense.amount) && expense.amount >= 0;
    const dateIsValid = isValidDate(expense.date);
    const descriptionIsValid = expense.description.trim().length > 0;
    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((prev) => {
        return {
          amount: {
            value: prev.amount.value,
            isValid: amountIsValid,
          },
          date: {
            value: prev.date.value,
            isValid: dateIsValid,
          },
          description: {
            value: prev.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    confirmHandler(expense);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          invalid={!inputs.amount.isValid}
          label="Amount"
          textInputConfig={{
            keyboardType: "number-pad",
            onChangeText: inputHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          label="Date"
          textInputConfig={{
            keyboardType: "number-pad",
            onChangeText: inputHandler.bind(this, "date"),
            value: inputs.date.value,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          onChangeText: inputHandler.bind(this, "description"),
          value: inputs.description.value,
          multiline: true,
        }}
      />
      {formIsInvalid && <Text style={styles.errorText}>Invalid data</Text>}
      <View style={styles.buttonContainer}>
        <Button pressHandler={cancelHandler} mode="flat" style={styles.button}>
          Cancel
        </Button>
        <Button pressHandler={submitHandler} style={styles.button}>
          {confirmButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  title: {
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 21,
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    color: colors.error500,
    textAlign: "center",
    marginBottom: 8,
  },
});

export default ExpensesForm;
