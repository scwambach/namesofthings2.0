export const apiVersion = process.env.NEXT_SANITY_API_VERSION || "2024-03-27";

export const dataset = assertValue(
  process.env.NEXT_SANITY_DATASET,
  "Missing environment variable: NEXT_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_SANITY_ID,
  "Missing environment variable: NEXT_SANITY_ID"
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
