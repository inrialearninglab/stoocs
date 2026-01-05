import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '~~/prisma/generated/client';

const prismaClientSingleton = () => {
    const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL, schema: 'public' });
    return new PrismaClient({ adapter });
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
