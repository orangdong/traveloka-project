import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const main = async () => {
    const user1 = await prisma.user.create({
        data: {
            name: 'John Doe',
            phone: '+55 11 99999-9999',
            image: 'https://avatars2.githubusercontent.com/u/174825?s=460&v=4',
            email: 'john@email.com'
        },
    })
    const user2 = await prisma.user.create({
        data: {
            name: 'Jane Doe',
            phone: '+55 11 99999-9999',
            image: 'https://avatars2.githubusercontent.com/u/174821?s=460&v=4',
            email: 'jane@email.com' 
        },
    })
    const user3 = await prisma.user.create({
        data: {
            name: 'John Smith',
            phone: '+55 11 99999-9999',
            image: 'https://avatars2.githubusercontent.com/u/174822?s=460&v=4',
            email: 'johnsmith@email.com'
        },
    })
    const user4 = await prisma.user.create({
        data: {
            name: 'Jane Smith',
            phone: '+55 11 99999-9999',
            image: 'https://avatars2.githubusercontent.com/u/174823?s=460&v=4',
            email: 'janesmith@email.com'
        },
    })
    const user5 = await prisma.user.create({
        data: {
            name: 'John Bob',
            phone: '+55 11 99999-9999',
            image: 'https://avatars2.githubusercontent.com/u/174824?s=460&v=4',
            email: 'johnbob@email.com'
        },
    })

    console.log({ user1, user2, user3, user4, user5 });
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })