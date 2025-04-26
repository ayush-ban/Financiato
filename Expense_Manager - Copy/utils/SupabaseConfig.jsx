import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://lbxmlufjdeclrykwvolr.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxieG1sdWZqZGVjbHJ5a3d2b2xyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzMDg0MTcsImV4cCI6MjA0Njg4NDQxN30.DearjvJkJ0XpaeHEP9cMZoDBweGDwqo9gRKzuXX59uE'
)
