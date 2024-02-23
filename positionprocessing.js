// index.js

const positionservice = require('position-service');
const matrixservice = require('matrix-service');

const positonprocessresp = []
async function super_positionprocessing(inputrequest) {

    //call it in sequence //First Position
    const filtpositiondata = filterDataByEntity(inputrequest, 'Action', 'Position' );
    if (filtpositiondata.length != 0) {
        const positionresponse = await  positionservice.createposition(filtpositiondata)
        positonprocessresp.push(positionresponse);
    }

    const filmatrixdata = filterDataByEntity(inputrequest, 'Action', 'Matrix')
    if (filmatrixdata.length != 0) {
        const matrixresponse = await  matrixservice.createposition(filmatrixdata)
        positonprocessresp.push(matrixresponse);
    }
    return positonprocessresp 
}


function filterDataByEntity(array, property, value) {
    return array.filter(item => item[property] === value);
}

module.exports = { super_positionprocessing };
