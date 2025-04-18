import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ezkvjowmorpovtspjngs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6a3Zqb3dtb3Jwb3Z0c3BqbmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTA3MTYsImV4cCI6MjA2MDUyNjcxNn0.VuKXFt2qoJl98FDeLA8wsj2J_80Ypun6KhS4L7qYClk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
