import express from "express";
import cors from "cors";
import { supabase } from "./supabase.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173", // local dev
    "https://wander-mesh-replica.vercel.app" // your frontend
  ],
  methods: ["GET", "POST"],
}));
app.options('*', cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const { name, phone, instaId, trip, whyJoin, occupation, gender } = req.body;

    const { error } = await supabase.from("leads").insert([
      {
        name,
        phone,
        insta_id: instaId,
        trip,
        why_join: whyJoin,
        occupation,
        gender,
        status: "Exploring"
      }
    ]);

    if (error) throw error;

    res.json({ success: true });

  } catch (err: any) {
  console.error("FULL ERROR:", err);
  res.status(500).json({ error: err.message || err });
}
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});