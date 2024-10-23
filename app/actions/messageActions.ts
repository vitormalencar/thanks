"use server";

import { sql } from "@vercel/postgres";

export type Message = {
  id: number;
  name: string;
  message: string;
  image?: string | null;
};

/**
 * Adds a new message to the database.
 * @param name - The name of the user.
 * @param message - The message content.
 * @param image - (Optional) Image URL.
 * @returns An object indicating success or failure.
 */
export async function addMessage(
  name: string,
  message: string,
  image?: string
): Promise<{ success: boolean; error?: string }> {
  try {
    await sql`
      INSERT INTO messages (name, message, image)
      VALUES (${name}, ${message}, ${image || null});
    `;
    return { success: true };
  } catch (error: any) {
    console.error("Error adding message:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Fetches all messages from the database.
 * @returns An array of Message objects.
 */
export async function getMessages(): Promise<Message[]> {
  try {
    const { rows } = await sql<Message[]>`
      SELECT id, name, message, image
      FROM messages
      ORDER BY id DESC;
    `;
    return rows;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}
