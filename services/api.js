import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://nwwyvuuetxxpxrrhjyho.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53d3l2dXVldHh4cHhycmhqeWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MzIyOTUsImV4cCI6MjA0NjQwODI5NX0.ZWoBsGLlvPadqwkVJYg-Gf4fvVyIaxqIxKcQnGEziLs",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53d3l2dXVldHh4cHhycmhqeWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MzIyOTUsImV4cCI6MjA0NjQwODI5NX0.ZWoBsGLlvPadqwkVJYg-Gf4fvVyIaxqIxKcQnGEziLs"
    }
})