import pkg from '@prisma/client';
import e from 'express';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const index = async (req, res) => {
    var hotels
    if (!req.query.offset || !req.query.limit){
        hotels = await prisma.hotel.findMany({
            include: {
                hotel_facilities: true,
                point_of_interests: true,
                room_facilities: true,
            },
        });
        

    }else{
        hotels = await prisma.hotel.findMany({
            skip: Number(req.query.offset),
            take: Number(req.query.limit),
            include: {
                hotel_facilities: true,
                point_of_interests: true,
                room_facilities: true,
            },
        });
        
    }
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
          hotel_facilities: true,
          point_of_interests: true,
          room_facilities: true,
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
            hotel_id: {
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
