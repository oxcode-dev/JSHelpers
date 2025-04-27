import { useQueryClient } from "@tanstack/vue-query";

export const baseConfig = {
  staleTime: 1000 * 60 * 5,
  cacheTime: 1000 * 60 * 5,
  refetchOnWindowFocus: false,
  refetchOnMount: false,
  refetchOnReconnect: false,
  refetchInterval: false,
  refetchIntervalInBackground: false,
  retry: 0,
  retryDelay: 1000,
};

export const mutationOptions = (cacheKey) => ({
  onSettled: () => queryClient.invalidateQueries(cacheKey),
  onError: (error, _newData, rollback) => {
    console.log(error);
    if (rollback) rollback();
  },
  onMutate: (newData) => {
    const previousData = queryClient.getQueryData(cacheKey);

    if (previousData) {
      queryClient.setQueryData(cacheKey, (old) => [...old, newData]);
    }

    return () => queryClient.setQueryData(cacheKey, previousData);
  },
});
