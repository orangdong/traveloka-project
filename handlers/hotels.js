import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { collabModel } from '../services/recommendation.js';

const prisma = new PrismaClient();

const index = async (req, res) => {
    const userId = req.user.user_id;

    const user = await prisma.user.findUnique({
        where: {
          firebaseId: userId,
        },
    })

    const recommendations = await collabModel(user.id);
    console.log(recommendations);
    const prismaOptions = {
        include: {
            hotelFacilities: true,
            pointOfInterests: true,
            roomFacilities: true,
        },
        where: {
            id: {
                in: recommendations,
            },
        },
    }

    if(req.query.limit) {
        prismaOptions.take = Number(req.query.limit);
    }
    if(req.query.offset) {
        prismaOptions.skip = Number(req.query.offset);
    }
    if(req.query.search) {
        prismaOptions.where.OR = [
            {
                name: {
                    contains: req.query.search,
                },
            },
            {
                city: {
                    contains: req.query.search,
                },
            },
        ]
    }

    const hotels = await prisma.hotel.findMany(prismaOptions);
    
    return res.json({
        status: 'success',
        message: null,
        data: hotels
    });
}

const show = async (req, res) => {
    const id = req.params.id;

    const hotel = await prisma.hotel.findUnique({
        where:{
            id
        },include: {
          hotelFacilities: true,
          pointOfInterests: true,
          roomFacilities: true,
        },
    });

    return res.json({
        status: 'success',
        message: `Show Route id: ${id}`,
        data: hotel
    });
}

const destroy = async (req, res) => {
    const id = req.params.id;

    return res.json({
        status: 'success',
        message: `Delete Route id: ${id}`
    });
}

const indexReviews = async (req,res) =>{

    const hotelsReview = await prisma.hotel.findMany({
        include:{reviews:true}
    });

    return res.json({
        status: 'success',
        message: 'success get review',
        data: hotelsReview
    });
}


const hotelReview = async (req,res) =>{
    const id = req.params.id;

    const hotelReview = await prisma.review.findMany({
        where: {
            hotelId: {
                equals: id
            }
        }
    });

    return res.json({
        status: 'success',
        message: 'success get review',
        data: hotelReview
    });
}

export { index, show, destroy, hotelReview, indexReviews };
