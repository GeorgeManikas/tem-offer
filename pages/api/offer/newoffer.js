import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient();

  try {
    const offer = await prisma.offers.create({
      data: {
        description: req.query.description,
      },
    });
    res.status(201).json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  prisma.$disconnect();
}
