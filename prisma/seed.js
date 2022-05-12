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
    const hotel1 = await prisma.hotel.create({
        data: {
            name: 'InterContinental Hotel Dago Pakar Bandung',
            address: 'Jalan Resor Dago Pakar Raya 2B Resor Dago Pakar, Mekarsaluyu, Kec. Cimenyan, Kota Bandung, Jawa Barat 40198, Indonesia',
            image: 'https://ak-d.tripcdn.com/images/220r0u000000j8qbf8514_Z_1080_808_R5_D.jpg',
            description: 'Hotel Bintang 5 di Bandung'
        },
    })
    const review1 = await prisma.review.create({
        data: {
            user_id: user1.id,
            hotel_id:  hotel1.id,
            rating: 1,
            comment: 'Makanannya tidak sesuai dengan selera saya, tidak ada pecel dan lalapan.'
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