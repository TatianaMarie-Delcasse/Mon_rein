// server.mjs
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const GEMINI_API_KEY = "AIzaSyBTxUbZv6Trmslc23Bpyrfd9QRwP9NNNkk"; // mets-la dans un .env plus tard

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message manquant" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("Réponse complète Gemini:", JSON.stringify(data, null, 2)); // <= AJOUTÉ

    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || "Pas de réponse";
    res.json({ answer });
  } catch (error) {
    console.error("Erreur API Gemini:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
