import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://osblcogbuslhwrlmfeei.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zYmxjb2didXNsaHdybG1mZWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzOTkzMzAsImV4cCI6MjAwNjk3NTMzMH0.nFbqBBYR0uAKXh78YWW4shIXbNEuw3j232fXEztrj8s');