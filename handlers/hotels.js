import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const index = async (req, res) => {

    const hotels = await prisma.hotel.findMany();
    
    return res.json({
        status: 'success',
        message: null,
        data: hotels
    });
}

const store = async (req, res) => {
    return res.json({
        status: 'success',
        message: 'Post routes'
    })
}

const show = async (req, res) => {
    const id = req.params.id;

    const hotel = await prisma.hotel.findUnique({
        where:{
            id: Number(id)
        }
    });

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }

    return res.json({
        status: 'success',
        message: `Show Route id: ${id}`,
        data: hotel
    });
}

const update = async (req, res) => {
    const id = req.params.id;

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }

    return res.json({
        status: 'success',
        message: `Update Route id: ${id}`
    });
}

const destroy = async (req, res) => {
    const id = req.params.id;

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }

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

export { index, show, update, destroy, store, indexReviews };