import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient();

  try {
    const total = await prisma.$queryRaw`
        SELECT o.offer, SUM(o.quantity * p.price)
        FROM offer_product o
        INNER JOIN product p ON o.product = p.id
        WHERE o.offer = ${parseInt(req.query.id)}
        GROUP BY o.offer
        `;
    res.status(200).json(total);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  await prisma.$disconnect();
}
