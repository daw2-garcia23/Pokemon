import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fshzzrsmpwbkaedoitwe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzaHp6cnNtcHdia2FlZG9pdHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxODAyOTAsImV4cCI6MTk5Mjc1NjI5MH0.EhvgPs8FcMA1w0wd7VDfb8d2VGbCDb9OQiNfygWhqYw'

export const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Conexion a supabase', supabase)