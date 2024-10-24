// src/pages/api/items.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dynamoDB from "../../utils/dynamoDb";

const tableName = 'Users'; // Replace with your table name

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Retrieve items from DynamoDB
    try {
      const params = {
        TableName: tableName,
      };

      const data = await dynamoDB.scan(params).promise();
      res.status(200).json(data.Items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching items' });
    }
  } else if (req.method === 'POST') {
    // Create a new item in DynamoDB
    const { id, name } = req.body;

    if (!id || !name) {
      return res.status(400).json({ error: 'ID and Name are required' });
    }

    try {
      const params = {
        TableName: tableName,
        Item: { id, name },
      };

      await dynamoDB.put(params).promise();
      res.status(201).json({ message: 'Item created' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating item' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
