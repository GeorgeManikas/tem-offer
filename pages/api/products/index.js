import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
  // create request object of queries
  let ors = {};
  Object.entries(req.query).map((r, i) => {
    if (r[0] === "cat_id" || r[0] === "id") {
      ors[r[0]] = { equals: parseInt(r[1]) };
    } else {
      ors[r[0]] = { contains: r[1].toUpperCase() };
    }
  });

  const prisma = new PrismaClient();
  let products;
  try {
    if (
      !req.query.code &&
      !req.query.description &&
      !req.query.num_code &&
      !req.query.id &&
      !req.query.cat_id
    ) {
      products = await prisma.product.findMany({
        include: { categories: true },
        orderBy: { id: "asc" },
      });
    } else {
      products = await prisma.product.findMany({
        where: {
          OR: [ors],
        },
      });
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
  res.status(200).json(products);
  await prisma.$disconnect();
}
