import {
  ChangeEvent,
  FC,
  FormEvent,
  SyntheticEvent,
  useCallback,
  useState,
} from "react";

import {
  Autocomplete,
  Button,
  createFilterOptions,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";

import Dialog from "@app/components/Dialog";

type TCreateClientModalProps = {
  open: boolean;
  onClose: () => void;
};

type TCreateClientFormState = {
  name: string;
  orders: string[];
};

type TCreateClientFormError = {
  field: keyof TCreateClientFormState;
  message: string;
};

type TCreateClientForm = {
  state: TCreateClientFormState;
  error: TCreateClientFormError | null;
};

const filter = createFilterOptions<string>();

const CreateClientModal: FC<TCreateClientModalProps> = ({ onClose, open }) => {
  const [form, setForm] = useState<TCreateClientForm>({
    state: {
      name: "",
      orders: [],
    },
    error: null,
  });

  const onNameChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      state: { ...prev.state, name: evt.target.value },
    }));
  }, []);

  const onOrdersChange = useCallback(
    (_evt: SyntheticEvent, value: string[]) => {
      setForm((prev) => ({ ...prev, state: { ...prev.state, orders: value } }));
    },
    []
  );

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (form.state.name.length < 3) {
      return setForm((prev) => ({
        ...prev,
        error: {
          field: "name",
          message:
            "Name length should be greater than 3 and less than 100 symbols",
        },
      }));
    }

    if (!form.state.orders.length) {
      return setForm((prev) => ({
        ...prev,
        error: { field: "orders", message: "Should contain atleast 1 order" },
      }));
    }

    const isValidOrdersLength = form.state.orders.every(
      (o) => o.length >= 3 && o.length < 150
    );

    if (!isValidOrdersLength) {
      return setForm((prev) => ({
        ...prev,
        error: {
          field: "orders",
          message:
            "Order length should be greater than 3 and less than 150 symbols",
        },
      }));
    }

    setForm((prev) => ({
      ...prev,
      error: null,
    }));

    console.log("There");
  };

  return (
    <Dialog onClose={onClose} open={open} title="Create client">
      <form
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        onSubmit={onFormSubmit}
      >
        <FormControl error={form.error?.field === "name"}>
          <TextField
            onChange={onNameChange}
            value={form.state.name}
            placeholder="Enter client name"
          />
          {form.error?.field === "name" && (
            <FormHelperText>{form.error.message}</FormHelperText>
          )}
        </FormControl>
        <FormControl error={form.error?.field === "orders"}>
          <Autocomplete
            multiple
            options={form.state.orders}
            onChange={onOrdersChange}
            renderInput={(params) => (
              <TextField {...params} placeholder="Enter order" />
            )}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;

              const isExisting = options.some(
                (option) => inputValue === option
              );

              if (inputValue !== "" && !isExisting) {
                filtered.push(inputValue);
              }

              return filtered;
            }}
          />
          {form.error?.field === "orders" && (
            <FormHelperText>{form.error.message}</FormHelperText>
          )}
        </FormControl>
        <Button type="submit">Create</Button>
      </form>
    </Dialog>
  );
};

export default CreateClientModal;
