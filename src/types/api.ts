export type TApiProps<S = unknown, E = unknown> = {
  onSuccess?: (data?: S) => void;
  onError?: (error?: E) => void;
};
