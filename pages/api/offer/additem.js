import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient();
  try {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Only POST method allowed" });
    } else {
      const additem_response = await prisma.offer_product.create({
        data: {
          offer: parseInt(req.query.offer),
          product: parseInt(req.query.product),
          quantity: parseInt(req.query.qty),
        },
        include: {
          product_offer_productToproduct: true,
        },
      });
      res.status(201).json(additem_response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  await prisma.$disconnect();
}
