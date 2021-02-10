import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient();

  try {
    const deletion = await prisma.offer_product.delete({
      where: {
        id: parseInt(req.query.id),
      },
    });
    res.status(200).json(deletion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  await prisma.$disconnect();
}
