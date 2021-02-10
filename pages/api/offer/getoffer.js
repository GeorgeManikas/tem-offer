import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  const prisma = new PrismaClient();
  try {
    const offer = await prisma.offers.findMany({
      include: {
        offer_product: {
          include: {
            product_offer_productToproduct: true,
          },
        },
      },
      where: {
        id: parseInt(req.query.id),
      },
      orderBy: { id: "asc" },
    });
    res.status(200).json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  prisma.$disconnect();
}
