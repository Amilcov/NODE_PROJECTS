const { Owner } = require('../models/index')

async function insertOwner() {
    await Owner.create({
        firstName: "Tom",
        lastName: "Sawyer"
    });

    const owner = await Owner.build({
        firstName: "Huckleberry",
        lastName: "Finn"
    });
    await owner.save();
}

insertOwner();