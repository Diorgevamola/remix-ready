// Placeholder for Supabase client
// This is a simplified version without actual Supabase connection
export const supabase = {
  from: (table: string) => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
  }),
  storage: {
    from: (bucket: string) => ({
      upload: () => Promise.resolve({ data: null, error: null }),
      getPublicUrl: () => ({ data: { publicUrl: '' } }),
    }),
  },
  functions: {
    invoke: () => Promise.resolve({ data: null, error: null }),
  },
};
