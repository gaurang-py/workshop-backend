import { PrismaClient } from '@prisma/client';
// const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const getallProducts = async (req, res) => {
    const products = await prisma.products.findMany();
    res.json(products);
}
 