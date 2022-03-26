const getCallbackBranch = (reason, value, res) => {
    if (reason) {
        console.error(`
    ================================================
    ${reason}
    ================================================`);
        return res.status(500).send(reason.message);
    } else {
        if (value == null) {
            return res.status(404).send('Data does not found');
        } else {
            return res.status(200).json(value);
        }
    }
}


module.exports = {
    getCallbackBranch
}