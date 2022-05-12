
// const store = async (req, res) => {
//     return res.json({
//         status: 'success',
//         message: 'Post routes'
//     })
// }

// const show = async (req, res) => {
//     const id = req.params.id;

//     if(!id || !Number.isInteger(parseInt(id))) { 
//         return res.status(400).json({
//             status: 'error',
//             message: 'Invalid id parameter'
//         })
//     }

//     return res.json({
//         status: 'success',
//         message: `Show Route id: ${id}`
//     });
// }
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
        message: null,
        data: review
    });
}

const store = async (req, res) => {
    return res.json({
        status: 'success',
        message: 'Post routes'
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
export { index, show, store, update, destroy };