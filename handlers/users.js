import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const index = async (req, res) => {
    const users = await prisma.user.findMany();
    
    return res.json({
        status: 'success',
        message: null,
        data: users
    });
}

const store = async (req, res) => {
    const {name, email, phone} = req.body;

    if(!name || !email || !phone) {
        return res.status(400).json({
            status: 'error',
            message: 'Missing required fields'
        })
    }

    const isUserExist = await prisma.user.findUnique({
        where: { email: req.body.email }
    });

    if(isUserExist){
        return res.status(400).json({
            status: 'error',
            message: 'User already exists'
        });
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            phone
        }
    })


    return res.json({
        status: 'success',
        message: 'User created',
        data: user
    })
}

const show = async (req, res) => {
    const id = parseInt(req.params.id);

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }

    const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
    })

    if(!user) { 
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        })
    }

    return res.json({
        status: 'success',
        message: null,
        data: user
    });
}

const update = async (req, res) => {
    const id = parseInt(req.params.id);

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }

    const user = await prisma.user.findUnique({
        where: { id }
    });

    if(!user){
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        });
    }

    if(req.body.email){
        const checkEmail = await prisma.user.findUnique({
            where: { email: req.body.email }
        });

        if(checkEmail && req.body.email !== user.email) {
            return res.status(409).json({
                status: 'error',
                message: 'email already exist'
            });
        }
    }

    const updatedUser = await prisma.user.update({
        where: {
            id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            image: req.body.image
        }
    });

    return res.json({
        status: 'success',
        message: `user updated`,
        data: updatedUser
    });
}

const destroy = async (req, res) => {
    const id = parseInt(req.params.id);

    if(!id || !Number.isInteger(parseInt(id))) { 
        return res.status(400).json({
            status: 'error',
            message: 'Invalid id parameter'
        })
    }

    const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
    })

    if(!user) { 
        return res.status(404).json({
            status: 'error',
            message: 'User not found'
        })
    }

    await prisma.user.delete({
        where: { id: parseInt(id) },
    })

    return res.json({
        status: 'success',
        message: `user deleted`
    });
}

const indexReviews = async (req,res) =>{

    const usersReview = await prisma.user.findMany({
        include:{reviews:true}
    });

    return res.json({
        status: 'success',
        message: 'success get review',
        data: usersReview
    });
}

const showReviews = async (req,res) =>{

    const id = req.params.id;

    const usersReview = await prisma.user.findMany({
        where:{
            id: Number(id)
        },
        include:{reviews:true}
    });

    return res.json({
        status: 'success',
        message: 'success get review',
        data: usersReview
    });
}

export { index, show, update, destroy, store, indexReviews, showReviews };