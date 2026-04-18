import { createActor } from "@/backend";
import type { ContactInput, ContactSubmission } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useSubmitContactForm() {
  const { actor, isFetching } = useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<ContactSubmission, Error, ContactInput>({
    mutationFn: async (input: ContactInput) => {
      if (!actor) throw new Error("Actor not available");
      return (
        actor as unknown as {
          submitContactForm: (i: ContactInput) => Promise<ContactSubmission>;
        }
      ).submitContactForm(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
    meta: { actorReady: !!actor && !isFetching },
  });
}

export function useListContactSubmissions() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return (
        actor as unknown as {
          listContactSubmissions: () => Promise<ContactSubmission[]>;
        }
      ).listContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}
