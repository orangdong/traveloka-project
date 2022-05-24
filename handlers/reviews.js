import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const index = async (req, res) => {
    const reviews = await prisma.review.findMany();
    
    return res.json({
        status: 'success',
        message: null,
        data: reviews
    });
}

const show = async (req, res) => {
    const id = req.params.id;

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }

    const review = await prisma.review.findUnique({
        where: {
          id: parseInt(id),
        },
    })

    if(!review) { 
        return res.status(404).json({
            status: 'error',
            message: 'Review not found'
        })
    }

    return res.json({
        status: 'success',
        message: `Show Route id: ${id}`,
        data: review
    });
}

const store = async (req, res) => {
    const {user_id, hotel_id, rating, comment} = req.body;

    if(!user_id || !hotel_id || !rating || comment) {
        return res.status(400).json({
            status: 'error',
            message: 'Missing required fields'
        })
    }

    const review = await prisma.review.create({
        data: {
            user_id,
            hotel_id,
            rating,
            comment
        }
    })


    return res.json({
        status: 'success',
        message: 'Review created',
        data: review
    })
}

const update = async (req, res) => {
    const id = req.params.id;

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }
    
    const review = await prisma.review.findUnique({
        where: {
          id: parseInt(id),
        },
    })

    if(!review) { 
        return res.status(404).json({
            status: 'error',
            message: 'Review not found'
        })
    }
    const {rating, comment} = req.body;

    if(!rating || !comment ) {
        return res.status(400).json({
            status: 'error',
            message: 'Missing required fields'
        })
    }

    const updatedReview = await prisma.user.update({
        where: {
            id: parseInt(id),
        },
        data: {
            rating: rating,
            comment: comment,
            data: updatedReview,
        }
    });

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

    const review = await prisma.review.findUnique({
        where: {
          id: parseInt(id),
        },
    })

    if(!review) { 
        return res.status(404).json({
            status: 'error',
            message: 'Review not found'
        })
    }

    await prisma.user.delete({
        where: { id: parseInt(id) },
    })

    return res.json({
        status: 'success',
        message: `Delete Route id: ${id}`
    });
}


export { index, show, store, update, destroy };